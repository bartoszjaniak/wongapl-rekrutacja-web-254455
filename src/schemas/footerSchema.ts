import { defineCollection, reference, z } from 'astro:content';

export const footer = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
  }),
});

// ...existing code...

export default footer;
