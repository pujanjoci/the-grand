import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The-Grand Hotel - Luxury Accommodation',
  description: 'Experience luxury and comfort at The-Grand Hotel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.3/dist/tailwind.min.css" rel="stylesheet" />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
