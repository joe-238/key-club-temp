import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getSiteSettings } from "@/lib/queries";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: {
      default: settings.chapterName,
      template: `%s · ${settings.chapterName}`,
    },
    description:
      settings.tagline ??
      "Student-led service and leadership through Key Club.",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <div className="relative min-h-screen overflow-x-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 10% -10%, color-mix(in srgb, var(--kc-blue) 18%, transparent), transparent),
                radial-gradient(ellipse 60% 40% at 90% 0%, color-mix(in srgb, var(--kc-yellow) 22%, transparent), transparent),
                linear-gradient(180deg, var(--kc-blue-soft) 0%, var(--kc-surface) 38%, var(--kc-surface) 100%)
              `,
            }}
          />
          <SiteHeader chapterName={settings.chapterName} />
          <main className="flex-1">{children}</main>
          <SiteFooter settings={settings} />
        </div>
      </body>
    </html>
  );
}
