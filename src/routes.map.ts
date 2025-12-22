import { lunalink } from '@bearstudio/lunalink';

import { parseAstroLocale } from '@/i18n/utils';
import { ROUTES } from '@/routes.gen';

const i = link(ROUTES.fr.equipe.__path, parseAstroLocale(Astro.currentLocale));
