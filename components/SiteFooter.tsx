"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SiteSettings } from "@/lib/types";

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/studio")) return null;

  return (
    <footer className="mt-20 border-t border-kc-border bg-kc-blue-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">{settings.chapterName}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
            {settings.footerText ??
              "Student-led service and leadership in our school and community."}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-kc-yellow">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>
              <Link href="/about" className="hover:text-kc-yellow">
                About
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-kc-yellow">
                Contacts
              </Link>
            </li>
            <li>
              <Link href="/staff" className="hover:text-kc-yellow">
                Staff
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-kc-yellow">
            Connect
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            {settings.email && (
              <li>
                <a
                  href={`mailto:${settings.email}`}
                  className="hover:text-kc-yellow"
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
                  className="hover:text-kc-yellow"
                >
                  {link.label || link.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50 sm:px-6">
        © {new Date().getFullYear()} {settings.chapterName}. Caring — Our Way of
        Life.
      </div>
    </footer>
  );
}
