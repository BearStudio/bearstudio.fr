import { PiEnvelopeBold } from 'react-icons/pi';

import { getLink } from '@/lib/link';
import { navButtonVariants } from '@/components/nav/style';
import type { Locale } from '@/i18n/utils';
import { getTranslationFn } from '@/i18n/utils';

export const NavPrimaryButton = (props: { locale: Locale }) => {
  const t = getTranslationFn(props.locale);
  return (
    <a
      href={getLink('/fr/contact', props.locale, {})}
      className={navButtonVariants()}
    >
      <PiEnvelopeBold className="opacity-60" />
      {t('common.nav.contact')}
    </a>
  );
};
