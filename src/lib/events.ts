import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'; // ES 2015
import { filter, isNonNullish } from 'remeda';

import { personWithComputed } from '@/lib/people';
import type { Locale } from '@/i18n/utils';

dayjs.extend(isSameOrAfter);

const sortByLatest = (
  post1: CollectionEntry<'events'>,
  post2: CollectionEntry<'events'>
) => (post2.data.date?.valueOf() ?? 0) - (post1.data.date?.valueOf() ?? 0);

export type GetEventsCollectionProps = {
  locale: Locale;
  limit?: number | undefined;
};

export async function getEventsCollection({
  locale,
  limit,
}: GetEventsCollectionProps) {
  const events = await Promise.all(
    (await getCollection('events'))
      .filter((item) => {
        // item.id format is: "slug/locale.md" (e.g., "ivan-dalmet/fr.md")
        const itemLocale = item.id.split('/')[1]?.replace('.md', '');
        return itemLocale === locale;
      })
      .sort(sortByLatest)
      .map(eventWithComputed)
  );

  return events.slice(0, limit);
}

export async function getAvailableYearsEventsCollection() {
  const events = await getCollection('events');
  return [...new Set(events.map((event) => dayjs(event.data.date).year()))];
}

export async function getPresentAndFollowingEventsCollection({
  locale,
  limit,
}: {
  locale: Locale;
  limit?: number | undefined;
}) {
  const events = await Promise.all(
    (await getCollection('events'))
      .filter((item) => {
        // item.id format is: "slug/locale.md" (e.g., "ivan-dalmet/fr.md")
        const itemLocale = item.id.split('/')[1]?.replace('.md', '');
        return itemLocale === locale;
      })
      .filter((item) => dayjs(item.data.date).isSameOrAfter(dayjs(), 'year'))
      .sort(sortByLatest)
      .map(eventWithComputed)
  );

  return events.slice(0, limit);
}

export async function getEventsGroupedByYearCollection(
  props: GetEventsCollectionProps
) {
  const eventsByYear = (await getEventsCollection(props)).reduce(
    (group: { [key: number]: Array<EventWithComputed> }, event) => {
      const date = dayjs(event.data.date).year();
      if (!group[date]) {
        group[date] = [];
      }
      group[date].push(event);
      return group;
    },
    {}
  );

  return eventsByYear;
}

export async function getEventsFromYearCollection({
  locale,
  limit,
  year,
}: {
  locale: Locale;
  limit?: number | undefined;
  year: number;
}) {
  const events = await Promise.all(
    (await getCollection('events'))
      .filter((item) => {
        // item.id format is: "slug/locale.md" (e.g., "ivan-dalmet/fr.md")
        const itemLocale = item.id.split('/')[1]?.replace('.md', '');
        return itemLocale === locale;
      })
      .filter((item) => dayjs(item.data.date).year() === year)
      .filter((item) => dayjs(item.data.date).isSameOrAfter(dayjs(), 'year'))
      .sort(sortByLatest)
      .map(eventWithComputed)
  );

  return events.slice(0, limit);
}

export type EventWithComputed = Awaited<ReturnType<typeof eventWithComputed>>;
export const eventWithComputed = async (item: CollectionEntry<'events'>) => {
  // item.id format is: "slug/locale.md" (e.g., "ivan-dalmet/fr.md")
  const slug = item.id.split('/')[0] ?? 'unknown';

  const itemLocale = item.filePath
    ?.split('/')
    .at(-1)
    ?.replace('.mdx', '')
    .replace('.md', '');

  const participants = await Promise.all(
    (item.data.participants ?? [])?.map(async (author) => {
      const data = await getEntry('people', `${author.id}/${itemLocale}`);
      return data ? personWithComputed(data) : undefined;
    })
  );

  return {
    ...item,
    data: {
      ...item.data,
      _computed: {
        slug,
        participants: filter(participants, isNonNullish),
      },
    },
  };
};
