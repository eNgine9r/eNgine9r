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
      <TopBar title="Дашборд" subtitle="Відстежуйте ефективність у всьому e-commerce стеку." />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {dashboardMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <section className="grid gap-6 xl:grid-cols-3">
          <TimeSeriesChart
            title="Дохід у динаміці"
            subtitle="$128,430 загалом"
            series={revenueSeries}
          />
          <TimeSeriesChart title="Прибуток у динаміці" subtitle="$46,280 загалом" series={profitSeries} />
          <TimeSeriesChart
            title="Витрати на рекламу у динаміці"
            subtitle="$24,980 загалом"
            series={adSpendSeries}
          />
        </section>
        <DataTable title="Останні замовлення" rows={ordersTable} />
      </div>
    </main>
  );
}
