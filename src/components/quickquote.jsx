import React, { useEffect } from "react";
import Head from "next/head";
import { QUICK_QUOTE_URL } from "../lib/siteLinks";

const QuickQuote = () => {
  useEffect(() => {
    window.location.replace(QUICK_QUOTE_URL);
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting to Quick Quote | The Shan Booth</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={QUICK_QUOTE_URL} />
        <meta httpEquiv="refresh" content={`0;url=${QUICK_QUOTE_URL}`} />
      </Head>
      <main className="main-content section-padding">
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="page-heading">Redirecting to Quick Quote</h1>
          <p>
            We have moved our quote enquiries to DoBook. If you are not redirected automatically,
            continue to the <a href={QUICK_QUOTE_URL}>online enquiry form</a>.
          </p>
        </div>
      </main>
    </>
  );
};

export default QuickQuote;
