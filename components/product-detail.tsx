'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Product, products } from '@/data/products';
import { Button } from '@/components/button';
import { Badge } from '@/components/badge';
import { ProductGrid } from '@/components/product-grid';
import { formatARS } from '@/lib/utils';
import { useCartStore } from '@/store/cart';

export function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const add = useCartStore((s) => s.add);
  const related = useMemo(() => products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4), [product]);

  return (
    <main className="section py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <Image src={selectedImage} alt={product.name} fill className="object-cover" priority />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {product.images.map((img) => (
              <button key={img} onClick={() => setSelectedImage(img)} className="focus-ring relative aspect-square overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                <Image src={img} alt={`${product.name} miniatura`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">{product.name}</h1>
          <div className="flex flex-wrap gap-2">
            <Badge>{product.condition}</Badge>
            <Badge className={product.stock > 0 ? '' : 'border-red-200 text-red-600 dark:border-red-900 dark:text-red-400'}>{product.stock > 0 ? `En stock (${product.stock})` : 'Sin stock'}</Badge>
            {product.badge && <Badge>{product.badge}</Badge>}
          </div>
          <p className="text-3xl font-bold">{formatARS(product.price)}</p>
          <p className="text-sm text-slate-500">{product.installments}</p>
          <p className="text-slate-700 dark:text-slate-300">{product.description}</p>

          {product.variants?.map((variant) => (
            <div key={variant.type}>
              <p className="mb-2 text-sm font-medium">{variant.type}</p>
              <div className="flex flex-wrap gap-2">
                {variant.options.map((option) => (
                  <span key={option} className="rounded-full border border-slate-200 px-3 py-1 text-sm dark:border-slate-700">{option}</span>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-3">
            <Button onClick={() => add(product.id)} disabled={product.stock === 0}>Agregar al carrito</Button>
            <Link href="/checkout"><Button variant="secondary">Comprar ahora</Button></Link>
            <a className="focus-ring inline-flex items-center rounded-xl border border-green-500 px-4 py-2 text-sm font-medium text-green-600" href={`https://wa.me/5491155551234?text=Hola,%20quiero%20consultar%20por%20${encodeURIComponent(product.name)}`} target="_blank">
              <MessageCircle size={16} className="mr-1" /> Consultar por WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-3 text-lg font-semibold">Especificaciones</h2>
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key} className="border-t border-slate-100 dark:border-slate-800">
                    <th className="py-2 pr-3 text-left font-medium text-slate-600 dark:text-slate-300">{key}</th>
                    <td className="py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="mb-5 text-2xl font-semibold">Productos relacionados</h2>
        <ProductGrid products={related} />
      </section>
    </main>
  );
}
