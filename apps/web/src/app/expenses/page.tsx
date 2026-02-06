import { ExpenseList } from '@/components/ExpenseList';
import { MetricCard } from '@/components/MetricCard';
import { TopBar } from '@/components/TopBar';
import { dashboardMetrics, expensesList } from '@/lib/mock-data';

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
        <ExpenseList expenses={expensesList} />
      </div>
    </main>
  );
}
