export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'fr';

export type Locales = (typeof locales)[number];
