'use client';

import Link from 'next/link';
import { Moon, Search, ShoppingBag, Sun } from 'lucide-react';
import { useThemeToggle } from '@/components/theme-provider';
import { useCartStore } from '@/store/cart';

export function Navbar() {
  const { isDark, toggle } = useThemeToggle();
  const items = useCartStore((s) => s.items);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85">
      <div className="section">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="focus-ring rounded-md text-lg font-semibold tracking-tight">Apple Center BA</Link>
          <div className="hidden flex-1 items-center justify-center md:flex">
            <label className="glass flex w-full max-w-sm items-center gap-2 rounded-full px-4 py-2 text-sm">
              <Search size={16} className="text-slate-500" />
              <input aria-label="Buscar productos" placeholder="Buscar iPhone, MagSafe, AirPods..." className="w-full bg-transparent outline-none placeholder:text-slate-500" />
            </label>
          </div>
          <nav className="hidden items-center gap-4 text-sm md:flex">
            <Link href="/catalog" className="focus-ring rounded-md px-2 py-1 hover:text-brand-600">Catálogo</Link>
            <Link href="/contact" className="focus-ring rounded-md px-2 py-1 hover:text-brand-600">Contacto</Link>
          </nav>
          <div className="flex items-center gap-2">
            <button aria-label="Cambiar tema" onClick={toggle} className="focus-ring rounded-xl border border-slate-200 p-2 dark:border-slate-700">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link href="/cart" className="focus-ring relative rounded-xl border border-slate-200 p-2 dark:border-slate-700" aria-label="Ir al carrito">
              <ShoppingBag size={18} />
              {items.length > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-brand-500 px-1.5 text-xs text-white">{items.length}</span>}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/80 bg-slate-50 py-1 text-center text-xs dark:border-slate-800 dark:bg-slate-900">Envíos CABA/GBA • Cuotas • Garantía</div>
    </header>
  );
}
