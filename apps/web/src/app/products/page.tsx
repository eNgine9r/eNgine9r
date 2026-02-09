import { MetricCard } from '@/components/MetricCard';
import { ProductsTable } from '@/components/ProductsTable';
import { TopBar } from '@/components/TopBar';
import { dashboardMetrics, products } from '@/lib/mock-data';

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
        <ProductsTable products={products} />
      </div>
    </main>
  );
}
