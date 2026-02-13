import type { APIRoute } from 'astro';

import { getLink } from '@/lib/link';
import { getPeopleCollection } from '@/lib/people';
import { getPostsCollection } from '@/lib/posts';
import { getSiteUrl } from '@/lib/site/get-site-url';
import { getTranslationFn } from '@/i18n/utils';

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '');
}

export const GET: APIRoute = async function get() {
  const siteUrl = getSiteUrl();
  const tFr = getTranslationFn('fr');
  const tEn = getTranslationFn('en');

  const postsFr = await getPostsCollection({ locale: 'fr' });
  const postsEn = await getPostsCollection({ locale: 'en' });
  const peopleFr = await getPeopleCollection({
    locale: 'fr',
    status: 'current',
  });

  const sections: Array<string> = [
    '# BearStudio',
    '',
    '> BearStudio is a French development studio based in Normandy, specializing in UX design, web and mobile development, and AI integration. We support digital project founders from idea to production.',
    '',
    '## About (FR)',
    '',
    tFr('home.metadata.description'),
    '',
    tFr('home.description'),
    '',
    '## About (EN)',
    '',
    tEn('home.metadata.description'),
    '',
    tEn('home.description'),
    '',
    '## Services',
    '',
    `### ${tFr('home.workWithUs.design.title')}`,
    '',
    stripHtml(tFr('home.workWithUs.design.description1')),
    stripHtml(tFr('home.workWithUs.design.description2')),
    '',
    `### ${tFr('home.workWithUs.development.title')}`,
    '',
    stripHtml(tFr('home.workWithUs.development.description1')),
    stripHtml(tFr('home.workWithUs.development.description2')),
    '',
    `### ${tFr('home.workWithUs.boost.title')}`,
    '',
    stripHtml(tFr('home.workWithUs.boost.description1')),
    stripHtml(tFr('home.workWithUs.boost.description2')),
    '',
    `### ${tFr('home.workWithUs.ai.title')}`,
    '',
    stripHtml(tFr('home.workWithUs.ai.description1')),
    stripHtml(tFr('home.workWithUs.ai.description2')),
    '',
    '## Team',
    '',
    ...peopleFr.flatMap((person) => [
      `### ${person.data.name}`,
      '',
      ...(person.data.job ? [person.data.job, ''] : []),
      ...(person.body ? [person.body, ''] : []),
    ]),
    '## Blog Articles (FR)',
    '',
    ...postsFr.flatMap((post) => [
      `### ${post.data.title}`,
      '',
      `URL: ${siteUrl}${getLink('/fr/blog/articles/:id', 'fr', { id: post.data._computed.slug })}`,
      `Date: ${post.data.date.toISOString().split('T')[0]}`,
      '',
      post.body ?? '',
      '',
      '---',
      '',
    ]),
    '## Blog Articles (EN)',
    '',
    ...postsEn.flatMap((post) => [
      `### ${post.data.title}`,
      '',
      `URL: ${siteUrl}${getLink('/fr/blog/articles/:id', 'en', { id: post.data._computed.slug })}`,
      `Date: ${post.data.date.toISOString().split('T')[0]}`,
      '',
      post.body ?? '',
      '',
      '---',
      '',
    ]),
  ];

  return new Response(sections.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
