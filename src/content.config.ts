import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    category: z.enum(['journal', 'conference', 'book']),
    date: z.coerce.date(),
    authors: z.array(z.string()),
    excerpt: z.string(),
    citation: z.string(),
    paperUrl: z.string().optional(),
    slidesUrl: z.string().optional(),
    bibtexUrl: z.string().optional(),
    placeholder: z.boolean().default(true),
  }),
});

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teaching' }),
  schema: z.object({
    course: z.string(),
    institution: z.string(),
    role: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    placeholder: z.boolean().default(true),
  }),
});

export const collections = { publications, teaching };
