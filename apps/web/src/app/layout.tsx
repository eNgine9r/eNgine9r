import type { Metadata } from 'next';
import './globals.css';
import { AuthShell } from '@/components/AuthShell';

export const metadata: Metadata = {
  title: 'Commerce Hub',
  description: 'Операційна панель для e-commerce команд.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className="min-h-screen bg-slate-50">
        <AuthShell>{children}</AuthShell>
      </body>
    </html>
  );
}
