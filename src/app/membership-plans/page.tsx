"use client";

import React from "react";
import Script from "next/script";

const PricingPage: React.FC = () => {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string;
  const pricingTableID = process.env.PRICING_TABLE_ID as string;

  return (
    <>
      <div className="stripe-table-color h-full pt-20">
        <Script
          strategy="beforeInteractive"
          src="https://js.stripe.com/v3/pricing-table.js"
          onReady={() => {
            console.log("Stripe script loaded");
          }}
        />
        <stripe-pricing-table
          pricing-table-id={pricingTableID}
          publishable-key={publishableKey}></stripe-pricing-table>
      </div>
    </>
  );
};

export default PricingPage;
