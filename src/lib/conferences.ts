import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

import type { Conference, ConferenceInstance } from '@/schemas/conferences';

type Params = {
  limit?: number;
};

const isPublished = (post: CollectionEntry<'conferences'>) =>
  post.data.state === 'published' || !import.meta.env.PROD;

export async function getConferencesCollection({
  limit = undefined,
}: Params = {}) {
  const posts = (await getCollection('conferences')).filter(isPublished);
  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

type GetEventsFromConferenceParams = {
  conference: Conference;
};

type InstanceTest = Array<
  Omit<ConferenceInstance, 'event'> & {
    event?: CollectionEntry<'events'> | undefined;
  }
>;

export async function getEventsFromConference({
  conference,
}: GetEventsFromConferenceParams): Promise<InstanceTest> {
  return await Promise.all(
    (conference?.instances ?? []).map(async (instance) => {
      if (!instance || !instance.event) return instance;
      // eslint-disable-next-line no-unused-vars
      const { event, ...clearInstance } = instance;

      const eventEntry = await getEntry(instance.event);

      const test = {
        ...clearInstance,
        event: eventEntry,
      };

      return test;
    })
  );
}
