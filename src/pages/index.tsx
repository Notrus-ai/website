import Head from 'next/head';
import { useLottie } from "lottie-react";
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

import why1Image from '@/assets/images/dashboard/why-1.png';
import why2Image from '@/assets/images/dashboard/why-2.png';
import why3Image from '@/assets/images/dashboard/why-3.png';
import why4Image from '@/assets/images/dashboard/why-4.png';
import WhyCardItem from './-components/WhyCardItem';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import heroAnimation from '@/assets/hero-animation.json';
import heroAnimationMobile from '@/assets/hero-animation-mobile.json';
import Carousel from '@/components/Carousel';
import SecurityCard from './-components/SecurityCard';
import Image from 'next/image';
import logo from '@/assets/images/logo-white.svg';
import getNotrus from '@/assets/images/dashboard/get-notrus.png';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}

export default function Home() {
  const t = useTranslations();

  const WHY_NOTRUS_DATA = [
    {
      title: t('whyUs.items.resultsDriven.title'),
      description: t('whyUs.items.resultsDriven.description'),
      image: why1Image,
    },
    {
      title: t('whyUs.items.hyperpersonalization.title'),
      description: t('whyUs.items.hyperpersonalization.description'),
      image: why2Image,
    },
    {
      title: t('whyUs.items.integration.title'),
      description: t('whyUs.items.integration.description'),
      image: why3Image,
    },
    {
      title: t('whyUs.items.security.title'),
      description: t('whyUs.items.security.description'),
      image: why4Image,
    }
  ];

  const SECURITY_DATA = [
    {
      icon: 'sec-1',
      title: t('security.items.dataSecurity.title'),
      description: t('security.items.dataSecurity.description'),
    },
    {
      icon: 'sec-2',
      title: t('security.items.accessControl.title'),
      description: t('security.items.accessControl.description'),
    },
    {
      icon: 'sec-3',
      title: t('security.items.dataProtection.title'),
      description: t('security.items.dataProtection.description'),
    },
    {
      icon: 'sec-4',
      title: t('security.items.cybersecurity.title'),
      description: t('security.items.cybersecurity.description'),
    }
  ];
  const { View: HeroAnimation } = useLottie({ animationData: heroAnimation, loop: true });
  const { View: HeroAnimationMobile } = useLottie({ animationData: heroAnimationMobile, loop: true });

  return (
    <>
      <Head>
        <title>{t('metadata.title')}</title>
        <meta name="description" content={t('metadata.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={t('metadata.keywords')} />
      </Head>

      <main className="overflow-x-clip">
        <section id="hero" className="relative container mx-auto">
          <div className="flex justify-between items-center w-full absolute z-10 top-8 pl-6 pr-8 md:pr-20 xl:pr-30 2xl:pr-32 md:top-12 md:pl-20 xl:pl-24 2xl:pl-26 2xl:top-16">
            <figure>
              <Image src={logo} alt="Notrus Logo" width={120} />
            </figure>
            <ul className="flex items-center [&>li>a]:p-4 [&>li>a]:hover:bg-white/10 [&>li>a]:rounded-xl text-white font-medium">
              <li><Link href="/insights" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">{t('header.insights')}</Link></li>
              <li><Link href="/contact" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">{t('header.contact')}</Link></li>
              <li><LanguageSwitcher /></li>
            </ul>
          </div>
          <div className="hidden md:block m-[-20]">{HeroAnimation}</div>
          <div className="md:hidden m-[-8]">{HeroAnimationMobile}</div>
          <div className="flex w-full justify-center absolute bottom-8 z-10 md:bottom-8 lg:bottom-16 xl:bottom-24 md:justify-start md:pl-10 lg:pl-16 xl:pl-20 2xl:pl-24">
            <Button href="/contact">{t('hero.cta')}</Button>
          </div>
        </section>

        <section id="why-us" className="py-8 md:py-16">
          <div className="container mx-auto">
            <div className="md:w-[50%] mx-auto text-center pb-8">
              <h2 className="text-3xl md:text-6xl font-bold">{t('whyUs.title')}</h2>
              <p>{t('whyUs.subtitle')}</p>
            </div>
            <div>
              <Carousel images={WHY_NOTRUS_DATA} renderItem={(item) => <WhyCardItem {...item} />} />
            </div>
          </div>
        </section>

        <section id="results" className="container mx-auto py-8 md:py-24">
          <div className="md:w-[50%] mx-auto text-center pb-8">
            <h2 className="text-3xl md:text-6xl font-bold">{t('results.title')}</h2>
          </div>
          <div className="results-content">
            <div className="flex flex-col justify-between md:justify-end results-content__area-1 rounded-xl p-4 md:p-8 bg-[url(/images/dashboard/results-1.png)] bg-cover bg-center min-h-[220px]">
              <h3 className="text-[4rem] font-black">{t('results.revenue.value')}</h3>
              <h4 className="text-2xl font-bold">{t('results.revenue.title')}</h4>
              <p>{t('results.revenue.description')}</p>
            </div>
            <div className="results-content__area-2 rounded-xl p-4 md:p-8 bg-[url(/images/dashboard/results-2.png)] bg-cover bg-center min-h-[220px]">
              <h3 className="text-[4rem] font-black">{t('results.csat.value')}</h3>
              <h4 className="text-2xl font-bold">{t('results.csat.title')}</h4>
              <p>{t('results.csat.description')}</p>
            </div>
            <div className="results-content__area-3 rounded-xl p-4 md:p-8 bg-[url(/images/dashboard/results-3.png)] bg-cover bg-center min-h-[220px]">
              <h3 className="text-[4rem] font-black">{t('results.costs.value')}</h3>
              <h4 className="text-2xl font-bold">{t('results.costs.title')}</h4>
              <p>{t('results.costs.description')}</p>
            </div>
          </div>
        </section>

        <section id="security" className="container mx-auto">
          <div className="mt-8 md:mt-16 md:p-16 rounded-xl md:bg-[url(/images/dashboard/security.png)] bg-cover bg-center">
            <div className="md:w-[43%] text-center md:text-left">
              <h2 className="text-3xl md:text-6xl font-bold">{t('security.title')}</h2>
              <p className="text-xl md:text-3xl pt-4 pb-8 md:pb-20">{t('security.subtitle')}</p>
            </div>
            <div className="lg:hidden">
              <Carousel images={SECURITY_DATA} renderItem={(item: typeof SECURITY_DATA[0]) => <SecurityCard {...item} />} />
            </div>
            <div className="hidden lg:flex gap-16">
              {SECURITY_DATA.map((item, index) => (<SecurityCard key={index} {...item} />))}
            </div>
          </div>
        </section>

        <section id="get-demo" className="container mx-auto">
          <div className="flex items-center justify-between rounded-xl relative p-4 md:p-16 my-16 md:my-32 bg-cover bg-[radial-gradient(circle_at_top_left,#0066FF,#001a4d)]">
            <div className="flex-1">
              <h2 className="text-2xl font-bold md:text-4xl 2xl:text-6xl">{t('getDemo.title')}</h2>
              <p className="text-xl pt-4 pb-16 md:pb-20 md:text-2xl 2xl:text-3xl">{t('getDemo.subtitle')}</p>
              <div className="flex justify-center md:justify-start">
                <Button href="/contact">{t('getDemo.cta')}</Button>
              </div>
            </div>
            <div className="flex justify-end flex-1 absolute right-4 opacity-[25%] lg:relative">
              <Image className="w-[170px] md:w-[300px] xl:w-100" src={getNotrus} alt="Notrus Logo" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
