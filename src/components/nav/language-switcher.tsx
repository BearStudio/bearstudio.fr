import { PiCaretDownBold, PiTranslateDuotone } from 'react-icons/pi';

import { getLink } from '@/lib/link';
import { navButtonVariants } from '@/components/nav/style';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { locales } from '@/i18n';
import { getTranslationFn, type Locale } from '@/i18n/utils';

export const LanguageSwitcher = (props: { locale: Locale }) => {
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
          .map((toLocale) => (
            <DropdownMenuItem
              asChild
              key={toLocale}
              className="text-center items-center justify-center"
            >
              <a
                href={getLink('/fr', toLocale, {})}
                onClick={(e) => {
                  const alternate = document.querySelector(
                    `head link[rel="alternate"][hrefLang="${toLocale}"]`
                  );
                  const href = alternate?.getAttribute('href');
                  if (href) {
                    e.preventDefault();
                    window.location.href = href;
                  }
                }}
              >
                {t(`common.nav.languageSwitch.${toLocale}`)}
              </a>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
