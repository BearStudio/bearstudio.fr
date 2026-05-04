import {
  FontWrapper,
  getAstroImageBase64,
  NotFoundAssetError,
  type AssetImageConfig,
} from '@bearstudio/astro-assets-generation';
import dayjs from 'dayjs';

import 'dayjs/locale/en';
import 'dayjs/locale/fr';

import { getPostsCollection } from '@/lib/posts';
import { Logo } from '@/components/ui/logo';
import type { Locale } from '@/i18n/utils';

export const OG_IMAGE = {
  width: 1200,
  height: 630,
};

export const config: AssetImageConfig = OG_IMAGE;

const COLORS = {
  bg: '#eef1f4',
  text: '#0a2f39',
  pill: '#0f4452',
  pillText: '#ffffff',
  decor: 'rgba(56, 150, 168, 0.18)',
};

export default async function ({
  params,
  currentLocale,
}: {
  params: { id: string };
  currentLocale: Locale;
}) {
  const news = await getPostsCollection({ locale: currentLocale });
  const article = news.find((n) => n.id.startsWith(params.id));

  if (!article) {
    throw new NotFoundAssetError();
  }

  const heroImage = article.data.heroImage ?? article.data.thumbnail?.image;
  const heroImageBase64 = heroImage
    ? await getAstroImageBase64(heroImage)
    : null;

  const author = article.data._computed.authors[0];
  const authorName = author?.data.name;

  const formattedDate = dayjs(article.data.date)
    .locale(currentLocale)
    .format(currentLocale === 'fr' ? 'D MMM YYYY' : 'MMM D, YYYY');

  const labels =
    currentLocale === 'fr'
      ? { date: 'Le', by: 'par', badge: 'NOUVEL ARTICLE' }
      : { date: 'On', by: 'by', badge: 'NEW POST' };

  const siteUrl =
    currentLocale === 'fr' ? 'bearstudio.fr/blog' : 'bearstudio.fr/en/blog';

  return (
    <FontWrapper
      fontFamily="Inter"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          padding: '64px 64px 56px 64px',
          background: COLORS.bg,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            paddingRight: 48,
            position: 'relative',
          }}
        >
          <Logo style={{ color: COLORS.text, height: 40, width: 184 }} />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 24,
              marginTop: 32,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                display: 'flex',
                padding: '12px 24px',
                borderRadius: 999,
                background: COLORS.pill,
                color: COLORS.pillText,
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              {labels.badge}
            </div>
            <div
              style={{
                fontSize: 52,
                lineHeight: 1.1,
                fontWeight: 700,
                color: COLORS.text,
                display: 'flex',
              }}
            >
              {article.data.title}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 20,
              color: COLORS.text,
            }}
          >
            <span>{labels.date}</span>
            <span style={{ marginLeft: 6 }}>{formattedDate}</span>
            {authorName && (
              <>
                <span style={{ marginLeft: 6 }}>{labels.by}</span>
                <span style={{ marginLeft: 6, fontWeight: 700 }}>
                  {authorName}
                </span>
              </>
            )}
          </div>
        </div>

        {heroImageBase64 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              position: 'relative',
            }}
          >
            <img
              src={heroImageBase64}
              width={440}
              height={440}
              style={{
                width: 440,
                height: 440,
                borderRadius: 32,
                objectFit: 'cover',
              }}
            />
          </div>
        )}

        <div
          style={{
            position: 'absolute',
            right: 64,
            bottom: 32,
            display: 'flex',
            fontSize: 18,
            color: COLORS.text,
            fontWeight: 500,
          }}
        >
          {siteUrl}
        </div>
      </div>
    </FontWrapper>
  );
}
