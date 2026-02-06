import type { ChannelSpend } from '@/lib/mock-data';

export function BarChart({ title, data }: { title: string; data: ChannelSpend[] }) {
  const maxValue = Math.max(...data.map((item) => item.spend));

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <span className="text-xs font-semibold text-slate-400">Last 30 days</span>
      </div>
      <div className="mt-6 space-y-4">
        {data.map((item) => {
          const width = `${Math.round((item.spend / maxValue) * 100)}%`;
          return (
            <div key={item.channel}>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>{item.channel}</span>
                <span className="font-semibold text-slate-900">${item.spend.toLocaleString()}</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                <div className="h-2 rounded-full bg-brand-500" style={{ width }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
