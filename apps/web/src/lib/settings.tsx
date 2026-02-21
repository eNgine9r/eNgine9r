'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'uk' | 'en';
export type Theme = 'light' | 'dark';

type SettingsContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const STORAGE_KEYS = {
  locale: 'engine9r_locale',
  theme: 'engine9r_theme'
} as const;

const SettingsContext = createContext<SettingsContextValue | null>(null);

const getPreferredTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (theme: Theme) => {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
};

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('uk');
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(STORAGE_KEYS.locale) as Locale | null;
    const storedTheme = window.localStorage.getItem(STORAGE_KEYS.theme) as Theme | null;

    if (storedLocale === 'uk' || storedLocale === 'en') {
      setLocaleState(storedLocale);
      document.documentElement.lang = storedLocale;
    }

    const initialTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : getPreferredTheme();
    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEYS.locale, nextLocale);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = nextLocale;
    }
  };

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    applyTheme(nextTheme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const value = useMemo<SettingsContextValue>(
    () => ({
      locale,
      setLocale,
      theme,
      setTheme,
      toggleTheme
    }),
    [locale, theme]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }

  return context;
};
