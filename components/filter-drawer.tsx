'use client';

import { X } from 'lucide-react';
import { categories, ProductCategory } from '@/data/products';
import { Button } from '@/components/button';

type Filters = {
  category: ProductCategory | 'Todas';
  maxPrice: number;
  condition: 'Todos' | 'Nuevo' | 'Reacondicionado';
  stock: 'Todos' | 'En stock' | 'Sin stock';
  sort: 'relevance' | 'priceAsc' | 'priceDesc' | 'newest';
};

export function FilterDrawer({ open, onClose, filters, setFilters, maxLimit }: { open: boolean; onClose: () => void; filters: Filters; setFilters: (value: Filters) => void; maxLimit: number }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 md:hidden">
      <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white p-4 dark:bg-slate-950">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">Filtros</h3>
          <button onClick={onClose} aria-label="Cerrar filtros" className="focus-ring rounded-md p-1"><X size={18} /></button>
        </div>
        <div className="space-y-4">
          <select aria-label="Filtrar por categoría" className="focus-ring w-full rounded-xl border p-2 dark:border-slate-700 dark:bg-slate-900" value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value as Filters['category'] })}>
            <option>Todas</option>
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
          <div>
            <label htmlFor="mobilePrice" className="text-sm font-medium">Precio máximo: {new Intl.NumberFormat('es-AR').format(filters.maxPrice)}</label>
            <input id="mobilePrice" aria-label="Precio máximo" type="range" min={20000} max={maxLimit} step={10000} value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })} className="mt-2 w-full" />
          </div>
          <select aria-label="Estado del producto" className="focus-ring w-full rounded-xl border p-2 dark:border-slate-700 dark:bg-slate-900" value={filters.condition} onChange={(e) => setFilters({ ...filters, condition: e.target.value as Filters['condition'] })}>
            <option>Todos</option><option>Nuevo</option><option>Reacondicionado</option>
          </select>
          <select aria-label="Filtro de stock" className="focus-ring w-full rounded-xl border p-2 dark:border-slate-700 dark:bg-slate-900" value={filters.stock} onChange={(e) => setFilters({ ...filters, stock: e.target.value as Filters['stock'] })}>
            <option>Todos</option><option>En stock</option><option>Sin stock</option>
          </select>
          <select aria-label="Ordenar productos" className="focus-ring w-full rounded-xl border p-2 dark:border-slate-700 dark:bg-slate-900" value={filters.sort} onChange={(e) => setFilters({ ...filters, sort: e.target.value as Filters['sort'] })}>
            <option value="relevance">Relevancia</option><option value="priceAsc">Precio asc</option><option value="priceDesc">Precio desc</option><option value="newest">Más nuevo</option>
          </select>
          <Button className="w-full" onClick={onClose}>Aplicar filtros</Button>
        </div>
      </div>
    </div>
  );
}
