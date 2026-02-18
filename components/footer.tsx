import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="section grid gap-8 text-sm md:grid-cols-4">
        <div>
          <h3 className="font-semibold">Apple Center BA</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Tienda premium en Buenos Aires. iPhones, accesorios y asesoramiento experto.</p>
        </div>
        <div>
          <h4 className="font-semibold">Contacto</h4>
          <p className="mt-2 text-slate-600 dark:text-slate-300">WhatsApp: +54 9 11 5555-1234</p>
          <p className="text-slate-600 dark:text-slate-300">Email: ventas@applecenterba.com</p>
        </div>
        <div>
          <h4 className="font-semibold">Horarios</h4>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Lun a Vie 10 a 19hs</p>
          <p className="text-slate-600 dark:text-slate-300">Sáb 10 a 14hs</p>
        </div>
        <div>
          <h4 className="font-semibold">Legal</h4>
          <div className="mt-2 flex flex-col gap-1 text-slate-600 dark:text-slate-300">
            <Link href="/">Términos y condiciones</Link>
            <Link href="/">Política de cambios</Link>
            <span>Precios sujetos a cambio</span>
            <span>Stock sujeto a disponibilidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
