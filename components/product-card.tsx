'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';
import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import { formatARS } from '@/lib/utils';
import { useCartStore, useWishlistStore } from '@/store/cart';

export function ProductCard({ product }: { product: Product }) {
  const add = useCartStore((s) => s.add);
  const favorites = useWishlistStore((s) => s.ids);
  const toggleFav = useWishlistStore((s) => s.toggle);

  return (
    <motion.article whileHover={{ y: -4 }} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-premium transition dark:border-slate-800 dark:bg-slate-900">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image src={product.images[0]} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 25vw" />
        </div>
      </Link>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/product/${product.slug}`} className="focus-ring line-clamp-2 rounded-md text-sm font-semibold hover:text-brand-600">{product.name}</Link>
          <button aria-label="Agregar a favoritos" className="focus-ring rounded-md p-1" onClick={() => toggleFav(product.id)}>
            <Heart size={16} className={favorites.includes(product.id) ? 'fill-brand-500 text-brand-500' : ''} />
          </button>
        </div>
        <p className="line-clamp-2 text-xs text-slate-600 dark:text-slate-300">{product.shortDescription}</p>
        <div className="flex flex-wrap items-center gap-2">
          {product.badge && <Badge>{product.badge}</Badge>}
          <Badge className={product.stock > 0 ? '' : 'border-red-200 text-red-600 dark:border-red-900 dark:text-red-400'}>{product.stock > 0 ? 'En stock' : 'Sin stock'}</Badge>
        </div>
        <div>
          <p className="text-lg font-bold">{formatARS(product.price)}</p>
          <p className="text-xs text-slate-500">{product.installments}</p>
        </div>
        <Button aria-label={`Agregar ${product.name} al carrito`} onClick={() => add(product.id)} className="w-full" disabled={product.stock === 0}>
          <ShoppingCart size={16} className="mr-1" /> Agregar al carrito
        </Button>
      </div>
    </motion.article>
  );
}
