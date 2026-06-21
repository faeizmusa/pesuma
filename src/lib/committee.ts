import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

/* ─── Types ─── */

export type TermSummary = {
  slug: string;
  termName: string;
  startDate: string | null;
  endDate: string | null;
  isCurrent: boolean;
  theme: string;
  presidentMessage: string;
  groupPhoto: string | null;
};

export type PositionGroup = 'Kepimpinan Utama' | 'Majlis Tertinggi' | 'Ketua Biro' | 'Ahli Jawatankuasa' | 'Pemeriksa Kira-kira' | 'Penasihat';

export type CommitteeMember = {
  slug: string;
  name: string;
  fullName: string;
  position: string;
  positionGroup: PositionGroup;
  displayOrder: number | null;
  term: string;
  photo: string | null;
  bio: string;
  email: string;
  quote: string;
  linkedin: string | null;
};

export type MemberWithTerm = CommitteeMember & {
  termData: TermSummary | null;
};

/* ─── Helpers ─── */

const positionGroupOrder: Record<PositionGroup, number> = {
  'Kepimpinan Utama': 1,
  'Majlis Tertinggi': 2,
  'Ketua Biro': 3,
  'Ahli Jawatankuasa': 4,
  'Pemeriksa Kira-kira': 5,
  'Penasihat': 6,
};

export function sortByGroupAndOrder(members: CommitteeMember[]): CommitteeMember[] {
  return [...members].sort((a, b) => {
    const groupDiff = (positionGroupOrder[a.positionGroup] ?? 99) - (positionGroupOrder[b.positionGroup] ?? 99);
    if (groupDiff !== 0) return groupDiff;
    return (a.displayOrder ?? 99) - (b.displayOrder ?? 99);
  });
}

export function groupByPosition(members: CommitteeMember[]): Partial<Record<PositionGroup, CommitteeMember[]>> {
  const groups: Partial<Record<PositionGroup, CommitteeMember[]>> = {};
  for (const member of sortByGroupAndOrder(members)) {
    if (!groups[member.positionGroup]) groups[member.positionGroup] = [];
    groups[member.positionGroup]!.push(member);
  }
  return groups;
}

/* ─── Terms ─── */

export async function getAllTerms(): Promise<TermSummary[]> {
  const slugs = await reader.collections.terms.list();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.terms.read(slug);
      if (!entry) return null;
      return {
        slug,
        termName: entry.termName,
        startDate: entry.startDate,
        endDate: entry.endDate,
        isCurrent: entry.isCurrent,
        theme: entry.theme,
        presidentMessage: entry.presidentMessage,
        groupPhoto: entry.groupPhoto,
      };
    }),
  );
  return entries.filter((e): e is TermSummary => e !== null);
}

export async function getCurrentTerm(): Promise<TermSummary | null> {
  const terms = await getAllTerms();
  return terms.find((t) => t.isCurrent) ?? terms[0] ?? null;
}

export async function getTerm(slug: string): Promise<TermSummary | null> {
  const entry = await reader.collections.terms.read(slug);
  if (!entry) return null;
  return {
    slug,
    termName: entry.termName,
    startDate: entry.startDate,
    endDate: entry.endDate,
    isCurrent: entry.isCurrent,
    theme: entry.theme,
    presidentMessage: entry.presidentMessage,
    groupPhoto: entry.groupPhoto,
  };
}

/* ─── Members ─── */

export async function getMembersByTerm(termSlug: string): Promise<CommitteeMember[]> {
  const slugs = await reader.collections.committee.list();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.committee.read(slug);
      if (!entry || entry.term !== termSlug) return null;
      return {
        slug,
        name: entry.name,
        fullName: entry.fullName,
        position: entry.position,
        positionGroup: entry.positionGroup,
        displayOrder: entry.displayOrder,
        term: entry.term,
        photo: entry.photo,
        bio: entry.bio,
        email: entry.email,
        quote: entry.quote,
        linkedin: entry.linkedin,
      };
    }),
  );
  return sortByGroupAndOrder(entries.filter((e): e is CommitteeMember => e !== null));
}

export async function getCurrentMembers(): Promise<CommitteeMember[]> {
  const term = await getCurrentTerm();
  if (!term) return [];
  return getMembersByTerm(term.slug);
}

export async function getMemberBySlug(slug: string): Promise<MemberWithTerm | null> {
  const entry = await reader.collections.committee.read(slug);
  if (!entry) return null;

  const termData = await getTerm(entry.term);

  return {
    slug,
    name: entry.name,
    fullName: entry.fullName,
    position: entry.position,
    positionGroup: entry.positionGroup,
    displayOrder: entry.displayOrder,
    term: entry.term,
    photo: entry.photo,
    bio: entry.bio,
    email: entry.email,
    quote: entry.quote,
    linkedin: entry.linkedin,
    termData,
  };
}

export type AchievementPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
};

export async function getAchievementsByTerm(termSlug: string): Promise<AchievementPost[]> {
  const slugs = await reader.collections.posts.list();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.posts.read(slug);
      if (!entry || !entry.isAchievement || entry.relatedTerm !== termSlug) return null;
      if (!entry.date) return null;
      return {
        slug,
        title: entry.title,
        date: entry.date,
        excerpt: entry.excerpt,
        category: entry.category,
      };
    }),
  );
  return (entries.filter((e) => e !== null) as AchievementPost[])
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
}
