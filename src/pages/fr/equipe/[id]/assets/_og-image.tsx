import {
  FontWrapper,
  getAstroImageBase64,
} from '@bearstudio/astro-assets-generation';
import type { AssetImageConfig } from '@bearstudio/astro-assets-generation';

import { THEME } from '@/lib/assets';
import { getPeopleCollection } from '@/lib/people';
import type { Locale } from '@/i18n/utils';

export const config: AssetImageConfig = {
  width: 1280,
  height: 640,
  debugScale: 1,
};

export default async function OgImage({
  params,
  currentLocale,
}: {
  params: { id: string };
  currentLocale: Locale;
}) {
  const member = (await getPeopleCollection({ locale: currentLocale })).find(
    (person) => person.data._computed.slug === params.id
  );

  if (!member) {
    return new Response(null, { status: 404 });
  }

  const memberPicture = member.data.picture
    ? await getAstroImageBase64({ src: member.data.picture.src })
    : null;

  return (
    <FontWrapper fontFamily="Roboto">
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: THEME.BG_DARK,
          fontFamily: 'Roboto',
          position: 'relative',
          overflow: 'hidden',
          borderTopWidth: '0.375rem',
          borderStyle: 'solid',
          borderColor: THEME.ACCENT,
        }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
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
                Équipe
              </span>
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '4rem',
                fontWeight: 700,
                color: THEME.TEXT_PRIMARY,
                overflow: 'hidden',
              }}
            >
              {member.data.name}
            </h1>
            {member.data.job && (
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '2rem',
                  fontWeight: 400,
                  marginTop: '-2rem',
                  color: THEME.TEXT_PRIMARY,
                }}
              >
                {member.data.job}
              </p>
            )}
          </div>
        </div>
        {memberPicture && (
          <div
            style={{
              position: 'absolute',
              right: '-4rem',
              bottom: 0,
            }}
          >
            <img src={memberPicture} />
          </div>
        )}
      </div>
    </FontWrapper>
  );
}
