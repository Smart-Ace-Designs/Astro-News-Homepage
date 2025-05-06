import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const asideArticles = defineCollection({
  loader: file("src/data/aside.json"),
  schema: z.object({
    title: z.string(),
    text: z.string(),
    link: z.string(),
  }),
});

const mainArticles = defineCollection({
  loader: file("src/data/articles.json"),
  schema: z.object({
    number: z.string(),
    title: z.string(),
    imagePath: z.string(),
    text: z.string(),
  }),
});

export const collections = { asideArticles, mainArticles };
