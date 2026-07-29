import Link from "next/link";
import { EventCalendar } from "@/components/EventCalendar";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { getEvents, getSiteSettings } from "@/lib/queries";

export default async function HomePage() {
  const [settings, events] = await Promise.all([
    getSiteSettings(),
    getEvents(),
  ]);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pt-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-kc-blue">
              Student-led service
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-kc-blue-deep sm:text-6xl lg:text-7xl">
              {settings.chapterName}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-kc-muted">
              {settings.tagline ??
                "Caring — Our Way of Life. Join us in serving our school and community."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={settings.heroCtaHref || "#calendar"}
                className="inline-flex items-center justify-center rounded-full bg-kc-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,61,165,0.28)] transition hover:bg-kc-blue-deep"
              >
                {settings.heroCtaLabel || "View events"}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-kc-border bg-white px-6 py-3 text-sm font-semibold text-kc-blue-deep transition hover:border-kc-blue hover:bg-kc-blue-soft"
              >
                About the chapter
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[280px] lg:block">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-kc-blue via-kc-blue-deep to-[#001a4d]" />
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-kc-yellow/90 blur-[2px]" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <p className="font-display text-2xl font-semibold text-white">
                Service. Leadership. Community.
              </p>
              <p className="mt-2 text-sm text-white/75">
                Check the calendar for meetings, service projects, and member
                events.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <EventCalendar events={events} />
        <UpcomingEvents events={events} />
      </div>
    </div>
  );
}
