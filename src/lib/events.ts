import { getCollection } from 'astro:content';

type Params = {
  limit?: number;
};

export async function getEventsCollection({ limit = undefined }: Params = {}) {
  const posts = await getCollection('events');
  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}
