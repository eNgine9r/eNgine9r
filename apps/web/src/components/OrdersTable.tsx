import type { OrderRow } from '@/lib/mock-data';

export function OrdersTable({ orders }: { orders: OrderRow[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Orders</h2>
        <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300">
          View all
        </button>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3 text-right">Revenue</th>
              <th className="px-4 py-3 text-right">Product Cost</th>
              <th className="px-4 py-3 text-right">Delivery Cost</th>
              <th className="px-4 py-3 text-right">Ad Cost</th>
              <th className="px-4 py-3 text-right">Profit</th>
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
