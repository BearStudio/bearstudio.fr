import { getCollection, type CollectionEntry } from 'astro:content';

import { sortBy } from 'remeda';

import type { Locale } from '@/i18n/utils';

export async function getPeopleCollection({
  locale,
  status,
  limit,
}: {
  locale: Locale;
  status?: CollectionEntry<'people'>['data']['status'];
  limit?: number | undefined;
}) {
  const people = (await getCollection('people'))
    .filter((item) => !!item.data.status)
    .filter((item) =>
      status === undefined ? true : item.data.status === status
    )
    .filter((item) => {
      // item.id format is: "slug/locale.md" (e.g., "ivan-dalmet/fr.md")
      const itemLocale = item.id.split('/')[1]?.replace('.md', '');
      return itemLocale === locale;
    })
    .map(personWithComputed);

  const peopleSorted = sortBy(people, [
    (item) => item.data.order ?? Infinity,
    'asc',
  ]);

  return peopleSorted.slice(0, limit);
}

export type PersonWithComputed = ReturnType<typeof personWithComputed>;
export const personWithComputed = (item: CollectionEntry<'people'>) => {
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
