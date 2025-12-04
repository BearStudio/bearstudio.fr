export const locales = ['en', 'fr'] as const;

// `astro.config.mjs` file doesn't accept type of `locales`, so this exist to bypass it, and insure every `as Locales` in app isn't breaking the system
export const localesForConfig = locales as unknown as string[];

export const defaultLocale = 'fr' as Locales;

export type Locales = (typeof locales)[number];
