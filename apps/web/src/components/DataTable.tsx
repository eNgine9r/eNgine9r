import type { TableRow } from '@/lib/mock-data';

const statusClasses: Record<string, string> = {
  'В обробці': 'text-amber-700 bg-amber-50',
  Відправлено: 'text-blue-700 bg-blue-50',
  Доставлено: 'text-emerald-700 bg-emerald-50',
  Повернено: 'text-rose-700 bg-rose-50',
  'В наявності': 'text-emerald-700 bg-emerald-50',
  'Мало на складі': 'text-amber-700 bg-amber-50',
  Передзамовлення: 'text-rose-700 bg-rose-50'
};

export function DataTable({ title, rows }: { title: string; rows: TableRow[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300">
          Переглянути все
        </button>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Деталі</th>
              <th className="px-4 py-3">Статус</th>
              <th className="px-4 py-3 text-right">Сума</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row) => (
              <tr key={row.id} className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-700">{row.id}</td>
                <td className="px-4 py-3 text-slate-500">
                  <div>{row.customer ?? row.product}</div>
                  <div className="text-xs text-slate-400">{row.date}</div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      statusClasses[row.status] ?? 'text-slate-600 bg-slate-100'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right font-semibold text-slate-700">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
