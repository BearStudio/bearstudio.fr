import { z } from 'astro/zod';

export const defaultLocale = 'fr';
export const locales = ['fr', 'en'] as const;

export type Locale = z.infer<ReturnType<typeof zLocale>>;
export const zLocale = () => z.enum(locales).catch(defaultLocale);
