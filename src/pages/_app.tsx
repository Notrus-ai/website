import "@/assets/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import aspekta from "@/assets/fonts/aspekta/aspekta";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <style jsx global>{`
        h1, h2, h3, h4, h5, h6 {
          font-family: ${aspekta.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}
