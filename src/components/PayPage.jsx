import React, { useEffect } from "react";

const PayPage = () => {
  // Dynamically load Stripe Buy Button script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen paypage-bg px-4">
      <div className="paypage-card max-w-md w-full text-center border border-gray-200">
        {/* Page Title */}
        <h1 className="paypage-title mb-4">Secure Payment</h1>

        {/* Subtitle */}
        <p className="paypage-subtitle mb-6">
          Complete your booking securely with our trusted payment provider.
        </p>

        {/* Stripe Buy Button */}
        <div className="flex justify-center mb-6">
          <stripe-buy-button
            buy-button-id="buy_btn_1RwykrEgQ1i8If78W6zCge0S"
            publishable-key="pk_live_51RwmSuEgQ1i8If78b9WAbhennziw3Rp0TuOifY6s8DW2k5bwF5wAtmsu6pCUosTXX9zZTpLcCHFbViqYX2LkznGQ00VFqubBOv"
          />
        </div>

        {/* Footer Note */}
        <p className="paypage-footer">
          Powered by <span className="font-semibold">Stripe</span> · Your payment is 100% secure
        </p>
      </div>
    </div>
  );
};

export default PayPage;
