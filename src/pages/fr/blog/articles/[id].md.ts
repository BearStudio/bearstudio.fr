import type { APIRoute, GetStaticPaths, GetStaticPathsOptions } from 'astro';

import { postToMarkdown } from '@/lib/llms';
import { getPostsCollection } from '@/lib/posts';
import type { Locale } from '@/i18n/utils';

export async function generateStaticPaths(
  params: {
    locale: Locale;
  } & GetStaticPathsOptions
) {
  const posts = await getPostsCollection({ locale: params.locale });

  return posts.map((post) => ({
    params: { id: post.data._computed.slug },
    props: { post },
  }));
}

export const getStaticPaths: GetStaticPaths = async (
  params: GetStaticPathsOptions
) => {
  return generateStaticPaths({ ...params, locale: 'fr' });
};

export const GET: APIRoute = function get({ props }) {
  const { post } = props;

  return new Response(postToMarkdown(post), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
