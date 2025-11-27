import { useLocale } from 'next-intl';

import { ExternalLink, externalLinks } from '@/config/constants';

export default function useExternalLinks() {
  const locale = useLocale() as 'en' | 'pt';

  const getExternalUrl = (url: keyof ExternalLink) => {
    return externalLinks[locale][url];
  }

  return {
    getExternalUrl,
  }
}
