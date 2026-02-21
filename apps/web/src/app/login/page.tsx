'use client';

import { useState } from 'react';
import { getApiBaseUrl, setAuthToken, withBasePath } from '@/lib/auth';
import { useSettings } from '@/lib/settings';
import { getDictionary } from '@/lib/translations';

const initialForm = {
  name: '',
  email: '',
  password: ''
};

export default function LoginPage() {
  const { locale } = useSettings();
  const copy = getDictionary(locale);
  const loginCopy = copy.pages.login;
  const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (isDemoMode) {
        setAuthToken('demo-token');
        window.location.replace(withBasePath('/'));
        return;
      }

      const endpoint = mode === 'signup' ? '/auth/signup' : '/auth/login';
      const payload =
        mode === 'signup'
          ? { name: form.name.trim(), email: form.email.trim(), password: form.password }
          : { email: form.email.trim(), password: form.password };

      const response = await fetch(`${getApiBaseUrl()}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data?.error ?? loginCopy.authFailed);
        setIsSubmitting(false);
        return;
      }

      if (data?.token) {
        setAuthToken(data.token);
      }

      window.location.replace(withBasePath('/'));
    } catch (err) {
      setError(loginCopy.tryAgain);
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Commerce Hub</p>
        <h1 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {mode === 'signup' ? loginCopy.signupTitle : loginCopy.loginTitle}
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {mode === 'signup' ? loginCopy.signupSubtitle : loginCopy.loginSubtitle}
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">
              {loginCopy.fullName}
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                placeholder={loginCopy.fullNamePlaceholder}
              />
            </label>
          )}
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">
            {loginCopy.email}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              placeholder={loginCopy.emailPlaceholder}
            />
          </label>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">
            {loginCopy.password}
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              minLength={6}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              placeholder={loginCopy.passwordPlaceholder}
            />
          </label>

          {error && <p className="text-sm text-rose-500">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-brand-300"
          >
            {isSubmitting ? loginCopy.submitWaiting : mode === 'signup' ? loginCopy.submitSignup : loginCopy.submitLogin}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          {mode === 'signup' ? loginCopy.switchToLoginPrompt : loginCopy.switchToSignupPrompt}{' '}
          <button
            type="button"
            onClick={() => {
              setMode(mode === 'signup' ? 'login' : 'signup');
              setError('');
            }}
            className="font-semibold text-brand-500"
          >
            {mode === 'signup' ? loginCopy.switchToLogin : loginCopy.switchToSignup}
          </button>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-xs text-slate-500 dark:bg-slate-950 dark:text-slate-400">
          <p className="font-semibold text-slate-700 dark:text-slate-200">{loginCopy.demoTitle}</p>
          <p className="mt-2">{loginCopy.demoDescription}</p>
        </div>
      </div>
    </main>
  );
}
