import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    heroImage: z.string().optional(),
    body: z.any().optional(),
  }),
});

const linksCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    url: z.string(),
    description: z.string().optional(),
  }),
});

const settingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(), // e.g., 'footer'
    body: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  links: linksCollection,
  settings: settingsCollection,
};
