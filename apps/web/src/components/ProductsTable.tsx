import type { ProductRow } from '@/lib/mock-data';

export function ProductsTable({ products }: { products: ProductRow[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Товари</h2>
        <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300">
          Переглянути все
        </button>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Товар</th>
              <th className="px-4 py-3 text-right">Ціна закупівлі</th>
              <th className="px-4 py-3 text-right">Ціна продажу</th>
              <th className="px-4 py-3 text-right">Маржа %</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((product) => (
              <tr key={product.name} className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-700">{product.name}</td>
                <td className="px-4 py-3 text-right text-slate-600">{product.costPrice}</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-700">
                  {product.sellingPrice}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                  {product.margin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
