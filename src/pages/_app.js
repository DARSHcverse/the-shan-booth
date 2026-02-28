import "../App.css";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout";
import { ConsentProvider, useConsent } from "../components/ConsentProvider";
import CookieConsentBanner from "../components/CookieConsentBanner";
import { Analytics } from "@vercel/analytics/next";

function TrackingScripts() {
  const { consent } = useConsent();

  if (process.env.NODE_ENV !== "production") return null;
  if (!consent.marketing) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17457289983"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "AW-17457289983");
        `}
      </Script>
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <ConsentProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The Shan Booth provides premium photo booth hire in Melbourne for weddings, graduations, corporate events and parties."
          key="description"
        />
      </Head>
      <TrackingScripts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CookieConsentBanner />
      <Analytics />
    </ConsentProvider>
  );
}

export default MyApp;
