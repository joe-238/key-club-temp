"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contacts", label: "Contacts" },
  { href: "/staff", label: "Staff" },
];

const SCHOOL_NAME = "Staten Island Technical High School";

export function SiteHeader({
  chapterName,
  tagline,
}: {
  chapterName: string;
  tagline?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname?.startsWith("/studio")) return null;

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-kc-yellow-deep/30 bg-kc-yellow px-4 py-2 text-center text-xs font-semibold tracking-wide text-kc-blue-deep sm:text-sm">
        {tagline ??
          "Caring — Our Way of Life · Student-led service & leadership"}
      </div>

      <div className="border-b border-kc-border/70 bg-kc-white/95 shadow-[0_4px_24px_rgba(15,28,51,0.06)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <img
              src="/logo.png"
              alt="School logo"
              className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-lg font-semibold leading-tight tracking-tight text-kc-blue-deep sm:text-xl lg:text-2xl">
                {chapterName}
              </span>
              <span className="mt-0.5 hidden truncate text-[11px] font-medium uppercase tracking-[0.12em] text-kc-muted sm:block lg:text-xs">
                {SCHOOL_NAME}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-kc-blue text-white shadow-[0_4px_14px_rgba(0,61,165,0.25)]"
                      : "text-kc-ink/80 hover:bg-kc-blue-soft hover:text-kc-blue-deep"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-kc-border bg-white text-kc-blue-deep md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </div>
          </button>
        </div>

        {open && (
          <nav className="border-t border-kc-border bg-white px-4 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold text-kc-ink hover:bg-kc-blue-soft"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
