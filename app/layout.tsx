import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: 'Coca-Cola - Open Happiness',
  description: 'Experience the original, ice cold, refreshing taste...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}