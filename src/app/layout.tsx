import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'; // Relative path to the global CSS file

export const metadata = {
  title: 'My App',
  description: 'Description of my app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XYZ" />

    </html>
  );
}
