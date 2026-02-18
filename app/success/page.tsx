import Link from 'next/link';
import { Button } from '@/components/button';

export default function Page() {
  return (
    <main className="section py-20">
      <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-premium dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold">¡Compra confirmada!</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Gracias por elegir Apple Center BA. Te enviamos el detalle por email.</p>
        <Link href="/catalog" className="mt-6 inline-block"><Button>Seguir comprando</Button></Link>
      </div>
    </main>
  );
}
