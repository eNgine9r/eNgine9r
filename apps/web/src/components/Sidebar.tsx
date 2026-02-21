import Link from 'next/link';

const links = [
  { href: '/', label: 'Дашборд' },
  { href: '/orders', label: 'Замовлення' },
  { href: '/products', label: 'Товари' },
  { href: '/advertising', label: 'Реклама' },
  { href: '/expenses', label: 'Витрати' }
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col gap-6 border-r border-slate-200 bg-white p-6 lg:flex">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">eNgine9r</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">Commerce Hub</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">
        <p className="font-semibold text-slate-700">Наступні кроки</p>
        <p className="mt-2">Підключіть джерела даних, щоб замінити тестові модулі.</p>
      </div>
    </aside>
  );
}
