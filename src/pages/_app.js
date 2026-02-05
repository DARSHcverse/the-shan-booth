import "../App.css";
import Script from "next/script";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="gtag-loader" strategy="afterInteractive">
        {`
          if (window.location.hostname.includes("photoboothwithshan.com.au")) {
            var gtagScript = document.createElement("script");
            gtagScript.async = true;
            gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-17457289983";
            document.head.appendChild(gtagScript);

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "AW-17457289983");
          }
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
