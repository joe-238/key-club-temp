import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "chapterName",
      title: "Chapter Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "SITHS Key Club",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short supporting line on the home hero",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroCtaLabel",
      title: "Hero CTA Label",
      type: "string",
      initialValue: "View events",
    }),
    defineField({
      name: "heroCtaHref",
      title: "Hero CTA Link",
      type: "string",
      initialValue: "#calendar",
    }),
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "email",
      title: "Chapter Email",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string",
              title: "Platform",
              options: {
                list: [
                  { title: "Instagram", value: "instagram" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Twitter / X", value: "twitter" },
                  { title: "Discord", value: "discord" },
                  { title: "Website", value: "website" },
                  { title: "Other", value: "other" },
                ],
              },
            },
            { name: "label", type: "string", title: "Label" },
            { name: "url", type: "url", title: "URL" },
          ],
          preview: {
            select: { title: "label", subtitle: "platform" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "chapterName" },
  },
});
