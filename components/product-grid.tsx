import { Product } from '@/data/products';
import { ProductCard } from '@/components/product-card';

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
        <p className="font-medium">No encontramos productos con esos filtros.</p>
        <p className="mt-1 text-sm text-slate-500">Probá ajustar categoría, precio o estado.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
