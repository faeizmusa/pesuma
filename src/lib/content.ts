import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export type PostSummary = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  coverImage?: string | null;
};

export type EventSummary = {
  slug: string;
  title: string;
  date: string;
  location: string;
  status: string;
  excerpt: string;
  registrationUrl?: string | null;
};

export async function getLatestPosts(limit = 3): Promise<PostSummary[]> {
  const slugs = await reader.collections.posts.list();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.posts.read(slug);
      return entry ? { slug, ...entry } : null;
    }),
  );

  return entries
    .filter((entry): entry is NonNullable<typeof entry> & { date: string } => Boolean(entry?.date))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)
    .map(({ slug, title, date, category, excerpt, coverImage }) => ({
      slug,
      title,
      date,
      category,
      excerpt,
      coverImage,
    }));
}

export async function getFeaturedEvent(): Promise<EventSummary | null> {
  const slugs = await reader.collections.events.list();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.events.read(slug);
      return entry ? { slug, ...entry } : null;
    }),
  );

  const validEntries = entries
    .filter((entry): entry is NonNullable<typeof entry> & { date: string } => Boolean(entry?.date));

  const event = validEntries
    .sort((a, b) => a.date.localeCompare(b.date))
    .find((entry) => entry.status !== 'Selesai') ?? validEntries.at(0);

  if (!event) return null;

  return {
    slug: event.slug,
    title: event.title,
    date: event.date,
    location: event.location,
    status: event.status,
    excerpt: event.excerpt,
    registrationUrl: event.registrationUrl,
  };
}
