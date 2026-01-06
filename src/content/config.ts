import { defineCollection, z } from "astro:content";

const blogsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
      heroImageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

const snippetsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    order: z.number().optional(),
    lastUpdated: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blogs: blogsCollection,
  snippets: snippetsCollection,
};
