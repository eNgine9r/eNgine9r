import { DataTable } from '@/components/DataTable';
import { MetricCard } from '@/components/MetricCard';
import { TimeSeriesChart } from '@/components/TimeSeriesChart';
import { TopBar } from '@/components/TopBar';
import {
  adSpendSeries,
  dashboardMetrics,
  ordersTable,
  profitSeries,
  revenueSeries
} from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <main>
      <TopBar title="Dashboard" subtitle="Monitor performance across your commerce stack." />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {dashboardMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <section className="grid gap-6 xl:grid-cols-3">
          <TimeSeriesChart
            title="Revenue over time"
            subtitle="$128,430 total"
            series={revenueSeries}
          />
          <TimeSeriesChart title="Profit over time" subtitle="$46,280 total" series={profitSeries} />
          <TimeSeriesChart
            title="Ad spend over time"
            subtitle="$24,980 total"
            series={adSpendSeries}
          />
        </section>
        <DataTable title="Latest orders" rows={ordersTable} />
      </div>
    </main>
  );
}
