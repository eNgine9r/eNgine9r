import { DataTable } from '@/components/DataTable';
import { MetricCard } from '@/components/MetricCard';
import { TopBar } from '@/components/TopBar';
import { dashboardMetrics, productsTable } from '@/lib/mock-data';

export default function ProductsPage() {
  return (
    <main>
      <TopBar title="Products" subtitle="Keep inventory and pricing aligned." />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <DataTable title="Inventory status" rows={productsTable} />
      </div>
    </main>
  );
}
