export function TopBar({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="flex flex-col gap-2 border-b border-slate-200 bg-white px-6 py-4 lg:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Огляд</p>
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
        <button className="mt-3 rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold text-white shadow-sm md:mt-0">
          Завантажити звіт
        </button>
      </div>
    </header>
  );
}
