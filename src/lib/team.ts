import { getCollection, type CollectionEntry } from 'astro:content';

import {
  getPostsBySlug,
  getSlugWithoutLocale,
  hasSpecificLang,
} from '@/lib/content';
import { defaultLocale } from '@/i18n';

type Params = {
  limit?: number;
  lang?: string;
};

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
  limit = undefined,
  lang,
}: Params = {}) {
  const team = (await getCollection('team'))
    .filter(isVisible)
    .filter((post) => hasSpecificLang({ post, lang: lang ?? defaultLocale }))
    .sort(sortByOrder)
    .map((post) => getSlugWithoutLocale<'team'>(post));

  return team.slice(0, limit);
}

type GetTeamFromSlugProps = Params & {
  slugs: Array<string>;
};

export async function getTeamBySlugs({
  limit,
  lang,
  slugs,
}: GetTeamFromSlugProps) {
  return (await getTeamCollection({ limit, lang })).filter((post) =>
    getPostsBySlug({ post, slugs })
  );
}
