import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css"; // Relative path to the global CSS file
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

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
    <ClerkProvider
      afterSignOutUrl={"/"}
      appearance={{
        baseTheme: [neobrutalism],
      }}>
      <html lang="en">
        <body>
          <div className="bg-gradient-to-br from-gray-950 to-gray-800 text-white">
            {children}
          </div>
        </body>
        <GoogleAnalytics gaId="G-XYZ" />
      </html>
    </ClerkProvider>
  );
}
