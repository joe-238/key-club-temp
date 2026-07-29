import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url";

export type SocialLink = {
  platform?: string;
  label?: string;
  url?: string;
};

export type SiteSettings = {
  chapterName: string;
  tagline?: string;
  logo?: SanityImageSource;
  heroCtaLabel?: string;
  heroCtaHref?: string;
  footerText?: string;
  email?: string;
  socialLinks?: SocialLink[];
};

export type Person = {
  _id: string;
  name: string;
  position: string;
  photo?: SanityImageSource;
  bio?: string;
  email?: string;
  instagram?: string;
  showOnContacts?: boolean;
  showOnStaff?: boolean;
  sortOrder?: number;
};

export type EventType = "meeting" | "service" | "social" | "other";

export type ClubEvent = {
  _id: string;
  title: string;
  start: string;
  end?: string;
  location?: string;
  description?: string;
  eventType?: EventType;
  image?: SanityImageSource;
};

export type AboutPage = {
  headline: string;
  body?: PortableTextBlock[];
  image?: SanityImageSource;
};
