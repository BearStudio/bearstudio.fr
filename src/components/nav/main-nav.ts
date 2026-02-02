import type { FC } from 'react';

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

import { getLink } from '@/lib/link';
import type { Locale, TranslationKeys } from '@/i18n/utils';

type NavLevel = 'primary' | 'secondary' | false;

type NavItem = {
  icon: FC<{ className?: string }>;
  i18nKey: TranslationKeys;
  iconActive: FC<{ className?: string }>;
  getHref: (locale: Locale) => string;
  exact?: boolean;
  desktop: NavLevel;
  mobile: NavLevel;
  locales?: Array<Locale>;
};

const MAIN_NAV: Array<NavItem> = [
  {
    getHref: (locale) => getLink('/fr', locale, {}),
    i18nKey: 'common.nav.home',
    exact: true,
    icon: PiHouseDuotone,
    iconActive: PiHouseFill,
    desktop: false,
    mobile: 'primary',
  },
  {
    getHref: (locale) => getLink('/fr/prestations', locale, {}),
    i18nKey: 'common.nav.services',
    icon: PiSketchLogoDuotone,
    iconActive: PiSketchLogoFill,
    desktop: 'primary',
    mobile: 'primary',
  },
  {
    getHref: (locale) => getLink('/fr/equipe', locale, {}),
    i18nKey: 'common.nav.team',
    icon: PiUsersThreeDuotone,
    iconActive: PiUsersThreeFill,
    desktop: 'primary',
    mobile: 'primary',
  },
  {
    getHref: (locale) => getLink('/fr/blog', locale, {}),
    i18nKey: 'common.nav.blog',
    icon: PiNoteDuotone,
    iconActive: PiNoteFill,
    desktop: 'primary',
    mobile: 'primary',
  },
];

export function getMainNavItems(params: {
  locale: Locale;
  scope: 'desktop' | 'mobile';
  level: NavLevel;
}) {
  return MAIN_NAV.filter((item) => item[params.scope] === params.level).filter(
    (item) => (item.locales ? item.locales.includes(params.locale) : item)
  );
}
