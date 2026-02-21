import type { OrderRow } from '@/lib/mock-data';

export function OrdersTable({ orders }: { orders: OrderRow[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Замовлення</h2>
        <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300">
          Переглянути все
        </button>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">ID замовлення</th>
              <th className="px-4 py-3">Дата</th>
              <th className="px-4 py-3">Товар</th>
              <th className="px-4 py-3 text-right">Дохід</th>
              <th className="px-4 py-3 text-right">Собівартість</th>
              <th className="px-4 py-3 text-right">Доставка</th>
              <th className="px-4 py-3 text-right">Реклама</th>
              <th className="px-4 py-3 text-right">Прибуток</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((order) => (
              <tr key={order.id} className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-700">{order.id}</td>
                <td className="px-4 py-3 text-slate-500">{order.date}</td>
                <td className="px-4 py-3 text-slate-700">{order.product}</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-700">
                  {order.revenue}
                </td>
                <td className="px-4 py-3 text-right text-slate-600">{order.productCost}</td>
                <td className="px-4 py-3 text-right text-slate-600">{order.deliveryCost}</td>
                <td className="px-4 py-3 text-right text-slate-600">{order.adCost}</td>
                <td className="px-4 py-3 text-right font-semibold text-emerald-700">
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
