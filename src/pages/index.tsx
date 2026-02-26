import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';

import getNotrus from '@/assets/images/dashboard/get-notrus.png';
import why1Image from '@/assets/images/dashboard/why-1.png';
import why2Image from '@/assets/images/dashboard/why-2.png';
import why3Image from '@/assets/images/dashboard/why-3.png';
import why4Image from '@/assets/images/dashboard/why-4.png';

import useExternalLinks from '@/hooks/useExternalLinks';

import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';

import WhyCardItem from '@/components/home/WhyCardItem';
import SecurityCard from '@/components/home/SecurityCard';
import AboutSection from '@/components/home/about';
import Header from '@/components/Header';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

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
  const { getExternalUrl } = useExternalLinks();
  return (
    <>
      <Head>
        <title>{t('metadata.title')}</title>
        <meta name="description" content={t('metadata.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={t('metadata.keywords')} />
      </Head>

      <main className="overflow-x-clip">
        <section id="hero" className="flex flex-col relative hero-bg pb-8 sm:pt-8 h-screen">
          <Header />
          <div className="flex items-end sm:items-center container mx-auto md:[&>aside]:flex-1 flex-1">
            <aside className="hero__left">
              <motion.div variants={stagger} initial="hidden" animate="visible">
                <motion.h1 variants={fadeUp} className="text-2xl md:text-5xl 2xl:text-8xl font-bold text-white">
                  {t('hero.title')}
                </motion.h1>
                <motion.p variants={fadeUp} className="text-base md:text-xl 2xl:text-3xl pt-4 text-white">
                  {t('hero.description')}
                </motion.p>
                <motion.div variants={fadeUp} className="flex justify-center sm:justify-start mx-auto pt-8 sm:pt-24">
                  <Button href={getExternalUrl('contact')}>{t('hero.cta')}</Button>
                </motion.div>
              </motion.div>
            </aside>
            <aside className="hero__right" />
          </div>
        </section>

        <AboutSection />

        <section id="why-us" className="py-8 md:py-16">
          <div className="container mx-auto">
            <motion.div
              className="md:w-[50%] mx-auto text-center pb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">{t('whyUs.title')}</h2>
              <p className="text-base md:text-xl 2xl:text-2xl pt-4 text-gray-300">{t('whyUs.subtitle')}</p>
            </motion.div>
            <div>
              <Carousel images={WHY_NOTRUS_DATA} renderItem={(item) => <WhyCardItem {...item} />} />
            </div>
          </div>
        </section>

        <section id="results" className="container mx-auto py-8 md:py-24">
          <motion.div
            className="md:w-[50%] mx-auto text-center pb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">{t('results.title')}</h2>
          </motion.div>
          <motion.div
            className="results-content"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="group relative flex flex-col justify-between md:justify-end results-content__area-1 rounded-xl overflow-hidden p-4 md:p-8 min-h-[220px] cursor-default ">
              <div className="absolute -inset-4 bg-[url(/images/dashboard/results-1.png)] bg-cover bg-center transition-transform duration-500 ease-out group-hover:-translate-x-4" />
              <div className="relative z-10">
                <h3 className="text-[4rem] font-black">{t('results.revenue.value')}</h3>
                <h4 className="text-2xl font-bold">{t('results.revenue.title')}</h4>
                <p>{t('results.revenue.description')}</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="group relative results-content__area-2 rounded-xl overflow-hidden p-4 md:p-8 min-h-[220px] cursor-default ">
              <div className="absolute -inset-4 bg-[url(/images/dashboard/results-2.png)] bg-cover bg-center transition-transform duration-500 ease-out group-hover:-translate-x-4" />
              <div className="relative z-10">
                <h3 className="text-[4rem] font-black">{t('results.csat.value')}</h3>
                <h4 className="text-2xl font-bold">{t('results.csat.title')}</h4>
                <p>{t('results.csat.description')}</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="group relative results-content__area-3 rounded-xl overflow-hidden p-4 md:p-8 min-h-[220px] cursor-default ">
              <div className="absolute -inset-4 bg-[url(/images/dashboard/results-3.png)] bg-cover bg-center transition-transform duration-500 ease-out group-hover:-translate-x-4" />
              <div className="relative z-10">
                <h3 className="text-[4rem] font-black">{t('results.costs.value')}</h3>
                <h4 className="text-2xl font-bold">{t('results.costs.title')}</h4>
                <p>{t('results.costs.description')}</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="security" className="container mx-auto">
          <div className="mt-8 md:mt-16 md:p-16 rounded-xl overflow-hidden md:bg-[url(/images/dashboard/security.png)] bg-cover bg-center">
            <motion.div
              className="md:w-[43%] text-center md:text-left"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">{t('security.title')}</h2>
              <p className="text-xl md:text-2xl pt-4 pb-8 md:pb-20">{t('security.subtitle')}</p>
            </motion.div>
            <div className="lg:hidden">
              <Carousel images={SECURITY_DATA} renderItem={(item: typeof SECURITY_DATA[0]) => <SecurityCard {...item} />} />
            </div>
            <motion.div
              className="hidden lg:grid lg:grid-cols-4 gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {SECURITY_DATA.map((item, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <SecurityCard {...item} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="get-demo" className="container mx-auto">
          <motion.div
            className="flex items-center justify-between rounded-xl relative p-4 md:p-16 my-16 md:my-32 bg-cover bg-[radial-gradient(circle_at_top_left,#0066FF,#001a4d)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">{t('getDemo.title')}</h2>
              <p className="text-xl pt-4 pb-16 md:pb-20 md:text-2xl 2xl:text-3xl">{t('getDemo.subtitle')}</p>
              <div className="flex justify-center md:justify-start">
                <Button href={getExternalUrl('contact')}>{t('getDemo.cta')}</Button>
              </div>
            </div>
            <div className="flex justify-end flex-1 absolute right-4 opacity-25 lg:relative">
              <Image className="w-[170px] md:w-[300px] xl:w-100" src={getNotrus} alt="Notrus Logo" />
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
