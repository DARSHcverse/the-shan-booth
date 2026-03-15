import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const ThankYou = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Thank You | The Shan Booth</title>
        <meta
          name="description"
          content="Thank you for submitting your request. The Shan Booth will contact you shortly."
          key="description"
        />
        <link
          rel="canonical"
          href="https://www.photoboothwithshan.com.au/thankyou"
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="thankyou-container">
        <div className="thankyou-card">
          <h1>Thank You! 🎉</h1>
          <p>Your request has been received. We’ll get back to you shortly.</p>
          <button
            className="thankyou-button"
            onClick={() => router.push("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
