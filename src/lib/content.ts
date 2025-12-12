import type { CollectionEntry, CollectionKey } from 'astro:content';

export type ComputedCollectionEntry<T extends CollectionKey> =
  CollectionEntry<T> & {
    data: { _computed: { slug: string } };
  };

type HasSpecificLangProps<T extends CollectionKey> = {
  post: CollectionEntry<T>;
  lang: string;
};

export const hasSpecificLang = <T extends CollectionKey>({
  post,
  lang,
}: HasSpecificLangProps<T>) => {
  const [postLang] = post.id.split('/');
  return postLang === lang;
};

export const getSlugWithoutLocale = <T extends CollectionKey>(
  post: CollectionEntry<T>
): CollectionEntry<T> & { data: { _computed: { slug: string } } } => {
  const [_, ...slug] = post.id.split('/');
  return {
    ...post,
    data: {
      ...post.data,
      _computed: {
        slug: slug.join('/'),
      },
    },
  };
};

type GetPostFromSlugProps<T extends CollectionKey> = {
  post: ComputedCollectionEntry<T>;
  slugs: string[];
};

export const getPostsBySlug = <T extends CollectionKey>({
  post,
  slugs,
}: GetPostFromSlugProps<T>) => {
  return slugs?.includes(post.data._computed.slug);
};
