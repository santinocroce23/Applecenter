import { BadgeCheck, CreditCard, ShieldCheck, Truck } from 'lucide-react';

const items = [
  { icon: CreditCard, title: 'Pagos seguros', text: 'Tarjetas, transferencia y efectivo.' },
  { icon: Truck, title: 'Envíos rápidos', text: 'CABA/GBA en 24-48hs hábiles.' },
  { icon: ShieldCheck, title: 'Garantía real', text: 'Equipos y accesorios verificados.' },
  { icon: BadgeCheck, title: 'Soporte experto', text: 'Atención personalizada por WhatsApp.' }
];

export function TrustBadges() {
  return (
    <section className="section mt-10">
      <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-premium dark:border-slate-800 dark:bg-slate-900 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <item.icon className="text-brand-500" size={20} />
            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs text-slate-600 dark:text-slate-300">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
