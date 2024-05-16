import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { satoshi } from '@/utils/customfonts';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL('https://saeternus.com'),
  title: {
    default: 'Saeternus',
    template: '%s - Saeternus',
  },
  description: 'Innovating for your success',
  openGraph: {
    title: 'Saeternus',
    description: 'Innovating for your success',
    type: 'website',
    locale: 'en_US',
    url: 'https://saeternus.com', //It should be stored in a .env file.
    siteName: 'Saeternus',
    images: [{ url: 'https://saeternus.com/android-chrome-192x192.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId='GTM-W4HCJHQQ' />
      <body
        className={cn(
          'min-h-screen antialiased',
          `${satoshi.variable} font-satoshi`
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
