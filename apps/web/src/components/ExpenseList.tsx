import type { Expense } from '@/lib/mock-data';

export function ExpenseList({
  expenses,
  title,
  cadence,
  responsibleLabel
}: {
  expenses: Expense[];
  title: string;
  cadence: string;
  responsibleLabel: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">{cadence}</span>
      </div>
      <ul className="mt-6 space-y-4">
        {expenses.map((expense) => (
          <li
            key={expense.category}
            className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3 dark:border-slate-800"
          >
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{expense.category}</p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                {responsibleLabel}: {expense.owner}
              </p>
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{expense.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
