import type { StatusTone, TableRow } from '@/lib/mock-data';

const statusClasses: Record<StatusTone, string> = {
  warning: 'text-amber-700 bg-amber-50 dark:text-amber-300 dark:bg-amber-950/60',
  info: 'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-950/60',
  success: 'text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/60',
  danger: 'text-rose-700 bg-rose-50 dark:text-rose-300 dark:bg-rose-950/60'
};

export function DataTable({
  title,
  rows,
  labels
}: {
  title: string;
  rows: TableRow[];
  labels: {
    viewAll: string;
    id: string;
    details: string;
    status: string;
    amount: string;
  };
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
        <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600">
          {labels.viewAll}
        </button>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-100 dark:border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-950 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3">{labels.id}</th>
              <th className="px-4 py-3">{labels.details}</th>
              <th className="px-4 py-3">{labels.status}</th>
              <th className="px-4 py-3 text-right">{labels.amount}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {rows.map((row) => (
              <tr key={row.id} className="bg-white dark:bg-slate-900">
                <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-200">{row.id}</td>
                <td className="px-4 py-3 text-slate-500 dark:text-slate-400">
                  <div>{row.customer ?? row.product}</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500">{row.date}</div>
                </td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${statusClasses[row.statusTone]}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right font-semibold text-slate-700 dark:text-slate-200">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
