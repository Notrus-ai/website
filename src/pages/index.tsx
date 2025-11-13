import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Notrus - AI-Powered Platform for Modern Teams</title>
        <meta name="description" content="Transform your workflow with Notrus - the AI-powered platform built for modern teams" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="absolute">
        <div>
          <figure>
            <p>Notrus</p>
          </figure>
          <ul>
            <li>
              <Link href="#">Página</Link>
              <Link href="#">Página</Link>
              <Link href="#">Página</Link>
              <Link href="#">Página</Link>
              <Link href="#">Página</Link>
            </li>
          </ul>
        </div>
      </header>

      <main className="">
        <section id="hero">
        </section>
      </main>
    </>
  );
}
