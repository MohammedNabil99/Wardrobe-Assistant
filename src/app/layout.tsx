import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css"; // Relative path to the global CSS file
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Style Seeker",
  description: `Level up your drip, aura points, and unspoken rizz by leveraging the power of AI 
    to help you reduce burnout in deciding what you want to wear and understand 
    the current fashion trends.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
        <GoogleAnalytics gaId="G-XYZ" />
      </html>
    </ClerkProvider>
  );
}
