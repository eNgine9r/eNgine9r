import type { Metadata } from 'next';
import './globals.css';
import { AuthShell } from '@/components/AuthShell';
import { SettingsProvider } from '@/lib/settings';

export const metadata: Metadata = {
  title: 'Commerce Hub',
  description: 'Operational panel for e-commerce teams.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeInitScript = `
    (function() {
      try {
        var storedTheme = window.localStorage.getItem('engine9r_theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : (prefersDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.style.colorScheme = theme;
      } catch (error) {}
    })();
  `;

  return (
    <html lang="uk" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <SettingsProvider>
          <AuthShell>{children}</AuthShell>
        </SettingsProvider>
      </body>
    </html>
  );
}
