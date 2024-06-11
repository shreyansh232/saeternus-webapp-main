import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { satoshi } from '@/utils/customfonts';

// const inter = Inter({ subsets: ['latin'] });

import { GoogleTagManager } from '@next/third-parties/google';


export const metadata: Metadata = {
  title: 'Saeternus',
  description: 'Innovating for your success',
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
