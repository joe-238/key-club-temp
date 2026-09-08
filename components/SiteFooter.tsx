"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SiteSettings } from "@/lib/types";

const SCHOOL_NAME = "Staten Island Technical High School";

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/studio")) return null;

  return (
    <footer className="mt-0 border-t-4 border-kc-yellow bg-kc-blue-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-semibold sm:text-3xl">
            {settings.chapterName}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-kc-yellow">
            {SCHOOL_NAME}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
            {settings.footerText ??
              "Student-led service and leadership in our school and community."}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-kc-yellow">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            <li>
              <Link href="/" className="transition hover:text-kc-yellow">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-kc-yellow">
                About
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="transition hover:text-kc-yellow">
                Contacts
              </Link>
            </li>
            <li>
              <Link href="/staff" className="transition hover:text-kc-yellow">
                Staff
              </Link>
            </li>
            <li>
              <Link href="/#calendar" className="transition hover:text-kc-yellow">
                Event Calendar
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-kc-yellow">
            Connect
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            {settings.email && (
              <li>
                <a
                  href={`mailto:${settings.email}`}
                  className="transition hover:text-kc-yellow"
                >
                  {settings.email}
                </a>
              </li>
            )}
            {settings.socialLinks?.map((link) => (
              <li key={`${link.platform}-${link.url}`}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-kc-yellow"
                >
                  {link.label || link.platform}
                </a>
              </li>
            ))}
            {!settings.email &&
              (!settings.socialLinks || settings.socialLinks.length === 0) && (
                <li className="text-white/50">Links coming soon</li>
              )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#001f58] px-4 py-5 text-center text-xs text-white/55 sm:px-6">
        © {new Date().getFullYear()} {settings.chapterName} · {SCHOOL_NAME}.
        Caring — Our Way of Life.
      </div>
    </footer>
  );
}
