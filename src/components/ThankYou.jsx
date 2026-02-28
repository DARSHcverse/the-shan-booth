import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const ThankYou = () => {
  const router = useRouter();

  return (
    <div className="thankyou-container">
      <Head>
        <title>Thank You | The Shan Booth</title>
        <meta
          name="description"
          content="Thank you for submitting your request. The Shan Booth will contact you shortly."
          key="description"
        />
      </Head>

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
  );
};

export default ThankYou;
