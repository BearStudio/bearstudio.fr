import { lunalink } from '@bearstudio/lunalink';
import {
  PiCaretDownBold,
  PiEnvelopeBold,
  PiTranslateDuotone,
} from 'react-icons/pi';

import { LanguageSwitcher } from '@/components/nav/language-switcher';
import { NavPrimaryButton } from '@/components/nav/nav-primary-button';
import { navButtonVariants } from '@/components/nav/style';
import { Logo } from '@/components/ui/logo';
import { getMainMenuDesktopItems } from '@/content/menus';
import type { Locale } from '@/i18n';
import { getTranslationFn } from '@/i18n/utils';
import { ROUTES } from '@/routes.gen';

export const MainNavDesktop = (props: {
  currentPathname: string;
  locale: Locale;
}) => {
  const t = getTranslationFn(props.locale);
  return (
    <div className="pointer-events-none fixed top-0 right-0 left-0 z-20 h-20 p-3 max-lg:hidden">
      <div className="border-hero/20 bg-hero/80 text-hero-foreground pointer-events-auto mx-auto flex h-full w-full max-w-5xl items-center justify-between rounded-2xl border border-b-3 bg-linear-to-b pr-2 pl-4 backdrop-blur-md">
        <div className="flex gap-8">
          <a href={lunalink(ROUTES[props.locale].__path, {})} className="flex">
            <Logo className="-mt-0.5 w-28" />
          </a>
          <nav className="flex items-center gap-1">
            {getMainMenuDesktopItems('primary').map((item) => {
              const href = item.getHref(props.locale);
              const isActive = item.exact
                ? href === props.currentPathname
                : props.currentPathname.startsWith(href);
              const Icon = isActive ? item.iconActive : item.icon;
              return (
                <a
                  key={href}
                  href={href}
                  className={navButtonVariants({
                    variant: isActive ? 'active' : 'default',
                  })}
                >
                  <Icon />
                  {t(item.i18nKey)}
                </a>
              );
            })}

            <button type="button" className={navButtonVariants()}>
              {t('nav.more')}
              <PiCaretDownBold className="opacity-60" />
            </button>
          </nav>
        </div>

        <div className="flex gap-px">
          <NavPrimaryButton locale={props.locale} />
          <LanguageSwitcher locale={props.locale} />
        </div>
      </div>
    </div>
  );
};
