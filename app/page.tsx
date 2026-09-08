import Link from "next/link";
import { EventCalendar } from "@/components/EventCalendar";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { getEvents, getSiteSettings } from "@/lib/queries";

export default async function HomePage() {
  const [settings, events] = await Promise.all([
    getSiteSettings(),
    getEvents(),
  ]);

  const tagline =
    settings.tagline ??
    "Caring — Our Way of Life. Join us in serving our school and community.";

  return (
    <div>
      <section className="relative overflow-hidden bg-kc-blue-deep text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 90% 10%, color-mix(in srgb, var(--kc-yellow) 35%, transparent), transparent 55%), radial-gradient(ellipse 60% 50% at 0% 100%, color-mix(in srgb, var(--kc-blue) 60%, transparent), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kc-yellow">
                Staten Island Technical High School
              </p>
              <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                {settings.chapterName}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                {tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={settings.heroCtaHref || "#calendar"}
                  className="inline-flex items-center justify-center rounded-full bg-kc-yellow px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-kc-blue-deep shadow-[0_8px_24px_rgba(246,195,68,0.35)] transition hover:bg-white"
                >
                  {settings.heroCtaLabel || "View events"}
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/20"
                >
                  About the chapter
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm">
                <div className="mb-6 h-1 w-12 rounded-full bg-kc-yellow" />
                <p className="font-display text-3xl font-semibold leading-snug">
                  Service. Leadership. Community.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  Check the calendar for meetings, service projects, and member
                  events throughout the school year.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
                  {[
                    { label: "Meetings", desc: "Weekly check-ins" },
                    { label: "Service", desc: "Community projects" },
                    { label: "Events", desc: "Social & fundraisers" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-xs font-bold uppercase tracking-wider text-kc-yellow">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs text-white/65">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-kc-yellow" aria-hidden />
      </section>

      <section className="border-b border-kc-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-kc-blue">
              Welcome
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-kc-blue-deep sm:text-4xl">
              Leadership Through Service
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-kc-yellow" />
            <p className="mt-6 text-lg leading-relaxed text-kc-muted">
              Key Club is a student-led organization that teaches leadership
              through service to others. Our chapter at Staten Island Technical
              High School plans projects that support our school and local
              community year-round.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full bg-kc-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,61,165,0.22)] transition hover:bg-kc-blue-deep"
              >
                Meet our officers
              </Link>
              <Link
                href="/staff"
                className="inline-flex items-center justify-center rounded-full border border-kc-border bg-kc-surface px-6 py-3 text-sm font-semibold text-kc-blue-deep transition hover:border-kc-blue hover:bg-kc-blue-soft"
              >
                View staff
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-kc-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-kc-blue">
              Schedule
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-kc-blue-deep sm:text-4xl">
              Event Calendar
            </h2>
            <p className="mt-3 max-w-2xl text-kc-muted sm:text-lg">
              Browse meetings, service projects, and chapter events. Click a day
              to see what&apos;s happening.
            </p>
          </div>
          <EventCalendar events={events} />
        </div>
      </section>

      <section className="border-t border-kc-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <UpcomingEvents events={events} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-kc-blue text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, var(--kc-yellow), transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-kc-yellow">
            Get involved
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Join {settings.chapterName}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Interested in volunteering, earning service hours, or building
            leadership skills? Reach out to our officers to learn how to join.
          </p>
          <Link
            href="/contacts"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-kc-yellow px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-kc-blue-deep transition hover:bg-white"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
