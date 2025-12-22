import en from './en';
import fr from './fr';

export const defaultLocale = 'fr';
export const locales = ['fr', 'en'] as const;

export const translations = { fr, en } as const;
