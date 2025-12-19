import { lunalink } from '@bearstudio/lunalink';
import { PiEnvelopeBold } from 'react-icons/pi';

import { navButtonVariants } from '@/components/nav/style';
import type { Locale } from '@/i18n/utils';
import { getTranslationFn } from '@/i18n/utils';
import { ROUTES } from '@/routes.gen';

export const NavPrimaryButton = (props: { locale: Locale }) => {
  const t = getTranslationFn(props.locale);
  return (
    <a
      href={lunalink(ROUTES[props.locale].contact.__path, {})}
      className={navButtonVariants()}
    >
      <PiEnvelopeBold className="opacity-60" />
      {t('nav.contact')}
    </a>
  );
};
