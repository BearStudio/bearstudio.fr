import { getLink } from '@/lib/link';
import type { Locale, TranslationKeys } from '@/i18n/utils';

type NavItem = {
  i18nKey: TranslationKeys;
  getHref: (locale: Locale) => string;
  locales?: Array<Locale>;
};

const FOOTER_NAV: Array<NavItem> = [
  {
    getHref: (locale) => getLink('/fr', locale, {}),
    i18nKey: 'common.nav.home',
  },
  {
    getHref: (locale) => getLink('/fr/prestations', locale, {}),
    i18nKey: 'common.nav.services',
  },
  {
    getHref: (locale) => getLink('/fr/prestations/ux-design', locale, {}),
    i18nKey: 'services.uxDesign.breadcrumb',
  },
  {
    getHref: (locale) => getLink('/fr/equipe', locale, {}),
    i18nKey: 'common.nav.team',
  },
  {
    getHref: (locale) => getLink('/fr/blog', locale, {}),
    i18nKey: 'common.nav.blog',
    locales: ['fr'],
  },
  {
    getHref: (locale) => getLink('/fr/blog', locale, {}),
    i18nKey: 'common.nav.career',
  },
  {
    getHref: (locale) => getLink('/fr/blog', locale, {}),
    i18nKey: 'common.nav.legals',
  },
];

export function getFooterNavItems(params: { locale: Locale }) {
  return FOOTER_NAV.filter((item) =>
    item.locales ? item.locales.includes(params.locale) : item
  );
}
