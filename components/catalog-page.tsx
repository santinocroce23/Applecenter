'use client';

import { useEffect, useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { categories, products, Product } from '@/data/products';
import { ProductGrid } from '@/components/product-grid';
import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import { FilterDrawer } from '@/components/filter-drawer';
import { SkeletonGrid } from '@/components/skeleton-grid';

const maxLimit = Math.max(...products.map((p) => p.price));

type Filters = {
  category: (typeof categories)[number] | 'Todas';
  maxPrice: number;
  condition: 'Todos' | 'Nuevo' | 'Reacondicionado';
  stock: 'Todos' | 'En stock' | 'Sin stock';
  sort: 'relevance' | 'priceAsc' | 'priceDesc' | 'newest';
};

const defaultFilters: Filters = {
  category: 'Todas',
  maxPrice: maxLimit,
  condition: 'Todos',
  stock: 'Todos',
  sort: 'relevance'
};

const applySort = (items: Product[], sort: Filters['sort']) => {
  if (sort === 'priceAsc') return [...items].sort((a, b) => a.price - b.price);
  if (sort === 'priceDesc') return [...items].sort((a, b) => b.price - a.price);
  if (sort === 'newest') return [...items].sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
  return items;
};

export function CatalogPage() {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const productsView = useMemo(
    () =>
      applySort(
        products.filter((p) => {
          const matchesCategory = filters.category === 'Todas' || p.category === filters.category;
          const matchesPrice = p.price <= filters.maxPrice;
          const matchesCondition = filters.condition === 'Todos' || p.condition === filters.condition;
          const matchesStock = filters.stock === 'Todos' || (filters.stock === 'En stock' ? p.stock > 0 : p.stock === 0);
          const s = query.toLowerCase();
          const matchesQuery = !s || p.name.toLowerCase().includes(s) || p.tags.some((tag) => tag.includes(s));
          return matchesCategory && matchesPrice && matchesCondition && matchesStock && matchesQuery;
        }),
        filters.sort
      ),
    [filters, query]
  );

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 260);
    return () => clearTimeout(timeout);
  }, [filters, query]);

  return (
    <main className="section py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Catálogo</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">Explorá equipos y accesorios con filtros inteligentes.</p>
        </div>
        <Button variant="secondary" className="md:hidden" onClick={() => setIsDrawerOpen(true)}>
          <SlidersHorizontal size={16} className="mr-1" /> Filtros
        </Button>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Badge>{productsView.length} resultados</Badge>
        {filters.category !== 'Todas' && <Badge>{filters.category}</Badge>}
        {query && <Badge>Búsqueda: {query}</Badge>}
        <Button variant="ghost" onClick={() => { setFilters(defaultFilters); setQuery(''); }}>Limpiar</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-[260px_1fr]">
        <aside className="hidden h-fit rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 md:block">
          <div className="space-y-4">
            <input aria-label="Buscar en catálogo" placeholder="Buscar por nombre o tags" value={query} onChange={(e) => setQuery(e.target.value)} className="focus-ring w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950" />
            <select aria-label="Categoría" className="focus-ring w-full rounded-xl border p-2 dark:border-slate-700 dark:bg-slate-950" value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value as Filters['category'] })}>
              <option>Todas</option>{categories.map((c) => <option key={c}>{c}</option>)}
            </select>
            <div>
              <label htmlFor="price" className="text-sm">Precio máximo: {new Intl.NumberFormat('es-AR').format(filters.maxPrice)}</label>
              <input id="price" aria-label="Precio" type="range" min={20000} max={maxLimit} step={10000} value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })} className="mt-2 w-full" />
            </div>
            <select aria-label="Estado" className="focus-ring w-full rounded-xl border p-2 dark:border-slate-700 dark:bg-slate-950" value={filters.condition} onChange={(e) => setFilters({ ...filters, condition: e.target.value as Filters['condition'] })}>
              <option>Todos</option><option>Nuevo</option><option>Reacondicionado</option>
            </select>
            <select aria-label="Stock" className="focus-ring w-full rounded-xl border p-2 dark:border-slate-700 dark:bg-slate-950" value={filters.stock} onChange={(e) => setFilters({ ...filters, stock: e.target.value as Filters['stock'] })}>
              <option>Todos</option><option>En stock</option><option>Sin stock</option>
            </select>
            <select aria-label="Orden" className="focus-ring w-full rounded-xl border p-2 dark:border-slate-700 dark:bg-slate-950" value={filters.sort} onChange={(e) => setFilters({ ...filters, sort: e.target.value as Filters['sort'] })}>
              <option value="relevance">Relevancia</option><option value="priceAsc">Precio asc</option><option value="priceDesc">Precio desc</option><option value="newest">Más nuevo</option>
            </select>
          </div>
        </aside>
        <section>
          <input aria-label="Buscar en catálogo" placeholder="Buscar por nombre o tags" value={query} onChange={(e) => setQuery(e.target.value)} className="focus-ring mb-4 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm md:hidden dark:border-slate-700 dark:bg-slate-950" />
          {loading ? <SkeletonGrid /> : <ProductGrid products={productsView} />}
        </section>
      </div>
      <FilterDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} filters={filters} setFilters={setFilters} maxLimit={maxLimit} />
    </main>
  );
}
