import { ExpenseList } from '@/components/ExpenseList';
import { MetricCard } from '@/components/MetricCard';
import { TopBar } from '@/components/TopBar';
import { dashboardMetrics, fixedExpenses, variableExpenses } from '@/lib/mock-data';

export default function ExpensesPage() {
  return (
    <main>
      <TopBar title="Витрати" subtitle="Аналізуйте операційні витрати та бюджети." />
      <div className="space-y-6 px-6 py-6 lg:px-10">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardMetrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>
        <section className="grid gap-6 xl:grid-cols-2">
          <ExpenseList expenses={fixedExpenses} title="Постійні витрати" cadence="Щомісяця" />
          <ExpenseList expenses={variableExpenses} title="Змінні витрати" cadence="Поточний період" />
        </section>
      </div>
    </main>
  );
}
