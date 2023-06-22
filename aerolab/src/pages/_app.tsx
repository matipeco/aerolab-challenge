import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  weight: ["500", "600", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Head>
        <title>Aerolab Challenge - Matias Pecorale</title>
        <link rel="icon" type="image" href="/assets/icons/aerolab-logo-2.svg" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Challenge técnico de Aerolab - Matias Pecorale"
        />
        <meta property="og:title" content="Aerolab Challenge - Matias Pecorale" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:url" content="https://aerolab-challenge-ts.vercel.app/" />
        <meta property="og:type" content="site" />
        <meta
          property="og:description"
          content="Challenge técnico de Aerolab - Matias Pecorale"
        />
        <meta property="og:image" content="https://i.imgur.com/b2NnHbm.png" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Aerolab Challenge - Matias Pecorale"
        />
        <meta name="twitter:url" content="https://aerolab-challenge-ts.vercel.app/" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Aerolab Challenge - Matias Pecorale"
        />
        <meta name="twitter:url" content="https://aerolab-challenge-ts.vercel.app/" />
        <meta
          name="twitter:description"
          content="Challenge técnico de Aerolab - Matias Pecorale"
        />
        <meta name="twitter:image" content="https://i.imgur.com/b2NnHbm.png" />
        <meta
          name="twitter:image:alt"
          content="Challenge técnico de Aerolab - Matias Pecorale"
        />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
