import { getEntry } from 'astro:content';

import {
  FontWrapper,
  getAstroImageBase64,
} from '@bearstudio/astro-assets-generation';
import type { AssetImageConfig } from '@bearstudio/astro-assets-generation';

import { THEME } from '@/lib/assets';
import { getPostsCollection } from '@/lib/posts';
import type { Locale } from '@/i18n/utils';
import { LOCALE_TERRITORY_MAP } from '@/i18n/utils';

export const config: AssetImageConfig = {
  width: 1200,
  height: 630,
  debugScale: 1,
};

const MULTI_AUTHOR_LABEL: Record<
  Locale,
  { and: string; others: (n: number) => string }
> = {
  fr: { and: '&', others: (n) => `et ${n} autres` },
  en: { and: '&', others: (n) => `and ${n} others` },
};

export default async function OgImage({
  params,
  currentLocale,
}: {
  params: { id: string };
  currentLocale: Locale;
}) {
  const blogPost = (await getPostsCollection({ locale: currentLocale })).find(
    (post) => post.data._computed.slug === params.id
  );

  if (!blogPost) {
    return new Response(null, { status: 404 });
  }

  const authors = await Promise.all(
    (blogPost.data.authors ?? []).map(async (authorRef) => {
      const person = await getEntry({
        collection: 'people',
        id: `${authorRef.id}/${currentLocale}`,
      });
      const pictureBase64 = person.data.picture
        ? await getAstroImageBase64(person.data.picture)
        : null;
      return {
        name: person.data.name,
        job: person.data.job ?? '',
        picture: pictureBase64,
      };
    })
  );

  const dateLocale = LOCALE_TERRITORY_MAP[currentLocale].replace('_', '-');
  const formattedDate = blogPost.data.date.toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <FontWrapper fontFamily="Roboto">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: THEME.BG_DARK,
          padding: '56px 64px',
          fontFamily: 'Roboto',
          position: 'relative',
          overflow: 'hidden',
          borderTopWidth: '0.375rem',
          borderStyle: 'solid',
          borderColor: THEME.ACCENT,
        }}
      >
        {/* Top row: BearStudio branding + date */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            {/* Bear paw icon */}
            <div
              style={{
                display: 'flex',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: THEME.ACCENT,
              }}
            />
            <span
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: THEME.TEXT_PRIMARY,
                letterSpacing: '-0.01em',
              }}
            >
              BearStudio
            </span>
            <span
              style={{
                fontSize: '20px',
                color: THEME.TEXT_MUTED,
                marginLeft: '4px',
              }}
            >
              Blog
            </span>
          </div>

          <span
            style={{
              fontSize: '18px',
              color: THEME.TEXT_MUTED,
            }}
          >
            {formattedDate}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          <h1
            style={{
              fontSize: authors.length > 0 ? '52px' : '60px',
              fontWeight: 700,
              color: THEME.TEXT_PRIMARY,
              lineHeight: '1.15',
              letterSpacing: '-0.025em',
              margin: 0,
              display: 'flex',
              overflow: 'hidden',
            }}
          >
            {blogPost.data.title}
          </h1>
        </div>

        {/* Bottom: Authors */}
        {authors.length > 0 && (
          <AuthorsSection authors={authors} locale={currentLocale} />
        )}
      </div>
    </FontWrapper>
  );
}

type Author = { name: string; job: string; picture: string | null };

function AuthorsSection({
  authors,
  locale,
}: {
  authors: Author[];
  locale: Locale;
}) {
  const firstAuthor = authors[0];
  const secondAuthor = authors[1];

  if (!firstAuthor) return null;

  if (authors.length === 1) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginTop: '32px',
        }}
      >
        {firstAuthor.picture && <Avatar author={firstAuthor} />}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <span
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: THEME.TEXT_PRIMARY,
            }}
          >
            {firstAuthor.name}
          </span>
          {firstAuthor.job && (
            <span
              style={{
                fontSize: '16px',
                color: THEME.TEXT_SECONDARY,
              }}
            >
              {firstAuthor.job}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginTop: '32px',

        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Stacked avatars */}
      <div style={{ display: 'flex' }}>
        {authors.map((author, index) => (
          <div
            key={author.name}
            style={{
              marginLeft: index > 0 ? '-0.8rem' : '0',
            }}
          >
            <Avatar author={author} />
          </div>
        ))}
      </div>
      {/* Author names */}
      <span
        style={{
          fontSize: '1.1rem',
          fontWeight: 700,
          color: THEME.TEXT_PRIMARY,
        }}
      >
        {authors.length === 2 && secondAuthor
          ? `${firstAuthor.name} ${MULTI_AUTHOR_LABEL[locale].and} ${secondAuthor.name}`
          : `${firstAuthor.name} ${MULTI_AUTHOR_LABEL[locale].others(authors.length - 1)}`}
      </span>
    </div>
  );
}

function Avatar({ author }: { author: Author }) {
  return (
    <div
      style={{
        display: 'flex',
        width: '4rem',
        height: '4rem',
        borderRadius: '100%',
        overflow: 'hidden',
        borderWidth: '4px',
        borderStyle: 'solid',
        borderColor: THEME.BG_DARKER,
        backgroundColor: THEME.BG_DARK,
      }}
    >
      {author.picture ? (
        <img
          src={author.picture}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '100%',
            overflow: 'hidden',
          }}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: THEME.TEXT_PRIMARY,
          }}
        >
          <p>{author.name.charAt(0)}</p>
        </div>
      )}
    </div>
  );
}
