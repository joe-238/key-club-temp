import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "start",
      title: "Start",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "end",
      title: "End",
      type: "datetime",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "Meeting", value: "meeting" },
          { title: "Service", value: "service" },
          { title: "Social", value: "social" },
          { title: "Other", value: "other" },
        ],
        layout: "radio",
      },
      initialValue: "meeting",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: "Start Date",
      name: "startAsc",
      by: [{ field: "start", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "start",
      media: "image",
    },
  },
});
