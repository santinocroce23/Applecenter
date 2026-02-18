'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { Button } from '@/components/button';
import { ProductGrid } from '@/components/product-grid';
import { TrustBadges } from '@/components/trust-badges';

export function HomePage() {
  const featured = products.find((p) => p.slug === 'iphone-15-pro-256-natural') ?? products[0];
  const newcomers = products.filter((p) => p.isNewArrival).slice(0, 4);
  const accessories = products.filter((p) => p.featuredAccessory).slice(0, 4);

  return (
    <main className="pb-8">
      <section className="section pt-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-premium dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-2 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">Nuevo destacado</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{featured.name}</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Potencia de otro nivel, diseño premium y disponibilidad inmediata en Buenos Aires.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/product/${featured.slug}`}><Button>Comprar ahora</Button></Link>
              <Link href="/catalog"><Button variant="secondary">Ver catálogo</Button></Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
            <Image src={featured.images[0]} alt={featured.name} fill className="object-cover" priority />
          </div>
        </motion.div>
      </section>

      <section className="section mt-12">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Nuevos ingresos</h2>
          <Link href="/catalog" className="text-sm text-brand-600">Ver todo</Link>
        </div>
        <ProductGrid products={newcomers} />
      </section>

      <section className="section mt-12">
        <h2 className="mb-5 text-2xl font-semibold">Accesorios destacados</h2>
        <ProductGrid products={accessories} />
      </section>

      <section className="section mt-12 grid gap-4 md:grid-cols-4">
        {[
          ['Garantía local', 'Equipos revisados y garantía escrita en cada compra.'],
          ['Cuotas sin interés', 'Pagá en hasta 6 o 12 cuotas según producto.'],
          ['Envíos rápidos', 'Envíos a CABA/GBA y despacho al interior.'],
          ['Retiro en tienda', 'Retirá por nuestro punto en CABA coordinando horario.']
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="font-semibold">{title}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{text}</p>
          </div>
        ))}
      </section>

      <TrustBadges />
    </main>
  );
}
