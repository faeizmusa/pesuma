import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Berita', 'Aktiviti', 'Pengumuman', 'Program']),
    excerpt: z.string(),
    coverImage: z.string().nullable().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    status: z.enum(['Akan Datang', 'Pendaftaran Dibuka', 'Selesai']),
    excerpt: z.string(),
    registrationUrl: z.string().url().nullable().optional(),
  }),
});

export const collections = { posts, events };
