import { client } from "@/sanity/lib/client";
import { isSanityConfigured } from "@/sanity/env";
import type { AboutPage, ClubEvent, Person, SiteSettings } from "@/lib/types";
import {
  demoAbout,
  demoEvents,
  demoPeople,
  demoSiteSettings,
} from "@/lib/demo-data";

const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  chapterName,
  tagline,
  logo,
  heroCtaLabel,
  heroCtaHref,
  footerText,
  email,
  socialLinks
}`;

const peopleQuery = `*[_type == "person"] | order(sortOrder asc, name asc){
  _id,
  name,
  position,
  photo,
  bio,
  email,
  instagram,
  showOnContacts,
  showOnStaff,
  sortOrder
}`;

const eventsQuery = `*[_type == "event"] | order(start asc){
  _id,
  title,
  start,
  end,
  location,
  description,
  eventType,
  image
}`;

const aboutQuery = `*[_type == "aboutPage"][0]{
  headline,
  body,
  image
}`;

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback;
  try {
    const data = await client.fetch<T>(query);
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await safeFetch<SiteSettings | null>(
    siteSettingsQuery,
    demoSiteSettings,
  );
  return {
    ...demoSiteSettings,
    ...data,
    chapterName: data?.chapterName || demoSiteSettings.chapterName,
  };
}

export async function getPeople(): Promise<Person[]> {
  const data = await safeFetch<Person[]>(peopleQuery, demoPeople);
  return data.length ? data : demoPeople;
}

export async function getEvents(): Promise<ClubEvent[]> {
  const data = await safeFetch<ClubEvent[]>(eventsQuery, demoEvents);
  return data.length ? data : demoEvents;
}

export async function getAboutPage(): Promise<AboutPage> {
  const data = await safeFetch<AboutPage | null>(aboutQuery, demoAbout);
  return {
    ...demoAbout,
    ...data,
    headline: data?.headline || demoAbout.headline,
  };
}

export async function getContacts(): Promise<Person[]> {
  const people = await getPeople();
  return people.filter((p) => p.showOnContacts);
}

export async function getStaff(): Promise<Person[]> {
  const people = await getPeople();
  return people.filter((p) => p.showOnStaff !== false);
}
