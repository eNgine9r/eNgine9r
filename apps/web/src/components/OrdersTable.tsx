import type { OrderRow } from '@/lib/mock-data';

export function OrdersTable({
  orders,
  labels
}: {
  orders: OrderRow[];
  labels: {
    title: string;
    viewAll: string;
    orderId: string;
    date: string;
    product: string;
    revenue: string;
    costPrice: string;
    delivery: string;
    ads: string;
    profit: string;
  };
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{labels.title}</h2>
        <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600">
          {labels.viewAll}
        </button>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-100 dark:border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-950 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3">{labels.orderId}</th>
              <th className="px-4 py-3">{labels.date}</th>
              <th className="px-4 py-3">{labels.product}</th>
              <th className="px-4 py-3 text-right">{labels.revenue}</th>
              <th className="px-4 py-3 text-right">{labels.costPrice}</th>
              <th className="px-4 py-3 text-right">{labels.delivery}</th>
              <th className="px-4 py-3 text-right">{labels.ads}</th>
              <th className="px-4 py-3 text-right">{labels.profit}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {orders.map((order) => (
              <tr key={order.id} className="bg-white dark:bg-slate-900">
                <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-200">{order.id}</td>
                <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{order.date}</td>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{order.product}</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-700 dark:text-slate-200">{order.revenue}</td>
                <td className="px-4 py-3 text-right text-slate-600 dark:text-slate-400">{order.productCost}</td>
                <td className="px-4 py-3 text-right text-slate-600 dark:text-slate-400">{order.deliveryCost}</td>
                <td className="px-4 py-3 text-right text-slate-600 dark:text-slate-400">{order.adCost}</td>
                <td className="px-4 py-3 text-right font-semibold text-emerald-700 dark:text-emerald-300">
                  {order.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
