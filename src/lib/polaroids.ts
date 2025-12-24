import type { CollectionEntry } from 'astro:content';

import { defaultLocale } from '@/i18n';
import type { Locale } from '@/i18n/utils';

/**
 * Gets the localized href for a polaroid.
 * If the href is a string, returns it directly.
 * Otherwise, returns the href for the given locale, falling back to the default locale.
 *
 * @param polaroid - The polaroid collection entry
 * @param locale - The target locale
 * @returns The localized href string
 */
export function getPolaroidHref(
  polaroid: CollectionEntry<'polaroids'>,
  locale: Locale
) {
  return typeof polaroid.data.href === 'string'
    ? polaroid.data.href
    : polaroid.data.href[locale] || polaroid.data.href[defaultLocale];
}
