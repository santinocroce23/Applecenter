import { clsx } from 'clsx';

export const cn = (...classes: Array<string | undefined | false | null>) => clsx(classes);

export const formatARS = (value: number) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(value);
