import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import Script from 'next/script';
import Navbar from '@/app/components/Navbar';

export const metadata = {
  title: 'Catálogo de Filmes',
  description: 'CRUD de filmes com Next.js (App Router) + Axios + Bootstrap',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="container py-4">{children}</main>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
