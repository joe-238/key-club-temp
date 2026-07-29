export function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatMonthYear(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function formatShortDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function formatTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function getMonthGrid(viewDate: Date): Date[] {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const first = new Date(year, month, 1);
  // Monday-first week
  const startOffset = (first.getDay() + 6) % 7;
  const gridStart = new Date(year, month, 1 - startOffset);
  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    return d;
  });
}

export function getWeekDays(viewDate: Date): Date[] {
  const d = startOfDay(viewDate);
  const offset = (d.getDay() + 6) % 7;
  const monday = new Date(d);
  monday.setDate(d.getDate() - offset);
  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);
    return day;
  });
}

export function eventsOnDay<T extends { start: string }>(
  events: T[],
  day: Date,
): T[] {
  return events.filter((e) => isSameDay(new Date(e.start), day));
}

export function upcomingEvents<T extends { start: string }>(
  events: T[],
  limit = 5,
): T[] {
  const now = new Date();
  return events
    .filter((e) => new Date(e.start) >= startOfDay(now))
    .sort((a, b) => +new Date(a.start) - +new Date(b.start))
    .slice(0, limit);
}

export function countEventsInMonth<T extends { start: string }>(
  events: T[],
  viewDate: Date,
): number {
  const y = viewDate.getFullYear();
  const m = viewDate.getMonth();
  return events.filter((e) => {
    const d = new Date(e.start);
    return d.getFullYear() === y && d.getMonth() === m;
  }).length;
}
