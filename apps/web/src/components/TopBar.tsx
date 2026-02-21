'use client';

import { useSettings } from '@/lib/settings';
import { getDictionary } from '@/lib/translations';

export function TopBar({
  title,
  subtitle,
  sectionLabel,
  actionLabel
}: {
  title: string;
  subtitle: string;
  sectionLabel: string;
  actionLabel: string;
}) {
  const { locale, setLocale, theme, setTheme } = useSettings();
  const copy = getDictionary(locale);

  const optionClass = (isActive: boolean) =>
    `rounded-lg px-2.5 py-1 text-[11px] font-semibold transition ${
      isActive
        ? 'bg-brand-500 text-white'
        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
    }`;

  return (
    <header className="flex flex-col gap-2 border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-700 dark:bg-slate-900 lg:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">{sectionLabel}</p>
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{title}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 md:mt-0 md:justify-end">
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1 dark:border-slate-700 dark:bg-slate-950">
            <span className="px-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {copy.sidebar.language}
            </span>
            <button type="button" onClick={() => setLocale('uk')} className={optionClass(locale === 'uk')}>
              {copy.sidebar.localeUk}
            </button>
            <button type="button" onClick={() => setLocale('en')} className={optionClass(locale === 'en')}>
              {copy.sidebar.localeEn}
            </button>
          </div>
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1 dark:border-slate-700 dark:bg-slate-950">
            <span className="px-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {copy.sidebar.theme}
            </span>
            <button type="button" onClick={() => setTheme('light')} className={optionClass(theme === 'light')}>
              {copy.sidebar.themeLight}
            </button>
            <button type="button" onClick={() => setTheme('dark')} className={optionClass(theme === 'dark')}>
              {copy.sidebar.themeDark}
            </button>
          </div>
          <button className="rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-600">
            {actionLabel}
          </button>
        </div>
      </div>
    </header>
  );
}
