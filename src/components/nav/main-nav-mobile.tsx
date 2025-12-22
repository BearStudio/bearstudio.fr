import { cva } from 'class-variance-authority';
import { PiDotsThreeOutlineVerticalDuotone } from 'react-icons/pi';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getMainMenuItems } from '@/content/menus';
import type { Locale } from '@/i18n/utils';
import { getTranslationFn } from '@/i18n/utils';

const mainNavMobileItemVariants = cva(
  'text-2xs flex flex-1 flex-col items-center rounded-md py-1 justify-center gap-0.5 [&>svg]:size-6',
  {
    variants: {
      variant: {
        default: '',
        active: 'text-accent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const MainNavMobile = (props: { pathname: string; locale: Locale }) => {
  const t = getTranslationFn(props.locale);
  const primaryItems = getMainMenuItems({ scope: 'mobile', level: 'primary' });
  const secondaryItems = getMainMenuItems({
    scope: 'mobile',
    level: 'secondary',
  });
  return (
    <div className="pointer-events-none fixed right-0 bottom-0 left-0 z-20 h-22 p-3 lg:hidden">
      <div className="border-hero/20 bg-hero/80 text-hero-foreground pointer-events-auto mx-auto flex h-full w-full max-w-lg items-center justify-between rounded-2xl border border-b-3 bg-linear-to-b px-2 backdrop-blur-md">
        <div className="flex w-full gap-px">
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
                className={mainNavMobileItemVariants({
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
                <button type="button" className={mainNavMobileItemVariants()}>
                  <PiDotsThreeOutlineVerticalDuotone />
                  {t('nav.more')}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-24 border-none bg-brand-800 text-white mb-2"
                align="end"
              >
                {secondaryItems.map((item) => {
                  const href = item.getHref(props.locale);
                  const Icon = item.icon;
                  return (
                    <DropdownMenuItem
                      key={href}
                      asChild
                      className="px-4 py-2.5"
                    >
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
        </div>
      </div>
    </div>
  );
};
