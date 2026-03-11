import { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Md Firoze Mehedi | Logistics Systems Engineer',
  description: 'Portfolio of Md Firoze Mehedi, Master of Science in Logistics Systems Engineering. Showcasing experience in Supply Chain & Analytics.',
};

import Navigation from '@/components/Navigation';
import Chatbot from '@/components/Chatbot';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Navigation />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
