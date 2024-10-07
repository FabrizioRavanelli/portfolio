import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import de from './de.json';
import cat from './cat.json';


export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  cat: 'Català',
};

export const defaultLang = 'en';

export const ui = {
  en,
  es,
  fr,
  de,
  cat,
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return key.split('.').reduce((obj, k) => obj && obj[k], ui[lang] as any) || key;
  }
}

export function localizePath(path: string, lang: keyof typeof ui) {
  console.log('output', path, lang)
  const [, ...rest] = path.split('/');
  if (rest[0] in languages) {
    rest.shift();
  }
  return `/${lang}/${rest.join('/')}`.replace(/\/$/, '');
}