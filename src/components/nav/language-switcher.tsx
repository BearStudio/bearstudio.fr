import { lunalink } from '@bearstudio/lunalink';
import { PiCaretDownBold, PiTranslateDuotone } from 'react-icons/pi';

import { navButtonVariants } from '@/components/nav/style';
import type { Locale } from '@/i18n';
import { getTranslationFn } from '@/i18n/utils';
import { ROUTES } from '@/routes.gen';

export const LanguageSwitcher = (props: { locale: Locale }) => {
  const t = getTranslationFn(props.locale);
  return (
    <button type="button" className={navButtonVariants()}>
      <PiTranslateDuotone className="opacity-60" />
      {t('nav.language')}
      <PiCaretDownBold className="opacity-60" />
    </button>
  );
};
