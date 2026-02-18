'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/button';
import { products } from '@/data/products';
import { formatARS } from '@/lib/utils';
import { useCartStore } from '@/store/cart';

export default function Page() {
  const { items, remove, updateQty, subtotal } = useCartStore();
  const shipping = subtotal() > 1000000 ? 0 : 8999;
  const total = subtotal() + shipping;

  return (
    <main className="section py-10">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Carrito</h1>
      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
          <p className="font-medium">Tu carrito está vacío.</p>
          <Link href="/catalog" className="mt-3 inline-block text-brand-600">Ir al catálogo</Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-4">
            {items.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              if (!product) return null;
              return (
                <article key={item.productId} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                    <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-medium">{product.name}</h2>
                    <p className="text-sm text-slate-500">{formatARS(product.price)}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <button aria-label="Disminuir cantidad" onClick={() => updateQty(item.productId, item.qty - 1)} className="focus-ring rounded-md border border-slate-200 p-1 dark:border-slate-700"><Minus size={14} /></button>
                      <span className="min-w-8 text-center text-sm">{item.qty}</span>
                      <button aria-label="Aumentar cantidad" onClick={() => updateQty(item.productId, item.qty + 1)} className="focus-ring rounded-md border border-slate-200 p-1 dark:border-slate-700"><Plus size={14} /></button>
                      <button aria-label="Eliminar producto" onClick={() => remove(item.productId)} className="focus-ring ml-3 rounded-md p-1 text-red-500"><Trash2 size={15} /></button>
                    </div>
                  </div>
                  <div className="text-right font-semibold">{formatARS(product.price * item.qty)}</div>
                </article>
              );
            })}
          </div>
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">Resumen</h3>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatARS(subtotal())}</span></div>
              <div className="flex justify-between"><span>Envío (mock)</span><span>{shipping === 0 ? 'Gratis' : formatARS(shipping)}</span></div>
              <div className="flex justify-between border-t border-slate-200 pt-2 text-base font-semibold dark:border-slate-800"><span>Total</span><span>{formatARS(total)}</span></div>
            </div>
            <Link href="/checkout" className="mt-4 block"><Button className="w-full">Finalizar compra</Button></Link>
          </aside>
        </div>
      )}
    </main>
  );
}
