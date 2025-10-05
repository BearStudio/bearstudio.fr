import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

import type { Conference, ConferenceInstance } from '@/schemas/conferences';
import type { Event } from '@/schemas/events';

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

export type InstancesWithEvent = Array<
  ConferenceInstance & {
    event?: Event;
  }
>;

export async function getEventsFromConference({
  conference,
}: GetEventsFromConferenceParams): Promise<InstancesWithEvent> {
  return await Promise.all(
    (conference.instances ?? []).map(async (instance) => {
      if (!instance || !instance.event) return instance;
      const { deletedEvent, ...clearInstance } = instance;

      const { data: event } = await getEntry(instance.event);

      return {
        ...clearInstance,
        event,
      };
    })
  );
}
