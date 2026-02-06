import type { Expense } from '@/lib/mock-data';

export function ExpenseList({ expenses }: { expenses: Expense[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Expense breakdown</h2>
        <span className="text-xs font-semibold text-slate-400">Monthly</span>
      </div>
      <ul className="mt-6 space-y-4">
        {expenses.map((expense) => (
          <li
            key={expense.category}
            className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-slate-700">{expense.category}</p>
              <p className="text-xs text-slate-400">Owner: {expense.owner}</p>
            </div>
            <p className="text-sm font-semibold text-slate-900">{expense.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
