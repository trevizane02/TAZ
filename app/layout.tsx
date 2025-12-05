import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fly TAZ – Texas Aviation Zap | Ferry Flight Global',
  description: 'Ferry flight, delivery de aeronaves e logística aeronáutica premium em escala mundial.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-base text-ink overflow-x-hidden">
        <LanguageProvider>
          <Header />
          <main className="w-full">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
