import type { FC } from 'react';

import { lunalink } from '@bearstudio/lunalink';
import {
  PiHouseDuotone,
  PiHouseFill,
  PiNoteDuotone,
  PiNoteFill,
  PiSketchLogoDuotone,
  PiSketchLogoFill,
  PiUsersThreeDuotone,
  PiUsersThreeFill,
} from 'react-icons/pi';

import type { translations } from '@/i18n';
import type { Locale } from '@/i18n/utils';
import { ROUTES } from '@/routes.gen';

type MainMenuLevel = 'primary' | 'secondary' | false;

export type MenuItem = {
  icon: FC<{ className?: string }>;
  i18nKey: keyof (typeof translations)['fr'];
  iconActive: FC<{ className?: string }>;
  getHref: (locale: Locale) => string;
  exact?: boolean;
  desktop: MainMenuLevel;
  mobile: MainMenuLevel;
};

const MAIN_MENU: Array<MenuItem> = [
  {
    getHref: (locale) => lunalink(ROUTES[locale].__path, {}),
    i18nKey: 'nav.home',
    exact: true,
    icon: PiHouseDuotone,
    iconActive: PiHouseFill,
    desktop: false,
    mobile: 'primary',
  },
  {
    getHref: (locale) => {
      if (locale === 'en') {
        return lunalink(ROUTES[locale].services.__path, {});
      }
      return lunalink(ROUTES.fr.prestations.__path, {});
    },
    i18nKey: 'nav.services',
    icon: PiSketchLogoDuotone,
    iconActive: PiSketchLogoFill,
    desktop: 'primary',
    mobile: 'primary',
  },
  {
    getHref: (locale) => {
      if (locale === 'en') {
        return lunalink(ROUTES[locale].team.__path, {});
      }
      return lunalink(ROUTES.fr.equipe.__path, {});
    },
    i18nKey: 'nav.team',
    icon: PiUsersThreeDuotone,
    iconActive: PiUsersThreeFill,
    desktop: 'primary',
    mobile: 'primary',
  },
  {
    getHref: (locale) => lunalink(ROUTES[locale].blog.__path, {}),
    i18nKey: 'nav.blog',
    icon: PiNoteDuotone,
    iconActive: PiNoteFill,
    desktop: 'primary',
    mobile: 'primary',
  },
];

export function getMainMenuItems(params: {
  scope: 'desktop' | 'mobile';
  level: MainMenuLevel;
}) {
  return MAIN_MENU.filter((item) => item[params.scope] === params.level);
}
