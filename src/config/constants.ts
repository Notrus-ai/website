type Locale = 'en' | 'pt';
export type ExternalLink = Record<'contact' | 'resources' | 'privacyPolicy', string>;
type ExternalLinks = {
  [key in Locale]: ExternalLink;
}

export const externalLinks: ExternalLinks = {
  'en': {
    contact: 'https://hub.notrus.ai/en/contact',
    resources: 'https://hub.notrus.ai/en/resources',
    privacyPolicy: 'https://hub.notrus.ai/en/privacy-policy',
  },
  'pt': {
    contact: 'https://hub.notrus.ai/pt/contato',
    resources: 'https://hub.notrus.ai/pt/insights',
    privacyPolicy: 'https://hub.notrus.ai/pt/politica-privacidade',
  }
}
