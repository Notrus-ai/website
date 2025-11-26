import Head from 'next/head';
import { useLottie } from "lottie-react";

import heroImage from '@/assets/images/dashboard/hero.png';
import why1Image from '@/assets/images/dashboard/why-1.png';
import why2Image from '@/assets/images/dashboard/why-2.png';
import why3Image from '@/assets/images/dashboard/why-3.png';
import why4Image from '@/assets/images/dashboard/why-4.png';
import results1Image from '@/assets/images/dashboard/results-1.png';
import results2Image from '@/assets/images/dashboard/results-2.png';
import results3Image from '@/assets/images/dashboard/results-3.png';
import securityImage from '@/assets/images/dashboard/security.png';
import getNotrusImage from '@/assets/images/dashboard/get-notrus.png';
import WhyCardItem from './components/WhyCardItem';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroAnimation from '@/assets/hero-animation.json';
import Carousel from '@/components/Carousel';
import SecurityCard from './components/SecurityCard';
// import why3Image from '@/assets/images/dashboard/why-3.png';

const WHY_NOTRUS_DATA = [
  {
    title: 'Solução Orientada a Resultados',
    description: 'Focamos em impacto real. Ajudamos sua empresa a aumentar receita, reduzir custos e acelerar eficiência operacional com tecnologia aplicada ao negócio.',
    image: why1Image,
  },
  {
    title: 'Hiperpersonalização em Escala',
    description: 'Segmentamos cada cliente da sua base, analisando comportamento, histórico e contexto para oferecer interações verdadeiramente únicas em larga escala.',
    image: why2Image,
  },
  {
    title: 'Integração Sem Fricção',
    description: 'A Notrus é 100% agnóstica. Conecta-se aos sistemas que você já usa, sem necessidade de migração ou substituição de infraestrutura.',
    image: why3Image,
  },
  {
    title: 'Segurança e Conformidade Corporativa',
    description: 'Criptografia avançada, controle de acesso granular e total conformidade com LGPD, GDPR e padrões globais de segurança.',
    image: why4Image,
  }
]

const SECURITY_DATA = [
  {
    title: 'Segurança de Dados',
    description: 'Criptografia AES-128/256 de ponta a ponta para todos os dados do cliente em trânsito e em repouso.',
  },
  {
    title: 'Controle de Acesso',
    description: 'SSO, MFA, acesso baseado em funções e registros de auditoria para supervisão completa da segurança.',
  },
  {
    title: 'Proteção de Dados',
    description: 'Auditorias regulares, testes de penetração e conformidade com GDPR/LGPD.',
  },
  {
    title: 'Cibersegurança',
    description: 'Medidas de segurança contra falhas de código, injeção e envenenamento de dados.',
  }
]

export default function Home() {
  const options = {
    animationData: heroAnimation,
    loop: true,
  }
  const { View: HeroAnimation } = useLottie(options);

  return (
    <>
      <Head>
        <title>Notrus - AI-Powered Platform for Modern Teams</title>
        <meta name="description" content="Transform your workflow with Notrus - the AI-powered platform built for modern teams" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="overflow-x-clip">
        <section id="hero" className="relative container mx-auto mt-8">
          <div>
            {HeroAnimation}
          </div>
          <div className="absolute bottom-20 left-20 z-10">
            <Button>Get a demo</Button>
          </div>
        </section>

        <section id="why-us" className="py-8 md:py-16">
          <div className="container mx-auto">
            <div className="md:w-[50%] mx-auto text-center pb-8">
              <h2 className="text-4xl font-bold">Por que grandes empresas escolhem a Notrus?</h2>
              <p>Uma plataforma corporativa projetada para performance, personalização e segurança em escala.</p>
            </div>
            <div>
              <Carousel images={WHY_NOTRUS_DATA} renderItem={(item) => <WhyCardItem {...item} />} />
            </div>
          </div>
        </section>

        <section id="results" className="container mx-auto py-8 md:py-24">
          <div className="md:w-[50%] mx-auto text-center pb-8">
            <h2 className="text-4xl font-bold">Results that scale with your operation</h2>
          </div>
          <div className="results-content">
            <div className="results-content__area-1 rounded-xl p-8" style={{ backgroundImage: `url(${results1Image.src})`, backgroundSize: 'cover' }}>
              <h3 className="text-[4rem] font-black">25%</h3>
              <h4 className="text-2xl font-bold">Revenue Growth</h4>
              <p>Through higher conversion and average order value</p>
            </div>
            <div className="results-content__area-2 rounded-xl p-8" style={{ backgroundImage: `url(${results2Image.src})`, backgroundSize: 'cover' }}>
              <h3 className="text-[4rem] font-black">75%</h3>
              <h4 className="text-2xl font-bold">Higher CSAT</h4>
              <p>Driven by faster and more accurate responses</p>
            </div>
            <div className="results-content__area-3 rounded-xl p-8" style={{ backgroundImage: `url(${results3Image.src})`, backgroundSize: 'cover' }}>
              <h3 className="text-[4rem] font-black">60%</h3>
              <h4 className="text-2xl font-bold">Cost Reduction</h4>
              <p>Average savings in operational costs</p>
            </div>
          </div>
        </section>

        <section id="security" className="container mx-auto">
          <div className="mt-16 md:p-16 rounded-xl md:bg-[url(/images/dashboard/security.png)] bg-cover">
            <div className="md:w-[43%]">
              <h2 className="text-4xl md:text-6xl font-bold">Segurança de nível empresarial</h2>
              <p className="text-xl md:text-3xl pt-4 pb-20">Construído com segurança e privacidade de dados como princípios fundamentais, com recursos integrados de conformidade e segurança de nível empresarial.</p>
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
          <div className="rounded-xl p-4 md:p-16 my-16 bg-[url(/images/dashboard/get-notrus.png)] bg-cover">
            <div className="md:w-[43%]">
              <h2 className="text-4xl md:text-6xl font-bold">Ready to transform your customer operations at scale?</h2>
              <p className="text-xl md:text-3xl pt-4 pb-8 md:pb-62">Join the market leaders who trust Notrus to run their customer operations at enterprise scale</p>
              <Button>Get a demo</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
