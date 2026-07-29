import { defineField, defineType } from "sanity";

export default defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position / Title",
      type: "string",
      description: "e.g. President, Vice President, Secretary",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
      description: "Handle or full URL",
    }),
    defineField({
      name: "showOnContacts",
      title: "Show on Contacts page",
      type: "boolean",
      description: "Leadership contacts (President, VPs, key officers)",
      initialValue: false,
    }),
    defineField({
      name: "showOnStaff",
      title: "Show on Staff page",
      type: "boolean",
      description: "Members who hold a club position",
      initialValue: true,
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "photo",
    },
  },
});
