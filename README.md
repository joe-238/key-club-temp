# Key Club Website

School Key Club site built with **Next.js**, **Tailwind CSS**, and **Sanity CMS**.

## Pages

- `/` — Home with custom week/month calendar and upcoming events
- `/about` — Chapter about page
- `/contacts` — President, VPs, and key officers
- `/staff` — Members with club positions
- `/studio` — Sanity admin for editing content

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a Sanity project at [sanity.io](https://www.sanity.io), then copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

3. Run the site:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Without Sanity credentials, the site uses built-in demo content so you can preview the design.

## Editing content

1. Set your project ID in `.env.local`
2. Open [http://localhost:3000/studio](http://localhost:3000/studio)
3. Edit **Site Settings**, **About Page**, **People**, and **Events**

For each person, toggle **Show on Contacts page** and/or **Show on Staff page**.

## Brand

Primary blue (`#003DA5`), yellow accents (`#F6C344`), and white/soft blue-gray surfaces.
