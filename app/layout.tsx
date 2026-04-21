import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Flower Capsule — Premium Smart Living',
  description:
    'Factory-finished capsule houses for resorts, glamping, residential, and commercial projects. Smart controls built in. Shipped anywhere from Changzhou, China.',
  keywords: 'capsule house, modular home, glamping, resort accommodation, capsule cabin, prefab home',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Flower Capsule — Premium Smart Living',
    description: 'Factory-finished capsule houses for resorts, glamping and residential projects.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        <main className="relative z-0" style={{ isolation: 'isolate' }}>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollReveal />
      </body>
    </html>
  );
}
