import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

import type { Conference, ConferenceInstance } from '@/schemas/conferences';

type Params = {
  limit?: number;
};

const isPublished = (post: CollectionEntry<'conferences'>) =>
  post.data.state === 'published' || !import.meta.env.PROD;

type HasSpecificEventProps = {
  conference: CollectionEntry<'conferences'>;
  event: CollectionEntry<'events'>;
};

const hasSpecificEvent = ({ conference, event }: HasSpecificEventProps) => {
  const selectedPost = (conference.data?.instances ?? []).find(
    (instance) => instance.event?.id === event.id
  );

  if (selectedPost) return selectedPost;
  return;
};

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
    event?: CollectionEntry<'events'>;
  }
>;

export async function getConferenceEvents({
  conference,
}: GetEventsFromConferenceParams): Promise<InstanceTest> {
  return await Promise.all(
    (conference?.instances ?? []).map(async (instance) => {
      // eslint-disable-next-line no-unused-vars
      const { event, ...clearInstance } = instance;

      if (!instance || !instance.event) return clearInstance;

      const eventEntry = await getEntry(instance.event);

      return {
        ...clearInstance,
        event: eventEntry as CollectionEntry<'events'>,
      };
    })
  );
}

type GetConferencesLinkedToEventProps = Params & {
  event: CollectionEntry<'events'>;
};

export async function getConferencesLinkedToEvent({
  event,
  limit = undefined,
}: GetConferencesLinkedToEventProps) {
  const posts = (await getCollection('conferences'))
    .filter((conference) => hasSpecificEvent({ conference, event }))
    .filter((x) => x);

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}
