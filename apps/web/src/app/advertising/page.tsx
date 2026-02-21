'use client';

import { BarChart } from '@/components/BarChart';
import { MetricCard } from '@/components/MetricCard';
import { TopBar } from '@/components/TopBar';
import { getMockData } from '@/lib/mock-data';
import { useSettings } from '@/lib/settings';
import { getDictionary } from '@/lib/translations';

export default function AdvertisingPage() {
  const { locale } = useSettings();
  const copy = getDictionary(locale);
  const data = getMockData(locale);

  return (
    <main>
      <TopBar
        title={copy.pages.advertising.title}
        subtitle={copy.pages.advertising.subtitle}
        sectionLabel={copy.common.overview}
        actionLabel={copy.common.downloadReport}
      />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.advertisingMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <section className="grid gap-6 xl:grid-cols-[2fr,1fr]">
          <BarChart
            title={copy.pages.advertising.channelSpendTitle}
            data={data.advertisingSpend}
            intervalLabel={copy.common.last30Days}
          />
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{copy.pages.advertising.formTitle}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">{copy.pages.advertising.formDescription}</p>
            <div className="mt-6 space-y-4">
              <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300">
                {copy.pages.advertising.facebookLabel}
                <input
                  type="number"
                  placeholder="0.00"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300">
                {copy.pages.advertising.googleLabel}
                <input
                  type="number"
                  placeholder="0.00"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                />
              </label>
              <button className="w-full rounded-xl bg-brand-500 py-2 text-sm font-semibold text-white transition hover:bg-brand-600">
                {copy.pages.advertising.saveButton}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
