import { getCollection, type CollectionEntry } from 'astro:content';

import type { Locale } from '@/i18n/utils';

const sortByOrder = (
  person1: CollectionEntry<'team'>,
  person2: CollectionEntry<'team'>
) => {
  if (person1.data.order === undefined && person2.data.order === undefined) {
    return 0;
  }

  if (person1.data.order === undefined) {
    return 1;
  }

  if (person2.data.order === undefined) {
    return -1;
  }

  return person1.data.order - person2.data.order;
};

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
      const [, itemLocale] = item.id.split('/');
      return itemLocale === locale;
    })
    .sort(sortByOrder)
    .map(teamMemberWithComputed);

  return team.slice(0, limit);
}

export type TeamMemberWithComputed = ReturnType<typeof teamMemberWithComputed>;
export const teamMemberWithComputed = (item: CollectionEntry<'team'>) => {
  const [slug] = item.id.split('/');
  return {
    ...item,
    data: {
      ...item.data,
      _computed: { slug: item.data.status ? (slug ?? null) : null },
    },
  };
};
