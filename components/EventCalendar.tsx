"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  countEventsInMonth,
  eventsOnDay,
  formatMonthYear,
  formatShortDate,
  formatTime,
  getMonthGrid,
  getWeekDays,
  isSameDay,
  startOfDay,
} from "@/lib/dates";
import type { ClubEvent, EventType } from "@/lib/types";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const typeColor: Record<EventType | "other", string> = {
  meeting: "bg-kc-blue",
  service: "bg-kc-yellow",
  social: "bg-emerald-500",
  other: "bg-kc-blue-muted",
};

function EventTypeDot({ type }: { type?: EventType }) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rounded-full ${typeColor[type ?? "other"]}`}
      aria-hidden
    />
  );
}

export function EventCalendar({ events }: { events: ClubEvent[] }) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [mode, setMode] = useState<"month" | "week">("month");
  const [cursor, setCursor] = useState(() => startOfDay(new Date()));
  const [selected, setSelected] = useState(() => startOfDay(new Date()));

  const days = useMemo(
    () => (mode === "month" ? getMonthGrid(cursor) : getWeekDays(cursor)),
    [cursor, mode],
  );

  const monthCount = countEventsInMonth(events, cursor);
  const selectedEvents = eventsOnDay(events, selected);

  function shift(dir: -1 | 1) {
    const next = new Date(cursor);
    if (mode === "month") next.setMonth(next.getMonth() + dir);
    else next.setDate(next.getDate() + dir * 7);
    setCursor(next);
  }

  return (
    <section id="calendar" className="scroll-mt-24">
      <div className="rounded-[2rem] bg-kc-blue-soft/80 p-3 sm:p-5">
        <div className="rounded-[1.6rem] bg-white p-4 shadow-[0_20px_50px_rgba(15,28,51,0.08)] sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex w-fit rounded-full bg-kc-surface p-1">
              {(["week", "month"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition ${
                    mode === m
                      ? "bg-white text-kc-blue-deep shadow-sm"
                      : "text-kc-muted hover:text-kc-ink"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
            <p className="text-sm text-kc-muted">
              {mode === "month" ? "Monthly" : "Weekly"} total:{" "}
              <span className="font-semibold text-kc-blue-deep">
                {monthCount} event{monthCount === 1 ? "" : "s"}
              </span>
            </p>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold text-kc-ink sm:text-3xl">
              {formatMonthYear(cursor)}
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => shift(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-kc-border text-kc-blue-deep transition hover:bg-kc-blue-soft"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => {
                  setCursor(today);
                  setSelected(today);
                }}
                className="rounded-full border border-kc-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-kc-blue-deep hover:bg-kc-blue-soft"
              >
                Today
              </button>
              <button
                type="button"
                onClick={() => shift(1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-kc-border text-kc-blue-deep transition hover:bg-kc-blue-soft"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>

          <div
            className={`mt-5 grid gap-2 ${mode === "month" ? "grid-cols-7" : "grid-cols-7"}`}
          >
            {WEEKDAYS.map((day, i) => {
              const highlight = selected.getDay() === ((i + 1) % 7);
              return (
                <div
                  key={day}
                  className={`pb-1 text-center text-xs font-medium sm:text-sm ${
                    highlight ? "text-kc-yellow-deep" : "text-kc-muted"
                  }`}
                >
                  {day}
                </div>
              );
            })}

            {days.map((day) => {
              const inMonth = day.getMonth() === cursor.getMonth();
              const isToday = isSameDay(day, today);
              const isSelected = isSameDay(day, selected);
              const dayEvents = eventsOnDay(events, day);
              const show =
                mode === "week" || inMonth || dayEvents.length > 0;

              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  onClick={() => setSelected(startOfDay(day))}
                  className={`relative flex min-h-[4.25rem] flex-col items-center rounded-[1.1rem] border bg-white p-2 transition sm:min-h-[5rem] ${
                    isSelected
                      ? "border-kc-blue shadow-[0_0_0_2px_rgba(0,61,165,0.2)]"
                      : "border-transparent hover:border-kc-border"
                  } ${!inMonth && mode === "month" ? "opacity-40" : ""} ${
                    !show ? "invisible" : ""
                  } ${isToday ? "bg-gradient-to-b from-kc-yellow/35 to-white" : "bg-kc-surface/60"}`}
                >
                  <span
                    className={`mt-1 flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold ${
                      isSelected
                        ? "bg-kc-blue text-white"
                        : isToday
                          ? "text-kc-blue-deep"
                          : "text-kc-ink"
                    }`}
                  >
                    {day.getDate()}
                  </span>
                  {dayEvents.length > 0 && (
                    <div className="mt-auto flex flex-wrap items-center justify-center gap-1 pb-1">
                      {dayEvents.slice(0, 3).map((ev) => (
                        <EventTypeDot
                          key={ev._id}
                          type={ev.eventType}
                        />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.toISOString()}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              className="mt-6 border-t border-kc-border pt-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kc-muted">
                {formatShortDate(selected)}
              </p>
              {selectedEvents.length === 0 ? (
                <p className="mt-2 text-sm text-kc-muted">
                  No events scheduled for this day.
                </p>
              ) : (
                <ul className="mt-3 space-y-3">
                  {selectedEvents.map((ev) => (
                    <li
                      key={ev._id}
                      className="flex gap-3 rounded-2xl border border-kc-border/80 bg-kc-surface/50 p-3"
                    >
                      <div className="mt-1">
                        <EventTypeDot type={ev.eventType} />
                      </div>
                      <div>
                        <p className="font-semibold text-kc-ink">{ev.title}</p>
                        <p className="mt-0.5 text-sm text-kc-muted">
                          {formatTime(ev.start)}
                          {ev.location ? ` · ${ev.location}` : ""}
                        </p>
                        {ev.description && (
                          <p className="mt-1 text-sm leading-relaxed text-kc-ink/80">
                            {ev.description}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
