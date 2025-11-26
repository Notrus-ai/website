import Head from 'next/head';
import { useLottie } from "lottie-react";

import why1Image from '@/assets/images/dashboard/why-1.png';
import why2Image from '@/assets/images/dashboard/why-2.png';
import why3Image from '@/assets/images/dashboard/why-3.png';
import why4Image from '@/assets/images/dashboard/why-4.png';
import WhyCardItem from './components/WhyCardItem';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroAnimation from '@/assets/hero-animation.json';
import heroAnimationMobile from '@/assets/hero-animation-mobile.json';
import Carousel from '@/components/Carousel';
import SecurityCard from './components/SecurityCard';
import Image from 'next/image';
import logo from '@/assets/images/logo-white.svg';
import getNotrus from '@/assets/images/dashboard/get-notrus.png';

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
  const { View: HeroAnimation } = useLottie({ animationData: heroAnimation, loop: true });
  const { View: HeroAnimationMobile } = useLottie({ animationData: heroAnimationMobile, loop: true });

  return (
    <>
      <Head>
        <title>Notrus - AI-Powered Platform for Modern Teams</title>
        <meta name="description" content="Transform your workflow with Notrus - the AI-powered platform built for modern teams" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* <Header /> */}

      <main className="overflow-x-clip">
        <section id="hero" className="relative container mx-auto">
          <figure className="absolute z-10 top-8 left-8 md:top-12 md:left-20 xl:left-24 2xl:left-30 2xl:top-16">
            <Image src={logo} alt="Notrus Logo" width={150} />
          </figure>
          <div className="hidden md:block m-[-20]">{HeroAnimation}</div>
          <div className="md:hidden m-[-8]">{HeroAnimationMobile}</div>
          <div className="flex w-full justify-center absolute bottom-8 z-10 md:bottom-8 lg:bottom-16 xl:bottom-24 md:justify-start md:pl-10 lg:pl-16 xl:pl-20 2xl:pl-24">
            <Button>Agende uma demonstração</Button>
          </div>
        </section>

        <section id="why-us" className="py-8 md:py-16">
          <div className="container mx-auto">
            <div className="md:w-[50%] mx-auto text-center pb-8">
              <h2 className="text-3xl md:text-6xl font-bold">Por que grandes empresas escolhem a Notrus?</h2>
              <p>Uma plataforma corporativa projetada para performance, personalização e segurança em escala.</p>
            </div>
            <div>
              <Carousel images={WHY_NOTRUS_DATA} renderItem={(item) => <WhyCardItem {...item} />} />
            </div>
          </div>
        </section>

        <section id="results" className="container mx-auto py-8 md:py-24">
          <div className="md:w-[50%] mx-auto text-center pb-8">
            <h2 className="text-3xl md:text-6xl font-bold">Resultados que se adaptam à sua operação</h2>
          </div>
          <div className="results-content">
            <div className="flex flex-col justify-between md:justify-end results-content__area-1 rounded-xl p-4 md:p-8 bg-[url(/images/dashboard/results-1.png)] bg-cover bg-center min-h-[220px]">
              <h3 className="text-[4rem] font-black">25%</h3>
              <h4 className="text-2xl font-bold">Crescimento de Receita</h4>
              <p>Através de uma maior conversão e valor médio das encomendas</p>
            </div>
            <div className="results-content__area-2 rounded-xl p-4 md:p-8 bg-[url(/images/dashboard/results-2.png)] bg-cover bg-center min-h-[220px]">
              <h3 className="text-[4rem] font-black">75%</h3>
              <h4 className="text-2xl font-bold">Maior CSAT</h4>
              <p>Impulsionado por respostas mais rápidas e precisas</p>
            </div>
            <div className="results-content__area-3 rounded-xl p-4 md:p-8 bg-[url(/images/dashboard/results-3.png)] bg-cover bg-center min-h-[220px]">
              <h3 className="text-[4rem] font-black">60%</h3>
              <h4 className="text-2xl font-bold">Redução de Custos</h4>
              <p>Economias médias em custos operacionais</p>
            </div>
          </div>
        </section>

        <section id="security" className="container mx-auto">
          <div className="mt-8 md:mt-16 md:p-16 rounded-xl md:bg-[url(/images/dashboard/security.png)] bg-cover bg-center">
            <div className="md:w-[43%] text-center md:text-left">
              <h2 className="text-3xl md:text-6xl font-bold">Segurança de nível empresarial</h2>
              <p className="text-xl md:text-3xl pt-4 pb-8 md:pb-20">Construído com segurança e privacidade de dados como princípios fundamentais, com recursos integrados de conformidade e segurança de nível empresarial.</p>
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
              <h2 className="text-2xl font-bold md:text-4xl 2xl:text-6xl">Pronto para transformar suas operações de atendimento ao cliente em grande escala?</h2>
              <p className="text-xl pt-4 pb-16 md:pb-20 md:text-2xl 2xl:text-3xl">Junte-se aos líderes de mercado que confiam na Notrus para gerenciar suas operações de atendimento ao cliente em escala empresarial</p>
              <div className="flex justify-center md:justify-start">
                <Button>Agende uma demonstração</Button>
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
