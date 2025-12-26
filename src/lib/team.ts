import { getCollection, type CollectionEntry } from 'astro:content';

import { sortBy } from 'remeda';

import type { Locale } from '@/i18n/utils';

export async function getTeamCollection({
  locale,
  status,
  limit,
}: {
  locale: Locale;
  status?: CollectionEntry<'team'>['data']['status'];
  limit?: number | undefined;
}) {
  const team = (await getCollection('team'))
    .filter((item) => !!item.data.status)
    .filter((item) =>
      status === undefined ? true : item.data.status === status
    )
    .filter((item) => {
      // item.id format is: "slug/locale.md" (e.g., "ivan-dalmet/fr.md")
      const itemLocale = item.id.split('/')[1]?.replace('.md', '');
      return itemLocale === locale;
    })
    .map(teamMemberWithComputed);

  const teamSorted = sortBy(team, [
    (item) => item.data.order ?? Infinity,
    'asc',
  ]);

  return teamSorted.slice(0, limit);
}

export type TeamMemberWithComputed = ReturnType<typeof teamMemberWithComputed>;
export const teamMemberWithComputed = (item: CollectionEntry<'team'>) => {
  // item.id format is: "slug/locale.md" (e.g., "ivan-dalmet/fr.md")
  const slug = item.id.split('/')[0];
  return {
    ...item,
    data: {
      ...item.data,
      _computed: { slug: item.data.status ? (slug ?? null) : null },
    },
  };
};
