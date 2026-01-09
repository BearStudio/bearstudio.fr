import rss from '@astrojs/rss';

import type { APIRoute } from 'astro';
import { pick } from 'remeda';

import { getLink } from '@/lib/link';
import { getPostsCollection } from '@/lib/posts';
import {
  getTranslationFn,
  LOCALE_TERRITORY_MAP,
  parseAstroLocale,
} from '@/i18n/utils';

export const GET: APIRoute = async function get(context) {
  const locale = parseAstroLocale(context.currentLocale);
  const t = getTranslationFn(locale);
  const posts = await getPostsCollection({ locale });

  return rss({
    title: t('blog.root.title'),
    description: t('blog.root.description'),
    site: context.site!,
    trailingSlash: false,
    customData: `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate><language>${LOCALE_TERRITORY_MAP[locale]}</language>`,
    items: posts.map((post) => ({
      ...pick(post.data, ['title']),
      description: post.data.metaDescription,
      pubDate: post.data.date,
      author:
        post.data._computed.authors
          .map((author) => `contact@bearstudio.fr (${author.data.name})`)
          .join(', ') || undefined,
      link: getLink('/fr/blog/articles/:id', locale, {
        id: post.data._computed.slug,
      }),
    })),
  });
};
