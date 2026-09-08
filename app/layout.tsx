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
        <div className="relative min-h-screen overflow-x-hidden bg-white">
          <SiteHeader
            chapterName={settings.chapterName}
            tagline={settings.tagline}
          />
          <main className="flex-1">{children}</main>
          <SiteFooter settings={settings} />
        </div>
      </body>
    </html>
  );
}
