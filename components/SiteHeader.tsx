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

export function SiteHeader({ chapterName }: { chapterName: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname?.startsWith("/studio")) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-kc-border/70 bg-kc-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-kc-blue text-sm font-bold tracking-tight text-white shadow-[0_8px_20px_rgba(0,61,165,0.28)] transition group-hover:bg-kc-blue-deep">
            KC
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-kc-blue-deep sm:text-2xl">
            {chapterName}
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
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-kc-blue text-white"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-kc-border bg-white text-kc-blue-deep md:hidden"
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
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-kc-ink hover:bg-kc-blue-soft"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
