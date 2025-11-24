import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Notrus - AI-Powered Platform for Modern Teams</title>
        <meta name="description" content="Transform your workflow with Notrus - the AI-powered platform built for modern teams" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="absolute w-full py-8 px-32">
        <div className="flex justify-between">
          <figure>
            <p>Notrus</p>
          </figure>
          <ul>
            <li>
              <Link className="py-4 px-8" href="#">Página</Link>
              <Link className="py-4 px-8" href="#">Página</Link>
              <Link className="py-4 px-8" href="#">Página</Link>
              <Link className="py-4 px-8" href="#">Página</Link>
              <Link className="py-4 px-8" href="#">Página</Link>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section id="hero" className="container mx-auto flex gap-20 justify-between items-center min-h-screen m-6 px-20 mx-20 bg-blue-800 rounded-3xl">
          <aside>
            <h1 className="text-[3rem] font-bold">Unifique seus dados, automatize o engajamento com o cliente.</h1>
            <p>Reduza custos, aumente a receita e entregue engajamento inteligente - tudo em um clique, com dados unificados, automação e insights em tempo real.</p>
            <button>Agende uma demo</button>
          </aside>
          <aside>
            <figure>
              <Image src={heroImage} alt="Hero Image" width={800} />
            </figure>
          </aside>
        </section>

        <section id="why-us">
          <div className="w-[50%] mx-auto text-center py-8">
            <h2 className="text-4xl font-bold">Por que grandes empresas escolhem a Notrus?</h2>
            <p>Uma plataforma corporativa projetada para performance, personalização e segurança em escala.</p>
          </div>
          <div className="flex gap-4 overflow-x-scroll snap-x snap-mandatory">
            {WHY_NOTRUS_DATA.map((item) => (
              <WhyCardItem {...item} />
            ))}
          </div>
        </section>

        <section id="results" className="container mx-auto">
          <div className="w-[50%] mx-auto text-center py-8">
            <h2 className="text-4xl font-bold">Results that scale with your operation</h2>
          </div>
          <div className="results-content">
            <div className="results-content__area-1 rounded-xl p-8" style={{ backgroundImage: `url(${results1Image.src})` }}>
              <h3 className="text-[4rem] font-black">25%</h3>
              <h4 className="text-xl font-bold">Revenue Growth</h4>
              <p>Through higher conversion and average order value</p>
            </div>
            <div className="results-content__area-2 rounded-xl p-8" style={{ backgroundImage: `url(${results2Image.src})` }}>
              <h3 className="text-[4rem] font-black">75%</h3>
              <h4 className="text-xl font-bold">Higher CSAT</h4>
              <p>Driven by faster and more accurate responses</p>
            </div>
            <div className="results-content__area-3 rounded-xl p-8" style={{ backgroundImage: `url(${results3Image.src})` }}>
              <h3 className="text-[4rem] font-black">60%</h3>
              <h4 className="text-xl font-bold">Cost Reduction</h4>
              <p>Average savings in operational costs</p>
            </div>
          </div>
        </section>

        <section id="security" className="container mx-auto mt-16 p-8 rounded-xl" style={{ backgroundImage: `url(${securityImage.src})`, backgroundSize: 'cover' }}>
          <div className="w-[50%]">
            <h2 className="text-4xl font-bold">Segurança de nível empresarial</h2>
            <p className="pt-4 pb-20">Construído com segurança e privacidade de dados como princípios fundamentais, com recursos integrados de conformidade e segurança de nível empresarial.</p>
          </div>
          <div className="flex gap-4">
            <div>
              <figure>
                {/* <Image src={securityImage} alt="Security Image" width={800} /> */}
              </figure>
              <h3 className="text-lg font-bold">Segurança de Dados</h3>
              <p>Criptografia AES-128/256 de ponta a ponta para todos os dados do cliente em trânsito e em repouso.</p>
            </div>
            <div>
              <figure>
                {/* <Image src={securityImage} alt="Security Image" width={800} /> */}
              </figure>
              <h3 className="text-lg font-bold">Controle de Acesso</h3>
              <p>SSO, MFA, acesso baseado em funções e registros de auditoria para supervisão completa da segurança.</p>
            </div>
            <div>
              <figure>
                {/* <Image src={securityImage} alt="Security Image" width={800} /> */}
              </figure>
              <h3 className="text-lg font-bold">Proteção de Dados</h3>
              <p>Auditorias regulares, testes de penetração e conformidade com GDPR/LGPD.</p>
            </div>
            <div>
              <figure>
                {/* <Image src={securityImage} alt="Security Image" width={800} /> */}
              </figure>
              <h3 className="text-lg font-bold">Cibersegurança</h3>
              <p>Medidas de segurança contra falhas de código, injeção e envenenamento de dados.</p>
            </div>
          </div>
        </section>

        <section className="get-demo container mx-auto rounded-xl p-8 my-16" style={{ backgroundImage: `url(${getNotrusImage.src})`, backgroundSize: 'cover' }}>
          <div className="w-[60%]">
            <h2 className="text-4xl font-bold">Ready to transform your customer operations at scale?</h2>
            <p className="pt-4 pb-62">Join the market leaders who trust Notrus to run their customer operations at enterprise scale</p>
            <Button>Get a demo</Button>
          </div>
        </section>
      </main>
      <footer className="container mx-auto p-16 bg-notrus-tangaroa text-white mb-8">
        <div className="flex gap-16">
          <div className="flex-2">
            <h3 className="text-xl font-bold pb-4">Notrus</h3>
            <p>Transform your customer experience with AI-powered agents that deliver exceptional support across all channels. Transform your customer experience with AI-powered agents that deliver exceptional support across all channels.</p>
            <button className="pt-8 pb-2">Get a demo</button>
          </div>
          <ul className="flex-1">
            <li><h4 className="font-bold">Product</h4></li>
            <li><Link href="#">AI Chat</Link></li>
            <li><Link href="#">Voice Automation</Link></li>
            <li><Link href="#">Omnichannel</Link></li>
            <li><Link href="#">Analytics</Link></li>
          </ul>
          <ul className="flex-1">
            <li><h4 className="font-bold">Company</h4></li>
            <li><Link href="#">Case Studies</Link></li>
            <li><Link href="#">Security</Link></li>
            <li><Link href="#">Industries</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
        <div className="flex justify-between pt-8">
          <p>Notrus © 2024. All rights reserved.</p>
          <ul className="flex gap-4">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
