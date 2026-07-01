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

import OGBG from './_og-bg.jpg';

export const OG_IMAGE = {
  width: 1900,
  height: 1080,
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

  const ogBgBase64 = await getAstroImageBase64(OGBG);

  // Fit the thumbnail inside a bounding box while preserving its native aspect
  // ratio (e.g. 720x600), so it is never cropped nor letterboxed.
  const IMAGE_BOX = { width: 720, height: 600 };
  const ratio =
    heroImage?.width && heroImage?.height
      ? heroImage.width / heroImage.height
      : 1;
  const imageWidth = Math.min(IMAGE_BOX.width, IMAGE_BOX.height * ratio);
  const imageHeight = imageWidth / ratio;

  const author = article.data._computed.authors[0];
  const authorName = author?.data.name;

  const formattedDate = dayjs(article.data.date)
    .locale(currentLocale)
    .format(currentLocale === 'fr' ? 'D MMM YYYY' : 'MMM D, YYYY');

  const labels =
    currentLocale === 'fr'
      ? { date: 'Le', by: 'par', badge: 'ARTICLE DE BLOG' }
      : { date: 'On', by: 'by', badge: 'BLOG POST' };

  const siteUrl =
    currentLocale === 'fr' ? 'bearstudio.fr/fr/blog' : 'bearstudio.fr/en/blog';

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
          padding: '4rem 4rem 3.5rem 4rem',
          backgroundColor: COLORS.bg,
        }}
      >
        <img
          src={ogBgBase64}
          width={OG_IMAGE.width}
          height={OG_IMAGE.height}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            paddingRight: 48,
            position: 'relative',
          }}
        >
          <Logo style={{ color: COLORS.text, height: 80, width: 368 }} />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 24,
              marginTop: 256,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                display: 'flex',
                padding: '1rem 2rem',
                borderRadius: 999,
                background: COLORS.pill,
                color: COLORS.pillText,
                fontSize: '2rem',
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              {labels.badge}
            </div>
            <div
              style={{
                fontSize: '4rem',
                lineHeight: 1.1,
                fontWeight: 700,
                color: COLORS.text,
                display: 'flex',
                maxWidth: '100%',
              }}
            >
              {article.data.title}
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: 32,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingLeft: '4rem',
            paddingRight: '4rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '1.8rem',
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

          <div
            style={{
              display: 'flex',
              fontSize: '1.8rem',
              color: COLORS.text,
              fontWeight: 500,
            }}
          >
            {siteUrl}
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
              width={imageWidth}
              height={imageHeight}
              style={{
                width: imageWidth,
                height: imageHeight,
                borderRadius: 16,
                objectFit: 'cover',
              }}
            />
          </div>
        )}
      </div>
    </FontWrapper>
  );
}
