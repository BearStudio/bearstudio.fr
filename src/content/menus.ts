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

import type { Locales } from '@/i18n';
import type { translations } from '@/i18n/ui';
import { ROUTES } from '@/routes.gen';

type MainMenuScope = 'all' | 'mobile' | 'desktop';
type MainMenuLevel = 'primary' | 'secondary';

export type MenuItem = {
  icon: FC<{ className?: string }>;
  key?: keyof (typeof translations)['fr'];
  iconActive: FC<{ className?: string }>;
  label: string;
  getHref: (locale: Locales) => string;
  exact?: boolean;
  scope: MainMenuScope;
  level: MainMenuLevel;
};

const MAIN_MENU: Array<MenuItem> = [
  {
    label: 'Accueil',
    getHref: (locale) => lunalink(ROUTES[locale].__path, {}),
    key: 'nav.home',
    exact: true,
    icon: PiHouseDuotone,
    iconActive: PiHouseFill,
    scope: 'mobile',
    level: 'primary',
  },
  {
    label: 'Services',
    getHref: (locale) => {
      if (locale === 'en') {
        return lunalink(ROUTES[locale].services.__path, {});
      }
      return lunalink(ROUTES.fr.prestations.__path, {});
    },
    key: 'nav.services',
    icon: PiSketchLogoDuotone,
    iconActive: PiSketchLogoFill,
    scope: 'all',
    level: 'primary',
  },
  {
    label: 'Équipe',
    getHref: (locale) => {
      if (locale === 'en') {
        return lunalink(ROUTES[locale].team.__path, {});
      }
      return lunalink(ROUTES.fr.equipe.__path, {});
    },
    key: 'nav.team',
    icon: PiUsersThreeDuotone,
    iconActive: PiUsersThreeFill,
    scope: 'all',
    level: 'primary',
  },
  {
    label: 'Blog',
    getHref: (locale) => lunalink(ROUTES[locale].blog.__path, {}),
    key: 'nav.blog',
    icon: PiNoteDuotone,
    iconActive: PiNoteFill,
    scope: 'all',
    level: 'primary',
  },
];

export function getMainMenuMobileItems(level: MainMenuLevel) {
  return MAIN_MENU.filter(
    (item) =>
      (item.scope === 'all' || item.scope === 'mobile') && item.level === level
  );
}

export function getMainMenuDesktopItems(level: MainMenuLevel) {
  return MAIN_MENU.filter(
    (item) =>
      (item.scope === 'all' || item.scope === 'desktop') && item.level === level
  );
}

export function getMainMenuItems() {
  return MAIN_MENU;
}
