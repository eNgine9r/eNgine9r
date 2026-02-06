import { BarChart } from '@/components/BarChart';
import { DataTable } from '@/components/DataTable';
import { MetricCard } from '@/components/MetricCard';
import { TopBar } from '@/components/TopBar';
import { advertisingSpend, dashboardMetrics, ordersTable } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <main>
      <TopBar title="Dashboard" subtitle="Monitor performance across your commerce stack." />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <section className="grid gap-6 xl:grid-cols-[2fr,1fr]">
          <DataTable title="Latest orders" rows={ordersTable} />
          <BarChart title="Advertising spend" data={advertisingSpend} />
        </section>
      </div>
    </main>
  );
}
