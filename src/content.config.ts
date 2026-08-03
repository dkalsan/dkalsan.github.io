import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    category: z.enum(['conference', 'preprint']),
    date: z.coerce.date(),
    authors: z.array(z.string()),
    excerpt: z.string(),
    citation: z.string(),
    oral: z.boolean().optional(),
    teaserImage: z.string().optional(),
    paperUrl: z.string().optional(),
    slidesUrl: z.string().optional(),
    bibtexUrl: z.string().optional(),
    projectUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    arxivUrl: z.string().optional(),
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
