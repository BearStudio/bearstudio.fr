import type { APIRoute } from 'astro';

import { getLink } from '@/lib/link';
import { getPostsCollection } from '@/lib/posts';
import { getSiteUrl } from '@/lib/site/get-site-url';

export const GET: APIRoute = async function get() {
  const siteUrl = getSiteUrl();
  const recentPostsFr = await getPostsCollection({ locale: 'fr', limit: 10 });
  const recentPostsEn = await getPostsCollection({ locale: 'en', limit: 5 });

  const lines: Array<string> = [
    '# BearStudio',
    '',
    '> BearStudio is a French development studio based in Normandy, specializing in UX design, web and mobile development, and AI integration. We support digital project founders from idea to production.',
    '',
    '## Site Navigation',
    '',
    `- [Accueil (FR)](${siteUrl}/fr): Page d'accueil française`,
    `- [Home (EN)](${siteUrl}/en): English home page`,
    `- [Prestations](${siteUrl}${getLink('/fr/prestations', 'fr', {})}): Nos prestations`,
    `- [Services](${siteUrl}${getLink('/fr/prestations', 'en', {})}): Our services`,
    `- [Équipe](${siteUrl}${getLink('/fr/equipe', 'fr', {})}): Notre équipe`,
    `- [Team](${siteUrl}${getLink('/fr/equipe', 'en', {})}): Our team`,
    `- [Blog (FR)](${siteUrl}${getLink('/fr/blog', 'fr', {})}): Articles de blog en français`,
    `- [Blog (EN)](${siteUrl}${getLink('/fr/blog', 'en', {})}): Blog posts in English`,
    `- [Contact](${siteUrl}${getLink('/fr/contact', 'fr', {})}): Nous contacter`,
    '',
    '## Services',
    '',
    `- [UX/UI Design](${siteUrl}${getLink('/fr/prestations/ux-design', 'fr', {})}): Conception d'expériences utilisateur modernes et intuitives`,
    `- [Développement Web](${siteUrl}${getLink('/fr/prestations/developpement-web', 'fr', {})}): Applications web performantes et évolutives`,
    `- [Développement Mobile](${siteUrl}${getLink('/fr/prestations/developpement-mobile', 'fr', {})}): Applications iOS et Android`,
    `- [Boost Projet](${siteUrl}${getLink('/fr/prestations/boost-projet', 'fr', {})}): Renfort d'équipes techniques`,
    `- [Accompagnement CTO](${siteUrl}${getLink('/fr/prestations/accompagnement-cto', 'fr', {})}): Conseils stratégiques techniques`,
    `- [Intelligence Artificielle](${siteUrl}${getLink('/fr/prestations/intelligence-artificielle', 'fr', {})}): Intégration IA dans vos applications`,
    '',
    '## Recent Blog Posts (FR)',
    '',
    ...recentPostsFr.map(
      (post) =>
        `- [${post.data.title}](${siteUrl}${getLink('/fr/blog/articles/:id', 'fr', { id: post.data._computed.slug })}): ${post.data.metaDescription ?? post.data.excerpt ?? ''}`
    ),
    '',
    '## Recent Blog Posts (EN)',
    '',
    ...recentPostsEn.map(
      (post) =>
        `- [${post.data.title}](${siteUrl}${getLink('/fr/blog/articles/:id', 'en', { id: post.data._computed.slug })}): ${post.data.metaDescription ?? post.data.excerpt ?? ''}`
    ),
    '',
    '## Optional',
    '',
    `- [Full Content](${siteUrl}/llms-full.txt): Comprehensive version with all content inlined`,
    `- [RSS Feed (FR)](${siteUrl}${getLink('/fr/blog/rss.xml', 'fr', {})}): French blog RSS feed`,
    `- [RSS Feed (EN)](${siteUrl}${getLink('/fr/blog/rss.xml', 'en', {})}): English blog RSS feed`,
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
