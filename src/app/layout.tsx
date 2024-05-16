import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });

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
      <body
        className={cn(
          'grainy min-h-screen font-sans antialiased',
          inter.className
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
