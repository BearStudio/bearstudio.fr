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

import { ROUTES } from '@/routes.gen';

type MainMenuScope = 'all' | 'mobile' | 'desktop';
type MainMenuLevel = 'primary' | 'secondary';

export type MenuItem = {
  icon: FC<{ className?: string }>;
  iconActive: FC<{ className?: string }>;
  label: string;
  href: string;
  exact?: boolean;
  scope: MainMenuScope;
  level: MainMenuLevel;
};

const MAIN_MENU: Array<MenuItem> = [
  {
    label: 'Accueil',
    href: lunalink(ROUTES.__path, {}),
    exact: true,
    icon: PiHouseDuotone,
    iconActive: PiHouseFill,
    scope: 'mobile',
    level: 'primary',
  },
  {
    label: 'Services',
    href: lunalink(ROUTES.styleguide.__path, {}),
    icon: PiSketchLogoDuotone,
    iconActive: PiSketchLogoFill,
    scope: 'all',
    level: 'primary',
  },
  {
    label: 'Équipe',
    href: lunalink(ROUTES.styleguide.__path, {}),
    icon: PiUsersThreeDuotone,
    iconActive: PiUsersThreeFill,
    scope: 'all',
    level: 'primary',
  },
  {
    label: 'Blog',
    href: lunalink(ROUTES.blog.__path, {}),
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
