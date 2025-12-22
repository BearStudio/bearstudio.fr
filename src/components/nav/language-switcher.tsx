import { PiCaretDownBold, PiTranslateDuotone } from 'react-icons/pi';

import { navButtonVariants } from '@/components/nav/style';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { locales } from '@/i18n';
import { getRedirectionUrl, getTranslationFn, type Locale } from '@/i18n/utils';

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
          {t('common.nav.language')}
          <PiCaretDownBold className="opacity-60" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-24 border-none bg-brand-800 text-white"
        align="start"
      >
        {locales.map((locale) => (
          <DropdownMenuItem asChild key={locale}>
            <a
              href={getRedirectionUrl({
                locale,
                pathName: props.pathname,
                currentLocale: props.locale,
              })}
            >
              Switch {locale.toUpperCase()}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
