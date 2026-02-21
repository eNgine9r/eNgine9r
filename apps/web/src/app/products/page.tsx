'use client';

import { MetricCard } from '@/components/MetricCard';
import { ProductsTable } from '@/components/ProductsTable';
import { TopBar } from '@/components/TopBar';
import { getMockData } from '@/lib/mock-data';
import { useSettings } from '@/lib/settings';
import { getDictionary } from '@/lib/translations';

export default function ProductsPage() {
  const { locale } = useSettings();
  const copy = getDictionary(locale);
  const data = getMockData(locale);

  return (
    <main>
      <TopBar
        title={copy.pages.products.title}
        subtitle={copy.pages.products.subtitle}
        sectionLabel={copy.common.overview}
        actionLabel={copy.common.downloadReport}
      />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.dashboardMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <ProductsTable
          products={data.products}
          labels={{
            title: copy.tables.products.title,
            viewAll: copy.common.viewAll,
            product: copy.tables.products.product,
            costPrice: copy.tables.products.costPrice,
            salePrice: copy.tables.products.salePrice,
            margin: copy.tables.products.margin
          }}
        />
      </div>
    </main>
  );
}
