'use client';

import { DataTable } from '@/components/DataTable';
import { MetricCard } from '@/components/MetricCard';
import { TimeSeriesChart } from '@/components/TimeSeriesChart';
import { TopBar } from '@/components/TopBar';
import { getMockData } from '@/lib/mock-data';
import { useSettings } from '@/lib/settings';
import { getDictionary } from '@/lib/translations';

export default function DashboardPage() {
  const { locale } = useSettings();
  const copy = getDictionary(locale);
  const data = getMockData(locale);

  return (
    <main>
      <TopBar
        title={copy.pages.dashboard.title}
        subtitle={copy.pages.dashboard.subtitle}
        sectionLabel={copy.common.overview}
        actionLabel={copy.common.downloadReport}
      />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {data.dashboardMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <section className="grid gap-6 xl:grid-cols-3">
          <TimeSeriesChart
            title={copy.pages.dashboard.revenueTitle}
            subtitle={copy.pages.dashboard.revenueSubtitle}
            series={data.revenueSeries}
            intervalLabel={copy.common.last7Days}
            valueWord={copy.common.valueWord}
          />
          <TimeSeriesChart
            title={copy.pages.dashboard.profitTitle}
            subtitle={copy.pages.dashboard.profitSubtitle}
            series={data.profitSeries}
            intervalLabel={copy.common.last7Days}
            valueWord={copy.common.valueWord}
          />
          <TimeSeriesChart
            title={copy.pages.dashboard.adSpendTitle}
            subtitle={copy.pages.dashboard.adSpendSubtitle}
            series={data.adSpendSeries}
            intervalLabel={copy.common.last7Days}
            valueWord={copy.common.valueWord}
          />
        </section>
        <DataTable
          title={copy.pages.dashboard.latestOrdersTitle}
          rows={data.ordersTable}
          labels={{
            viewAll: copy.common.viewAll,
            id: copy.tables.generic.id,
            details: copy.tables.generic.details,
            status: copy.tables.generic.status,
            amount: copy.tables.generic.amount
          }}
        />
      </div>
    </main>
  );
}
