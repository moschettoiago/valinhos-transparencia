import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Transparência Valinhos - Monitor de Despesas do Legislativo',
  description: 'Plataforma cívica e independente de auditoria cidadã sobre as despesas públicas, notas fiscais e prestação de contas da Câmara Municipal de Valinhos/SP.',
  keywords: ['Valinhos', 'Câmara Municipal', 'Despesas Públicas', 'Vereadores Valinhos', 'Transparência', 'Auditoria Cidadã', 'Civic Tech'],
  authors: [{ name: 'Monitor Cívico Valinhos' }],
  openGraph: {
    title: 'Transparência Valinhos - Despesas da Câmara Municipal',
    description: 'Acompanhe em tempo real o raio-x financeiro, notas fiscais e gastos por vereador de Valinhos/SP.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-civic-500 selection:text-white">
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
