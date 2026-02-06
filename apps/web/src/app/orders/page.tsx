import { DataTable } from '@/components/DataTable';
import { MetricCard } from '@/components/MetricCard';
import { TopBar } from '@/components/TopBar';
import { dashboardMetrics, ordersTable } from '@/lib/mock-data';

export default function OrdersPage() {
  return (
    <main>
      <TopBar title="Orders" subtitle="Track fulfillment, delivery, and returns." />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <DataTable title="Order activity" rows={ordersTable} />
      </div>
    </main>
  );
}
