import type { GetStaticPaths, GetStaticPathsOptions } from 'astro';

import { generateStaticPaths } from '@/pages/fr/blog/articles/[id].md';

export const getStaticPaths: GetStaticPaths = async (
  params: GetStaticPathsOptions
) => {
  return generateStaticPaths({ ...params, locale: 'en' });
};

export { GET } from '@/pages/fr/blog/articles/[id].md';
