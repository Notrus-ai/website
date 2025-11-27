import Link from "next/link"
import { useTranslations } from 'next-intl';

import useExternalLinks from "@/hooks/useExternalLinks";

import Button from "./Button"

export default function Footer() {
  const t = useTranslations('footer');
  const { getExternalUrl } = useExternalLinks();

  return (
    <footer className="container mx-auto ">
      <div className="p-4 md:p-16 bg-notrus-tangaroa text-white mb-8">
        <div className="flex flex-col gap-16 md:gap-40 md:flex-row">
          <div className="flex-1">
            <h3 className="text-xl font-bold pb-2">Notrus</h3>
            <p>{t('description')}</p>
            <div className="pt-8 pb-2 flex justify-center md:justify-start">
              <Button href={getExternalUrl('contact')}>{t('cta')}</Button>
            </div>
          </div>
          <div className="flex-1 flex gap-4">
            <ul className="flex-1 group [&>li>a]:p-1 [&>li>a]:block">
              <li><h4 className="font-bold pb-2">{t('company')}</h4></li>
              <li><Link href={getExternalUrl('resources')} className="group-hover:opacity-50 hover:opacity-100! transition-opacity">{t('insights')}</Link></li>
              <li><Link href={getExternalUrl('contact')} className="group-hover:opacity-50 hover:opacity-100! transition-opacity">{t('contact')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between pt-8 flex-wrap gap-2">
          <p className="order-2 md:order-1">{t('copyright')}</p>
          <ul className="flex gap-4 group order-1">
            <li><Link href={getExternalUrl('privacyPolicy')} className="group-hover:opacity-50 hover:opacity-100! transition-opacity">{t('privacyPolicy')}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
