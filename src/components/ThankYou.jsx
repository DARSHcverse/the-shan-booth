import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import '../App.css';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thankyou-container">
      <Helmet>
        <title>Thank You | The Shan Booth</title>
        <meta
          name="description"
          content="Thank you for submitting your request. The Shan Booth will contact you shortly."
        />
      </Helmet>

      <div className="thankyou-card">
        <h1>Thank You! 🎉</h1>
        <p>Your request has been received. We’ll get back to you shortly.</p>
        <button
          className="thankyou-button"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
