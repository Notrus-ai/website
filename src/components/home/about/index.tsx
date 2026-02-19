"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "motion/react";
import sphereImage from "@/assets/images/dashboard/sphere.png";
import orbitImage from "@/assets/images/dashboard/orbit.png";
import insightsImage from "@/assets/images/dashboard/insights.png";
import sphereImagePT from "@/assets/images/dashboard/sphere-pt.png";
import orbitImagePT from "@/assets/images/dashboard/orbit-pt.png";
import insightsImagePT from "@/assets/images/dashboard/insights-pt.png";

type AccordionItemKey = 'sphere' | 'orbit' | 'insights';

const ACCORDIONS_ITEMS: Record<AccordionItemKey, { bgColor: string, imageEN: StaticImageData, imagePT: StaticImageData }> = {
  sphere: {
    bgColor: 'bg-[#01252e]',
    imageEN: sphereImage,
    imagePT: sphereImagePT,
  },
  orbit: {
    bgColor: 'bg-[#3b1a37]',
    imageEN: orbitImage,
    imagePT: orbitImagePT,
  },
  insights: {
    bgColor: 'bg-[#01193e]',
    imageEN: insightsImage,
    imagePT: insightsImagePT,
  },
};

function AccordionItem({
  title,
  description,
  isOpen,
  itemKey,
  onClick
}: {
  title: string;
  description: string;
  isOpen: boolean;
  itemKey: AccordionItemKey;
  onClick: () => void;
}) {
  return (
    <div
      className={`
        rounded-xl p-4 md:p-6 cursor-pointer transition-all duration-300
        ${isOpen ? `flex-1 ${ACCORDIONS_ITEMS[itemKey].bgColor}` : 'bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]'}
      `}
      onClick={onClick}
    >
      <h3 className="text-lg md:text-xl font-bold">{title}</h3>
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}
        `}
      >
        <p className="text-sm md:text-base text-gray-300">{description}</p>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

export default function AboutSection() {
  const locale = useLocale() as 'en' | 'pt';
  const t = useTranslations();
  const [openItem, setOpenItem] = useState<AccordionItemKey>('sphere');

  const accordionItems: { key: AccordionItemKey; title: string; description: string }[] = [
    {
      key: 'sphere',
      title: t('about.sphere.title'),
      description: t('about.sphere.description'),
    },
    {
      key: 'orbit',
      title: t('about.orbit.title'),
      description: t('about.orbit.description'),
    },
    {
      key: 'insights',
      title: t('about.insights.title'),
      description: t('about.insights.description'),
    },
  ];

  return (
    <section id="about" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="md:w-[70%] lg:w-[60%] mx-auto text-center pb-12 md:pb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
            {t('about.title')}
            <br />
            {t('about.titleHighlight')}
          </h2>
          <p className="text-base md:text-xl 2xl:text-2xl pt-4 text-gray-300">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4 lg:w-[35%]">
            {accordionItems.map((item) => (
              <AccordionItem
                key={item.key}
                itemKey={item.key}
                title={item.title}
                description={item.description}
                isOpen={openItem === item.key}
                onClick={() => setOpenItem(item.key)}
              />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={`flex-1 ${ACCORDIONS_ITEMS[openItem].bgColor} rounded-2xl relative overflow-hidden transition-colors duration-300`}
          >
            <AnimatePresence mode="wait">
              <motion.figure
                key={openItem}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <Image
                  src={ACCORDIONS_ITEMS[openItem][locale === 'pt' ? 'imagePT' : 'imageEN']}
                  alt={t(`about.${openItem}.title`)}
                />
              </motion.figure>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
