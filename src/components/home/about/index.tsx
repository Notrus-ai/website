"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import sphereImage from "@/assets/images/dashboard/sphere.png";
import orbitImage from "@/assets/images/dashboard/orbit.png";
import insightsImage from "@/assets/images/dashboard/insights.png";

type AccordionItemKey = 'sphere' | 'orbit' | 'insights';

const ACCORDIONS_ITEMS: Record<AccordionItemKey, { bgColor: string, image: StaticImageData }> = {
  sphere: {
    bgColor: 'bg-[#01252e]',
    image: sphereImage,
  },
  orbit: {
    bgColor: 'bg-[#3b1a37]',
    image: orbitImage,
  },
  insights: {
    bgColor: 'bg-[#01193e]',
    image: insightsImage,
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

export default function AboutSection() {
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
        {/* Header */}
        <div className="md:w-[70%] lg:w-[60%] mx-auto text-center pb-12 md:pb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
            {t('about.title')}
            <br />
            {t('about.titleHighlight')}
          </h2>
          <p className="text-base md:text-xl 2xl:text-2xl pt-4 text-gray-300">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex flex-col gap-4 lg:w-[35%]">
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
          </div>

          <div className={`flex-1 ${ACCORDIONS_ITEMS[openItem].bgColor} rounded-2xl p-6 md:p-12 lg:p-16 relative overflow-hidden`}>
            <figure>
              <Image src={ACCORDIONS_ITEMS[openItem].image} alt={t(`about.${openItem}.title`)} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
