import { PiCaretDownBold, PiTranslateDuotone } from 'react-icons/pi';

import { navButtonVariants } from '@/components/nav/style';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { locales } from '@/i18n';
import { getTranslationFn, type Locale } from '@/i18n/utils';

export const LanguageSwitcher = (props: {
  locale: Locale;
  pathname: string;
}) => {
  const t = getTranslationFn(props.locale);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className={navButtonVariants()}>
          <PiTranslateDuotone className="opacity-60" />
          {t(`common.nav.languageSwitch.${props.locale}`)}
          <PiCaretDownBold className="opacity-60" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-30 min-w-0 border-none bg-brand-800 text-white"
        align="center"
      >
        {locales
          .filter((locale) => locale !== props.locale)
          .map((locale) => (
            <DropdownMenuItem
              asChild
              key={locale}
              className="text-center items-center justify-center"
            >
              <a href={`/${locale}`}>
                {t(`common.nav.languageSwitch.${locale}`)}
              </a>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
