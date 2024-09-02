// "use client";
// import React from "react";
// import Script from "next/script";

// const PricingPage: React.FC = () => {
//   return (
//     <div id="pricing-table-container">
//       <Script
//         strategy="beforeInteractive"
//         src="https://js.stripe.com/v3/pricing-table.js"
//         onLoad={() => {
//           console.log("Stripe script loaded");
//         }}
//       />
//       <stripe-pricing-table
//         pricing-table-id="prctbl_1PugwwP62R5gbfBeIFpC6XWM"
//         publishable-key="pk_test_51PS3MCP62R5gbfBeVNgKnODYA1apYwJThk7HbC3pJRofC9SOQnFhBIoKBF5z121djWpshwdyRoIYizNvfzqf1Fbh00t9UWRsdd"
//       ></stripe-pricing-table>
//     </div>
//   );
// };

// export default PricingPage;

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
