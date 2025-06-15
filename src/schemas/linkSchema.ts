import { z } from "zod";

export const linkSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  pubDate: z.string(), // Możesz zmienić na z.date(), jeśli masz datę jako Date
});

export type Link = z.infer<typeof linkSchema>;

export const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  heroImage: z.string().optional(),
  pubDate: z.string(),
  body: z.any().optional(),
});

export type Post = z.infer<typeof postSchema>;
