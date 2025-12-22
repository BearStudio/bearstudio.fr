import { useEffect, useState } from 'react';

import { lunalink } from '@bearstudio/lunalink';
import { PiCaretDownBold } from 'react-icons/pi';

import { cn } from '@/lib/tailwind/utils';
import { LanguageSwitcher } from '@/components/nav/language-switcher';
import { NavPrimaryButton } from '@/components/nav/nav-primary-button';
import { navButtonVariants } from '@/components/nav/style';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Logo } from '@/components/ui/logo';
import { getMainMenuItems } from '@/content/menus';
import type { Locale } from '@/i18n/utils';
import { getTranslationFn } from '@/i18n/utils';
import { ROUTES } from '@/routes.gen';

export const MainNavDesktop = (props: { pathname: string; locale: Locale }) => {
  const t = getTranslationFn(props.locale);
  const primaryItems = getMainMenuItems({ scope: 'desktop', level: 'primary' });
  const secondaryItems = getMainMenuItems({
    scope: 'desktop',
    level: 'secondary',
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 right-0 left-0 z-20 h-20 p-3 max-lg:hidden">
      <div
        className={cn(
          'bg-transparent text-hero-foreground pointer-events-auto mx-auto flex h-full w-full max-w-5xl items-center justify-between rounded-2xl border border-transparent border-b-3 bg-linear-to-b pr-2 pl-4 transition-all duration-500',
          isScrolled && 'border-hero/20 bg-hero/80 backdrop-blur-md'
        )}
      >
        <div className="flex gap-8">
          <a href={lunalink(ROUTES[props.locale].__path, {})} className="flex">
            <Logo className="-mt-0.5 w-28" />
          </a>
          <nav className="flex items-center gap-1">
            {primaryItems.map((item) => {
              const href = item.getHref(props.locale);
              const isActive = item.exact
                ? href === props.pathname
                : props.pathname.startsWith(href);
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

            {!!secondaryItems.length && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button type="button" className={navButtonVariants()}>
                    {t('nav.more')}
                    <PiCaretDownBold className="opacity-60" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-24 border-none bg-brand-800 text-white"
                  align="start"
                >
                  {secondaryItems.map((item) => {
                    const href = item.getHref(props.locale);
                    const Icon = item.icon;
                    return (
                      <DropdownMenuItem key={href} asChild>
                        <a href={href}>
                          <Icon className="text-current opacity-60" />
                          {t(item.i18nKey)}
                        </a>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>
        </div>

        <div className="flex gap-px">
          <NavPrimaryButton locale={props.locale} />
          <LanguageSwitcher locale={props.locale} pathname={props.pathname} />
        </div>
      </div>
    </div>
  );
};
