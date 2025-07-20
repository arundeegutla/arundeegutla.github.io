import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import Nav from '@/components/Nav';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Arun Deegutla 👨‍💻',
  description: 'Portfolio showcasing projects and skills.',
  keywords:
    'Arun Deegutla, portfolio, software engineer, web developer, projects',
  authors: [{ name: 'Arun Deegutla', url: 'https://arundeegutla.me/' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arundeegutla.me/ ',
    title: 'Arun Deegutla Portfolio',
    description: 'Portfolio showcasing projects and skills.',
  },
  robots: 'index, follow',
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/apple-touch-icon.png',
    apple: '/favicons/apple-touch-icon.png',
  },
  manifest: '/favicons/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Nav />
        <main className="relative flex w-full flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
