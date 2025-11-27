export const locales = ['pt', 'en'] as const;
export const defaultLocale = 'pt' as const;

export type Locale = (typeof locales)[number];

export async function getMessages(locale: string) {
  return (await import(`../../messages/${locale}.json`)).default;
}
