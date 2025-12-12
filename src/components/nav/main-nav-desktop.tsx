import { lunalink } from '@bearstudio/lunalink';
import { cva } from 'class-variance-authority';
import {
  PiCaretDownBold,
  PiDotsThreeOutlineVerticalDuotone,
  PiEnvelopeBold,
  PiTranslateDuotone,
} from 'react-icons/pi';

import { cn } from '@/lib/tailwind/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { getMainMenuDesktopItems } from '@/content/menus';
import type { Locale } from '@/i18n';
import { getTranslationFn } from '@/i18n/utils';
import { ROUTES } from '@/routes.gen';

const mainNavDesktopItemVariants = cva(
  'focus-visible:ring-ring/50 relative inline-flex w-fit shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-white/5 focus-visible:ring-[3px] active:translate-y-px [&>svg]:opacity-60',
  {
    variants: {
      variant: {
        default: '',
        active: 'bg-white/5 text-accent [&>svg]:opacity-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const MainNavDesktop = (props: {
  currentPathname: string;
  locale: Locale;
}) => {
  const t = getTranslationFn(props.locale);
  return (
    <div className="pointer-events-none fixed top-0 right-0 left-0 z-20 h-20 p-3 max-lg:hidden">
      <div className="border-hero/20 bg-hero/80 text-hero-foreground pointer-events-auto mx-auto flex h-full w-full max-w-5xl items-center justify-between rounded-2xl border border-b-3 bg-linear-to-b pr-2 pl-4 backdrop-blur-md">
        <div className="flex gap-8">
          <a href="/" className="flex">
            <Logo className="-mt-0.5 w-28" />
          </a>
          <div className="flex items-center gap-1">
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
                  className={mainNavDesktopItemVariants({
                    variant: isActive ? 'active' : 'default',
                  })}
                >
                  <Icon />
                  {t(item.i18nKey)}
                </a>
              );
            })}
            <button type="button" className={mainNavDesktopItemVariants()}>
              <PiDotsThreeOutlineVerticalDuotone />
              {t('nav.more')}
            </button>
          </div>
        </div>

        <div className="flex gap-px">
          <a
            href={lunalink(ROUTES[props.locale].contact.__path, {})}
            className={cn(
              buttonVariants({ variant: 'ghostOnDark' }),
              'opacity-80 hover:opacity-100'
            )}
          >
            <PiEnvelopeBold className="opacity-60" />
            {t('nav.contact')}
          </a>
          <Button
            variant="ghostOnDark"
            className="opacity-80 hover:opacity-100"
          >
            <PiTranslateDuotone className="opacity-60" />
            {t('nav.language')}
            <PiCaretDownBold className="opacity-60" />
          </Button>
        </div>
      </div>
    </div>
  );
};
