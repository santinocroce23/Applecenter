'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { products } from '@/data/products';

export type CartItem = {
  productId: string;
  qty: number;
};

type CartStore = {
  items: CartItem[];
  add: (productId: string, qty?: number) => void;
  remove: (productId: string) => void;
  updateQty: (productId: string, qty: number) => void;
  clear: () => void;
  subtotal: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      add: (productId, qty = 1) =>
        set((state) => {
          const exists = state.items.find((item) => item.productId === productId);
          if (exists) {
            return {
              items: state.items.map((item) =>
                item.productId === productId ? { ...item, qty: item.qty + qty } : item
              )
            };
          }

          return { items: [...state.items, { productId, qty }] };
        }),
      remove: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId)
        })),
      updateQty: (productId, qty) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId ? { ...item, qty: Math.max(1, qty) } : item
          )
        })),
      clear: () => set({ items: [] }),
      subtotal: () =>
        get().items.reduce((acc, item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return acc;
          return acc + product.price * item.qty;
        }, 0)
    }),
    {
      name: 'apple-center-ba-cart',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

type WishlistStore = {
  ids: string[];
  toggle: (id: string) => void;
};

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) => {
        const has = get().ids.includes(id);
        set({ ids: has ? get().ids.filter((item) => item !== id) : [...get().ids, id] });
      }
    }),
    {
      name: 'apple-center-ba-wishlist',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
