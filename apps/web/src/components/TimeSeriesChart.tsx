import type { TimeSeriesPoint } from '@/lib/mock-data';

export function TimeSeriesChart({
  title,
  subtitle,
  series,
  intervalLabel,
  valueWord
}: {
  title: string;
  subtitle: string;
  series: TimeSeriesPoint[];
  intervalLabel: string;
  valueWord: string;
}) {
  const maxValue = Math.max(...series.map((point) => point.value));
  const safeMaxValue = maxValue || 1;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
          <p className="text-xs text-slate-400 dark:text-slate-500">{subtitle}</p>
        </div>
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">{intervalLabel}</span>
      </div>
      <div className="mt-6 grid grid-cols-7 items-end gap-3">
        {series.map((point) => {
          const height = `${Math.max((point.value / safeMaxValue) * 100, 12)}%`;
          return (
            <div key={point.label} className="flex flex-col items-center gap-2">
              <div className="flex h-24 w-full items-end">
                <div
                  className="w-full rounded-full bg-brand-500/80"
                  style={{ height }}
                  aria-label={`${point.label} ${valueWord} ${point.value}`}
                />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                {point.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
