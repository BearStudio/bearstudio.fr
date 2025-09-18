import { getCollection, type CollectionEntry } from 'astro:content';

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
