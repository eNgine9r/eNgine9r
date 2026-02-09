import { BarChart } from '@/components/BarChart';
import { MetricCard } from '@/components/MetricCard';
import { TopBar } from '@/components/TopBar';
import { advertisingMetrics, advertisingSpend } from '@/lib/mock-data';

export default function AdvertisingPage() {
  return (
    <main>
      <TopBar title="Advertising" subtitle="Measure channel performance and ROI." />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {advertisingMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <section className="grid gap-6 xl:grid-cols-[2fr,1fr]">
          <BarChart title="Channel spend" data={advertisingSpend} />
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Log ad spend</h2>
            <p className="text-sm text-slate-500">
              Add daily spend to keep ROAS and cost per purchase up to date.
            </p>
            <div className="mt-6 space-y-4">
              <label className="block text-sm font-semibold text-slate-600">
                Facebook Ads
                <input
                  type="number"
                  placeholder="0.00"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-brand-500 focus:outline-none"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-600">
                Google Ads
                <input
                  type="number"
                  placeholder="0.00"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-brand-500 focus:outline-none"
                />
              </label>
              <button className="w-full rounded-xl bg-brand-500 py-2 text-sm font-semibold text-white hover:bg-brand-600">
                Save spend
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
