import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Commerce Hub',
  description: 'Operations dashboard for commerce teams.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex w-full flex-1 flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
