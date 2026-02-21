'use client';

import { ExpenseList } from '@/components/ExpenseList';
import { MetricCard } from '@/components/MetricCard';
import { TopBar } from '@/components/TopBar';
import { getMockData } from '@/lib/mock-data';
import { useSettings } from '@/lib/settings';
import { getDictionary } from '@/lib/translations';

export default function ExpensesPage() {
  const { locale } = useSettings();
  const copy = getDictionary(locale);
  const data = getMockData(locale);

  return (
    <main>
      <TopBar
        title={copy.pages.expenses.title}
        subtitle={copy.pages.expenses.subtitle}
        sectionLabel={copy.common.overview}
        actionLabel={copy.common.downloadReport}
      />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.dashboardMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <section className="grid gap-6 xl:grid-cols-2">
          <ExpenseList
            expenses={data.fixedExpenses}
            title={copy.pages.expenses.fixedTitle}
            cadence={copy.pages.expenses.fixedCadence}
            responsibleLabel={copy.common.responsible}
          />
          <ExpenseList
            expenses={data.variableExpenses}
            title={copy.pages.expenses.variableTitle}
            cadence={copy.pages.expenses.variableCadence}
            responsibleLabel={copy.common.responsible}
          />
        </section>
      </div>
    </main>
  );
}
