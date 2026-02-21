'use client';

import { useState } from 'react';
import { getApiBaseUrl, setAuthToken, withBasePath } from '@/lib/auth';

const initialForm = {
  name: '',
  email: '',
  password: ''
};

export default function LoginPage() {
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
        setError(data?.error ?? 'Не вдалося виконати автентифікацію.');
        setIsSubmitting(false);
        return;
      }

      if (data?.token) {
        setAuthToken(data.token);
      }

      window.location.replace(withBasePath('/'));
    } catch (err) {
      setError('Сталася помилка. Спробуйте ще раз.');
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Commerce Hub</p>
        <h1 className="mt-4 text-2xl font-semibold text-slate-900">
          {mode === 'signup' ? 'Створіть акаунт' : 'З поверненням'}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {mode === 'signup'
            ? 'Почніть відстежувати дохід за кілька хвилин.'
            : 'Увійдіть, щоб переглянути фінансові показники.'}
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <label className="block text-sm font-medium text-slate-600">
              Повне ім'я
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none"
                placeholder="Іван Петренко"
              />
            </label>
          )}
          <label className="block text-sm font-medium text-slate-600">
            Електронна пошта
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </label>
          <label className="block text-sm font-medium text-slate-600">
            Пароль
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              minLength={6}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none"
              placeholder="••••••••"
            />
          </label>

          {error && <p className="text-sm text-rose-500">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-brand-300"
          >
            {isSubmitting ? 'Зачекайте…' : mode === 'signup' ? 'Створити акаунт' : 'Увійти'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          {mode === 'signup' ? 'Вже маєте акаунт?' : 'Вперше в Commerce Hub?'}{' '}
          <button
            type="button"
            onClick={() => {
              setMode(mode === 'signup' ? 'login' : 'signup');
              setError('');
            }}
            className="font-semibold text-brand-500"
          >
            {mode === 'signup' ? 'Увійти' : 'Створити'}
          </button>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-xs text-slate-500">
          <p className="font-semibold text-slate-700">Демо-доступ</p>
          <p className="mt-2">Використайте акаунт avery@example.com з паролем password123.</p>
        </div>
      </div>
    </main>
  );
}
