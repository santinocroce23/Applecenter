'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/button';
import { formatARS } from '@/lib/utils';
import { useCartStore } from '@/store/cart';

export default function Page() {
  const router = useRouter();
  const subtotal = useCartStore((s) => s.subtotal)();
  const clear = useCartStore((s) => s.clear);
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', zip: '', city: '', province: '', shipping: 'Envío', payment: 'Tarjeta' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    ['name', 'email', 'phone', 'city', 'province'].forEach((field) => {
      if (!form[field as keyof typeof form]) next[field] = 'Campo requerido';
    });
    if (!form.email.includes('@')) next.email = 'Email inválido';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    clear();
    router.push('/success');
  };

  return (
    <main className="section py-10">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Checkout</h1>
      <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          {[
            ['name', 'Nombre y apellido'], ['email', 'Email'], ['phone', 'Teléfono'], ['address', 'Dirección'], ['zip', 'Código Postal'], ['city', 'Ciudad'], ['province', 'Provincia']
          ].map(([key, label]) => (
            <label key={key} className="block text-sm">
              {label}
              <input aria-label={label} value={form[key as keyof typeof form]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className="focus-ring mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
              {errors[key] && <span className="text-xs text-red-500">{errors[key]}</span>}
            </label>
          ))}

          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm">Método de envío
              <select aria-label="Método de envío" value={form.shipping} onChange={(e) => setForm({ ...form, shipping: e.target.value })} className="focus-ring mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950">
                <option>Envío</option><option>Retiro en tienda</option>
              </select>
            </label>
            <label className="text-sm">Método de pago
              <select aria-label="Método de pago" value={form.payment} onChange={(e) => setForm({ ...form, payment: e.target.value })} className="focus-ring mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950">
                <option>Tarjeta</option><option>Transferencia</option><option>Efectivo</option>
              </select>
            </label>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-semibold">Resumen final</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Subtotal: {formatARS(subtotal)}</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">Envío: a confirmar</p>
          <p className="mt-4 text-xs text-slate-500">Precios sujetos a cambio. Stock sujeto a disponibilidad.</p>
          <Button type="submit" className="mt-4 w-full">Confirmar compra</Button>
          <Link href="/cart" className="mt-2 block text-center text-sm text-brand-600">Volver al carrito</Link>
        </aside>
      </form>
    </main>
  );
}
