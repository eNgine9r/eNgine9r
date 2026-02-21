'use client';

import Link from 'next/link';
import { getDictionary } from '@/lib/translations';
import { useSettings } from '@/lib/settings';

const links = [
  { href: '/', key: 'dashboard' as const },
  { href: '/orders', key: 'orders' as const },
  { href: '/products', key: 'products' as const },
  { href: '/advertising', key: 'advertising' as const },
  { href: '/expenses', key: 'expenses' as const }
];

export function Sidebar() {
  const { locale, setLocale, theme, setTheme } = useSettings();
  const copy = getDictionary(locale);

  const localeButtonClass = (value: 'uk' | 'en') =>
    `rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
      locale === value
        ? 'bg-brand-500 text-white'
        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
    }`;

  const themeButtonClass = (value: 'light' | 'dark') =>
    `rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
      theme === value
        ? 'bg-brand-500 text-white'
        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
    }`;

  return (
    <aside className="hidden w-64 flex-col gap-6 border-r border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 lg:flex">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">eNgine9r</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">Commerce Hub</h1>
      </div>

      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            {copy.nav[link.key]}
          </Link>
        ))}
      </nav>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400">
        <p className="font-semibold text-slate-700 dark:text-slate-200">{copy.sidebar.language}</p>
        <div className="mt-2 flex gap-2">
          <button type="button" onClick={() => setLocale('uk')} className={localeButtonClass('uk')}>
            {copy.sidebar.localeUk}
          </button>
          <button type="button" onClick={() => setLocale('en')} className={localeButtonClass('en')}>
            {copy.sidebar.localeEn}
          </button>
        </div>

        <p className="mt-4 font-semibold text-slate-700 dark:text-slate-200">{copy.sidebar.theme}</p>
        <div className="mt-2 flex gap-2">
          <button type="button" onClick={() => setTheme('light')} className={themeButtonClass('light')}>
            {copy.sidebar.themeLight}
          </button>
          <button type="button" onClick={() => setTheme('dark')} className={themeButtonClass('dark')}>
            {copy.sidebar.themeDark}
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500 dark:bg-slate-950 dark:text-slate-400">
        <p className="font-semibold text-slate-700 dark:text-slate-200">{copy.sidebar.nextStepsTitle}</p>
        <p className="mt-2">{copy.sidebar.nextStepsDescription}</p>
      </div>
    </aside>
  );
}
