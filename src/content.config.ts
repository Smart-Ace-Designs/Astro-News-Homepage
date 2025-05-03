import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const asideArticles = defineCollection({
  loader: file("src/data/aside.json"),
  schema: z.object({
    title: z.string(),
    text: z.string(),
  }),
});

export const collections = { asideArticles };
