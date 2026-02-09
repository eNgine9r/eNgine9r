import { ExpenseList } from '@/components/ExpenseList';
import { MetricCard } from '@/components/MetricCard';
import { TopBar } from '@/components/TopBar';
import { dashboardMetrics, fixedExpenses, variableExpenses } from '@/lib/mock-data';

export default function ExpensesPage() {
  return (
    <main>
      <TopBar title="Expenses" subtitle="Review operational costs and budgets." />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <section className="grid gap-6 xl:grid-cols-2">
          <ExpenseList expenses={fixedExpenses} title="Fixed expenses" cadence="Monthly" />
          <ExpenseList expenses={variableExpenses} title="Variable expenses" cadence="Rolling" />
        </section>
      </div>
    </main>
  );
}
