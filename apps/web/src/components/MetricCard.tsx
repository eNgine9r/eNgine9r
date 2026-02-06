import type { Metric } from '@/lib/mock-data';

const trendStyles = {
  up: 'text-emerald-600 bg-emerald-50',
  down: 'text-rose-600 bg-rose-50'
};

export function MetricCard({ title, value, change, trend }: Metric) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <span className={`rounded-full px-2 py-1 text-xs font-semibold ${trendStyles[trend]}`}>
          {change}
        </span>
      </div>
      <p className="mt-4 text-3xl font-semibold text-slate-900">{value}</p>
    </div>
  );
}
