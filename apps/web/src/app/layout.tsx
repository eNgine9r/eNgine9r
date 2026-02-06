import type { Metadata } from 'next';
import './globals.css';
import { AuthShell } from '@/components/AuthShell';

export const metadata: Metadata = {
  title: 'Commerce Hub',
  description: 'Operations dashboard for commerce teams.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <AuthShell>{children}</AuthShell>
      </body>
    </html>
  );
}
