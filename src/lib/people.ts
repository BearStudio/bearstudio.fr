import { getImage } from 'astro:assets';
import { getCollection, type CollectionEntry } from 'astro:content';

import { isNonNullish, sortBy } from 'remeda';

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
    .filter((item) => isNonNullish(item.data.status))
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

/**
 * This function is made for carousel only as it gets the image for the person and optimise the size for the displayed ratio.
 */
export async function getDataForPeopleCarousel({
  locale,
  limit,
  status,
}: Parameters<typeof getPeopleCollection>[number]) {
  return await Promise.all(
    (
      await getPeopleCollection({
        locale,
        status,
        limit,
      })
    ).map(async (person) => {
      return {
        ...person,
        data: {
          ...person.data,
          image: person.data.picture
            ? await getImage({
                src: person.data.picture,
                widths: [200, 500],
                sizes: '(min-width: 800px) 500px, 200px',
                layout: 'constrained',
              })
            : undefined,
        },
      };
    })
  );
}
