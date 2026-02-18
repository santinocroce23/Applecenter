import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://applecenterba.local'),
  title: {
    default: 'Apple Center BA | iPhones y Accesorios Premium',
    template: '%s | Apple Center BA'
  },
  description: 'Tienda e-commerce premium de iPhones y accesorios en Buenos Aires. Envíos rápidos, cuotas y garantía local.',
  openGraph: {
    title: 'Apple Center BA',
    description: 'iPhones y accesorios premium en Buenos Aires.',
    type: 'website',
    locale: 'es_AR'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
