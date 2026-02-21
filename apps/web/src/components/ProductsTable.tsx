import type { ProductRow } from '@/lib/mock-data';

export function ProductsTable({
  products,
  labels
}: {
  products: ProductRow[];
  labels: {
    title: string;
    viewAll: string;
    product: string;
    costPrice: string;
    salePrice: string;
    margin: string;
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
              <th className="px-4 py-3">{labels.product}</th>
              <th className="px-4 py-3 text-right">{labels.costPrice}</th>
              <th className="px-4 py-3 text-right">{labels.salePrice}</th>
              <th className="px-4 py-3 text-right">{labels.margin}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {products.map((product) => (
              <tr key={product.name} className="bg-white dark:bg-slate-900">
                <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-200">{product.name}</td>
                <td className="px-4 py-3 text-right text-slate-600 dark:text-slate-400">{product.costPrice}</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-700 dark:text-slate-200">
                  {product.sellingPrice}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-emerald-700 dark:text-emerald-300">
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
