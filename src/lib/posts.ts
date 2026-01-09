import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

import { filter, isNonNullish } from 'remeda';

import { personWithComputed, type PersonWithComputed } from '@/lib/people';
import type { Locale } from '@/i18n/utils';

const hasSpecificAuthor = (params: {
  post: CollectionEntry<'posts'>;
  author: PersonWithComputed;
}) => {
  const selectedPost = (params.post.data?.authors ?? []).find(
    (postAuthor) => postAuthor.id === params.author.data._computed.slug
  );

  if (selectedPost) return selectedPost;
  return;
};

const sortByLatest = (
  post1: CollectionEntry<'posts'>,
  post2: CollectionEntry<'posts'>
) => (post2.data.date?.valueOf() ?? 0) - (post1.data.date?.valueOf() ?? 0);

export async function getPostsCollection(params: {
  limit?: number | undefined;
  locale: Locale;
}) {
  const posts = await Promise.all(
    (await getCollection('posts'))
      .filter((item) => {
        // Get locale from filePath
        const itemLocale = item.filePath
          ?.split('/')
          .at(-1)
          ?.replace('.mdx', '')
          .replace('.md', '');
        return itemLocale === params.locale;
      })
      .sort(sortByLatest)
      .map(postWithComputed)
  );

  return posts.slice(0, params.limit);
}

export type PostWithComputed = Awaited<ReturnType<typeof postWithComputed>>;
const postWithComputed = async (item: CollectionEntry<'posts'>) => {
  // Get slug for data or from filePath
  const slug =
    item.data.slug ??
    item.filePath?.split('/').at(-2)?.replace('.mdx', '').replace('.md', '') ??
    'unknown';
  // Get locale from filePath
  const itemLocale = item.filePath
    ?.split('/')
    .at(-1)
    ?.replace('.mdx', '')
    .replace('.md', '');
  const authors = await Promise.all(
    (item.data.authors ?? [])?.map(async (author) => {
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
        authors: filter(authors, isNonNullish),
      },
    },
  };
};

export async function getPostsCollectionLinkedToPerson(params: {
  limit?: number | undefined;
  locale: Locale;
  author: PersonWithComputed;
}) {
  const posts = (await getPostsCollection({ locale: params.locale })).filter(
    (post) => hasSpecificAuthor({ post, author: params.author })
  );

  return posts.slice(0, params.limit);
}

export async function getPostSlugInOtherLocale(
  item: PostWithComputed,
  targetLocale: Locale
) {
  // Get id from filePath
  const id = item.filePath?.split('/').at(-2);
  const rawTargetItem = (
    await getPostsCollection({ locale: targetLocale })
  ).find((i) => {
    const _id = i.filePath?.split('/').at(-2);
    return id === _id;
  });
  if (!rawTargetItem) return null;
  const targetItem = await postWithComputed(rawTargetItem);
  return targetItem?.data._computed.slug ?? id;
}
