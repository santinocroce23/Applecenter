'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Button({ className, children, variant = 'primary', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' }) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'focus-ring inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all',
        variant === 'primary' && 'bg-slate-900 text-white shadow-glow hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200',
        variant === 'secondary' && 'border border-slate-300 bg-white/80 text-slate-900 shadow-premium hover:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white',
        variant === 'ghost' && 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
