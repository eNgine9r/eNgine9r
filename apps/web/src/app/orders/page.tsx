'use client';

import { MetricCard } from '@/components/MetricCard';
import { OrdersTable } from '@/components/OrdersTable';
import { TopBar } from '@/components/TopBar';
import { getMockData } from '@/lib/mock-data';
import { useSettings } from '@/lib/settings';
import { getDictionary } from '@/lib/translations';

export default function OrdersPage() {
  const { locale } = useSettings();
  const copy = getDictionary(locale);
  const data = getMockData(locale);

  return (
    <main>
      <TopBar
        title={copy.pages.orders.title}
        subtitle={copy.pages.orders.subtitle}
        sectionLabel={copy.common.overview}
        actionLabel={copy.common.downloadReport}
      />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.dashboardMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <OrdersTable
          orders={data.orders}
          labels={{
            title: copy.tables.orders.title,
            viewAll: copy.common.viewAll,
            orderId: copy.tables.orders.orderId,
            date: copy.tables.orders.date,
            product: copy.tables.orders.product,
            revenue: copy.tables.orders.revenue,
            costPrice: copy.tables.orders.costPrice,
            delivery: copy.tables.orders.delivery,
            ads: copy.tables.orders.ads,
            profit: copy.tables.orders.profit
          }}
        />
      </div>
    </main>
  );
}
