import type { CollectionEntry, CollectionKey } from 'astro:content';

import type { Locale } from '@/i18n/utils';

export type ComputedCollectionEntry<T extends CollectionKey> =
  CollectionEntry<T> & {
    data: { _computed: { slug: string } };
  };

export const existsInLocale = (params: {
  idWithLocale: string;
  locale: Locale;
}) => {
  const [postLang] = params.idWithLocale.split('/');
  return postLang === params.locale;
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
