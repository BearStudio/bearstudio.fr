import { getCollection, type CollectionEntry } from 'astro:content';

import {
  existsInLocale,
  getPostsBySlug,
  getSlugWithoutLocale,
} from '@/lib/content';
import type { Locale } from '@/i18n/utils';

type TeamEntry = CollectionEntry<'team'>;
const isVisible = (person: TeamEntry) => !person.data.hidden;

const sortByOrder = (person1: TeamEntry, person2: TeamEntry) => {
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
  status?: TeamEntry['data']['status'];
  limit?: number | undefined;
}) {
  const team = (await getCollection('team'))
    .filter(isVisible)
    .filter((post) =>
      status === undefined ? true : post.data.status === status
    )
    .filter((post) => existsInLocale({ idWithLocale: post.id, locale }))
    .sort(sortByOrder)
    .map((post) => getSlugWithoutLocale<'team'>(post));

  return team.slice(0, limit);
}

export async function getTeamBySlugs(params: {
  locale: Locale;
  slugs: Array<string>;
  limit?: number | undefined;
}) {
  return (
    await getTeamCollection({ locale: params.locale, limit: params.limit })
  ).filter((post) => getPostsBySlug({ post, slugs: params.slugs }));
}
