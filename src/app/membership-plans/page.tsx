"use client";
import React from "react";
import Script from "next/script";

const PricingPage: React.FC = () => {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string;
  const pricingTableID = process.env.PRICING_TABLE_ID as string;

  return (
    <div id="pricing-table-container">
      <Script
        strategy="beforeInteractive"
        src="https://js.stripe.com/v3/pricing-table.js"
        onLoad={() => {
          console.log("Stripe script loaded");
        }}
      />
      <stripe-pricing-table
        pricing-table-id={pricingTableID}
        publishable-key={publishableKey}
      ></stripe-pricing-table>
    </div>
  );
};

export default PricingPage;
