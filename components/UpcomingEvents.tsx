import Link from "next/link";
import { formatShortDate, formatTime, upcomingEvents } from "@/lib/dates";
import type { ClubEvent } from "@/lib/types";

const typeLabel: Record<string, string> = {
  meeting: "Meeting",
  service: "Service",
  social: "Social",
  other: "Event",
};

export function UpcomingEvents({ events }: { events: ClubEvent[] }) {
  const upcoming = upcomingEvents(events, 5);

  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-kc-blue">
            Coming up
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-kc-ink">
            Upcoming events
          </h2>
        </div>
        <Link
          href="#calendar"
          className="hidden text-sm font-semibold text-kc-blue hover:text-kc-blue-deep sm:inline"
        >
          Jump to calendar
        </Link>
      </div>

      {upcoming.length === 0 ? (
        <p className="mt-6 text-kc-muted">No upcoming events yet. Check back soon.</p>
      ) : (
        <ul className="mt-6 divide-y divide-kc-border overflow-hidden rounded-2xl border border-kc-border bg-white shadow-[0_8px_30px_rgba(15,28,51,0.06)]">
          {upcoming.map((ev) => (
            <li
              key={ev._id}
              className="flex flex-col gap-2 px-5 py-4 transition hover:bg-kc-blue-soft/40 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-semibold text-kc-ink">{ev.title}</p>
                <p className="mt-1 text-sm text-kc-muted">
                  {formatShortDate(ev.start)} · {formatTime(ev.start)}
                  {ev.location ? ` · ${ev.location}` : ""}
                </p>
              </div>
              <span className="inline-flex w-fit rounded-full bg-kc-yellow/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-kc-blue-deep">
                {typeLabel[ev.eventType ?? "other"]}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
