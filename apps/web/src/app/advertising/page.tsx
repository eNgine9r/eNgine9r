import { BarChart } from '@/components/BarChart';
import { MetricCard } from '@/components/MetricCard';
import { TopBar } from '@/components/TopBar';
import { advertisingSpend, dashboardMetrics } from '@/lib/mock-data';

export default function AdvertisingPage() {
  return (
    <main>
      <TopBar title="Advertising" subtitle="Measure channel performance and ROI." />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <BarChart title="Channel spend" data={advertisingSpend} />
      </div>
    </main>
  );
}
