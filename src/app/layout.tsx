import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { satoshi } from '@/utils/customfonts';

// const inter = Inter({ subsets: ['latin'] });

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(`${baseURL}`),
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
    url: `${baseURL}`,
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
