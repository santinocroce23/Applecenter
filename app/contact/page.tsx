'use client';

import { useState } from 'react';
import { Button } from '@/components/button';

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <main className="section py-10">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Contacto</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <label className="text-sm">Nombre
            <input aria-label="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="focus-ring mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
          </label>
          <label className="text-sm">Email
            <input aria-label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="focus-ring mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
          </label>
          <label className="text-sm">Mensaje
            <textarea aria-label="Mensaje" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="focus-ring mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
          </label>
          <Button type="submit">Enviar consulta</Button>
          {submitted && <p className="text-sm text-green-600">¡Gracias! Te respondemos a la brevedad.</p>}
        </form>

        <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
            <iframe title="Mapa de Apple Center BA" src="https://maps.google.com/maps?q=Buenos%20Aires&t=&z=13&ie=UTF8&iwloc=&output=embed" className="h-full w-full" loading="lazy" />
          </div>
          <p className="text-sm">WhatsApp: +54 9 11 5555-1234</p>
          <p className="text-sm">Instagram: @applecenterba</p>
          <p className="text-sm">Email: ventas@applecenterba.com</p>
          <p className="text-sm">Horario: Lun a Vie 10-19hs, Sáb 10-14hs</p>
          <a href="https://wa.me/5491155551234" target="_blank" className="inline-block">
            <Button className="w-full">Hablar por WhatsApp</Button>
          </a>
        </section>
      </div>
    </main>
  );
}
