import type { AboutPage, ClubEvent, Person, SiteSettings } from "@/lib/types";

export const demoSiteSettings: SiteSettings = {
  chapterName: "Key Club",
  tagline:
    "Caring — Our Way of Life. Serving our school and community together.",
  heroCtaLabel: "View events",
  heroCtaHref: "#calendar",
  footerText: "Key Club International — student-led service leadership.",
  email: "keyclub@school.edu",
  socialLinks: [
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://instagram.com",
    },
  ],
};

export const demoPeople: Person[] = [
  {
    _id: "demo-president",
    name: "Alex Rivera",
    position: "President",
    bio: "Leads meetings, represents the chapter, and keeps service projects on track.",
    email: "president@keyclub.school",
    instagram: "@alex.keyclub",
    showOnContacts: true,
    showOnStaff: true,
    sortOrder: 1,
  },
  {
    _id: "demo-vp",
    name: "Jordan Lee",
    position: "Vice President",
    bio: "Coordinates committees and supports membership engagement.",
    email: "vp@keyclub.school",
    showOnContacts: true,
    showOnStaff: true,
    sortOrder: 2,
  },
  {
    _id: "demo-secretary",
    name: "Sam Patel",
    position: "Secretary",
    bio: "Keeps minutes, attendance, and chapter records organized.",
    email: "secretary@keyclub.school",
    showOnContacts: true,
    showOnStaff: true,
    sortOrder: 3,
  },
  {
    _id: "demo-treasurer",
    name: "Casey Nguyen",
    position: "Treasurer",
    bio: "Manages dues, budgets, and fundraising for service events.",
    email: "treasurer@keyclub.school",
    showOnContacts: false,
    showOnStaff: true,
    sortOrder: 4,
  },
  {
    _id: "demo-editor",
    name: "Morgan Blake",
    position: "Editor",
    bio: "Shares chapter news and highlights our service work.",
    showOnContacts: false,
    showOnStaff: true,
    sortOrder: 5,
  },
  {
    _id: "demo-historian",
    name: "Riley Chen",
    position: "Historian",
    bio: "Captures photos and stories from every project.",
    showOnContacts: false,
    showOnStaff: true,
    sortOrder: 6,
  },
];

function isoDaysFromNow(days: number, hour = 15): string {
  const d = new Date();
  d.setHours(hour, 0, 0, 0);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

export const demoEvents: ClubEvent[] = [
  {
    _id: "demo-meeting-1",
    title: "General Meeting",
    start: isoDaysFromNow(2, 15),
    end: isoDaysFromNow(2, 16),
    location: "Room 214",
    description: "Weekly chapter meeting — updates, hours, and upcoming service.",
    eventType: "meeting",
  },
  {
    _id: "demo-service-1",
    title: "Food Pantry Packing",
    start: isoDaysFromNow(5, 10),
    end: isoDaysFromNow(5, 13),
    location: "Community Center",
    description: "Help pack and sort donations for local families.",
    eventType: "service",
  },
  {
    _id: "demo-social-1",
    title: "Member Social",
    start: isoDaysFromNow(9, 16),
    end: isoDaysFromNow(9, 18),
    location: "Quad",
    description: "Ice cream social for new and returning members.",
    eventType: "social",
  },
  {
    _id: "demo-meeting-2",
    title: "Board Meeting",
    start: isoDaysFromNow(12, 14),
    end: isoDaysFromNow(12, 15),
    location: "Room 214",
    description: "Officer planning for next month’s service calendar.",
    eventType: "meeting",
  },
  {
    _id: "demo-service-2",
    title: "Park Cleanup",
    start: isoDaysFromNow(16, 9),
    end: isoDaysFromNow(16, 12),
    location: "Riverside Park",
    description: "Bring gloves — we’ll clean trails and picnic areas.",
    eventType: "service",
  },
  {
    _id: "demo-meeting-3",
    title: "General Meeting",
    start: isoDaysFromNow(19, 15),
    end: isoDaysFromNow(19, 16),
    location: "Room 214",
    description: "Mid-month check-in and volunteer sign-ups.",
    eventType: "meeting",
  },
];

export const demoAbout: AboutPage = {
  headline: "About Our Chapter",
  body: [
    {
      _type: "block",
      _key: "intro",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "s1",
          text: "Key Club is a student-led organization that teaches leadership through service to others. Our chapter plans projects that support our school and local community year-round.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "mission-h",
      style: "h2",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "s2",
          text: "Our mission",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "mission",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "s3",
          text: "We develop competent, capable, and caring leaders through service. Members earn service hours, build friendships, and make a lasting impact — Caring, Our Way of Life.",
          marks: [],
        },
      ],
    },
  ],
};
