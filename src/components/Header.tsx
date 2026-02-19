import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

import logo from '@/assets/images/logo-white.svg';

import useExternalLinks from '@/hooks/useExternalLinks';

import LanguageSwitcher from './LanguageSwitcher';
import Button from './Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { getExternalUrl } = useExternalLinks();
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <header className="flex items-center w-full">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <figure>
              <Image src={logo} alt="Notrus Logo" width={120} />
            </figure>

            <ul className="hidden md:flex items-center md:gap-4 [&>li>a]:p-4 [&>li.link>a]:hover:bg-white/10 [&>li.link>a]:rounded-xl text-white font-medium">
              <li className="link"><Link href={getExternalUrl('resources')} className="group-hover:opacity-50 hover:opacity-100! transition-opacity">{t('header.insights')}</Link></li>
              {/* <li><Link href={getExternalUrl('contact')} className="group-hover:opacity-50 hover:opacity-100! transition-opacity">{t('header.contact')}</Link></li> */}
              <li><Button href={getExternalUrl('contact')}>{t('hero.cta')}</Button></li>
              <li><LanguageSwitcher /></li>
            </ul>

            <button
              className="md:hidden text-white p-2"
              onClick={toggleDrawer}
              aria-label="Toggle menu"
            >
              <HiOutlineMenu size={28} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeDrawer}
      />

      <header
        className={`fixed top-0 right-0 h-full w-[350px] md:w-[calc(100%-5rem)] bg-black/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          <button
            className="self-end text-white p-2 mb-8"
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            <HiOutlineX size={28} />
          </button>

          <nav className="flex flex-col gap-6 flex-1">
            <Link
              href={getExternalUrl('resources')}
              className="text-white text-lg font-medium hover:bg-white/10 p-4 rounded-xl transition-colors"
              onClick={closeDrawer}
            >
              {t('header.insights')}
            </Link>
            <div className="px-4">
              <Button href={getExternalUrl('contact')} onClick={closeDrawer}>
                {t('hero.cta')}
              </Button>
            </div>
          </nav>

          <div className="px-4 pb-6 mx-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </header>
    </>
  )
}