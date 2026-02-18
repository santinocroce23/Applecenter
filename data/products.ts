export type ProductCategory =
  | 'iPhone'
  | 'Fundas'
  | 'Cargadores'
  | 'AirPods'
  | 'Apple Watch'
  | 'Vidrios'
  | 'Otros';

export type ProductCondition = 'Nuevo' | 'Reacondicionado';

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  condition: ProductCondition;
  stock: number;
  tags: string[];
  badge?: 'Nuevo' | 'Más vendido' | '-10%';
  shortDescription: string;
  description: string;
  installments: string;
  images: string[];
  specs: Record<string, string>;
  isNewArrival?: boolean;
  featuredAccessory?: boolean;
  createdAt: string;
  variants?: {
    type: string;
    options: string[];
  }[];
};

export const categories: ProductCategory[] = ['iPhone', 'Fundas', 'Cargadores', 'AirPods', 'Apple Watch', 'Vidrios', 'Otros'];

const baseImage = (query: string) => `https://images.unsplash.com/${query}&auto=format&fit=crop&w=1200&q=80`;

export const products: Product[] = [
  {
    id: 'ip15pro-256-natural',
    slug: 'iphone-15-pro-256-natural',
    name: 'iPhone 15 Pro 256GB Natural Titanium',
    category: 'iPhone',
    price: 2199999,
    condition: 'Nuevo',
    stock: 5,
    tags: ['iphone 15', 'pro', 'titanium', 'apple'],
    badge: 'Más vendido',
    shortDescription: 'Potencia Pro con cámara de 48 MP y titanio premium.',
    description: 'El iPhone 15 Pro combina diseño liviano en titanio, chip A17 Pro y rendimiento superior para fotografía, gaming y productividad diaria.',
    installments: 'Hasta 6 cuotas sin interés',
    images: [
      baseImage('photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3'),
      baseImage('photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3'),
      baseImage('photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3')
    ],
    specs: { Pantalla: '6.1" Super Retina XDR', Chip: 'A17 Pro', Cámara: '48 MP + Ultra Gran Angular', Batería: 'Hasta 23 horas de video' },
    isNewArrival: true,
    createdAt: '2026-01-10',
    variants: [
      { type: 'Color', options: ['Natural Titanium', 'Black Titanium', 'Blue Titanium'] },
      { type: 'Capacidad', options: ['128GB', '256GB', '512GB'] }
    ]
  },
  {
    id: 'ip15-128-pink', slug: 'iphone-15-128-pink', name: 'iPhone 15 128GB Pink', category: 'iPhone', price: 1699999, condition: 'Nuevo', stock: 8,
    tags: ['iphone 15', 'pink', 'dinamic island'], badge: 'Nuevo', shortDescription: 'Diseño vibrante con Dynamic Island y USB-C.', description: 'Una experiencia completa con cámaras mejoradas, rendimiento fluido y excelente autonomía para todo el día.', installments: 'Hasta 6 cuotas sin interés',
    images: [baseImage('photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3'), baseImage('photo-1556656793-08538906a9f8?ixlib=rb-4.0.3')],
    specs: { Pantalla: '6.1" Super Retina XDR', Chip: 'A16 Bionic', Cámara: '48 MP', Conector: 'USB-C' }, isNewArrival: true, createdAt: '2026-01-12',
    variants: [{ type: 'Color', options: ['Pink', 'Blue', 'Black'] }, { type: 'Capacidad', options: ['128GB', '256GB'] }]
  },
  {
    id: 'ip14-128-midnight', slug: 'iphone-14-128-midnight', name: 'iPhone 14 128GB Midnight', category: 'iPhone', price: 1299999, originalPrice: 1449999, condition: 'Reacondicionado', stock: 3,
    tags: ['iphone 14', 'reacondicionado'], badge: '-10%', shortDescription: 'Rendimiento equilibrado en excelente estado.', description: 'Equipo reacondicionado premium con batería certificada y 6 meses de garantía local.', installments: 'Hasta 6 cuotas sin interés',
    images: [baseImage('photo-1678652197831-2d180705cd2c?ixlib=rb-4.0.3')], specs: { Pantalla: '6.1" OLED', Chip: 'A15 Bionic', Estado: 'Reacondicionado A+', Garantía: '6 meses' }, createdAt: '2025-12-15'
  },
  {
    id: 'ip13-128-starlight', slug: 'iphone-13-128-starlight', name: 'iPhone 13 128GB Starlight', category: 'iPhone', price: 1099999, condition: 'Nuevo', stock: 7,
    tags: ['iphone 13', 'starlight'], shortDescription: 'Un clásico confiable con doble cámara.', description: 'iPhone 13 sigue siendo una gran opción por su rendimiento, batería y cámaras versátiles.', installments: 'Hasta 6 cuotas sin interés',
    images: [baseImage('photo-1632661674596-618e81d58295?ixlib=rb-4.0.3')], specs: { Pantalla: '6.1" OLED', Chip: 'A15 Bionic', Cámara: 'Dual 12 MP', Resistencia: 'IP68' }, createdAt: '2025-10-04'
  },
  {
    id: 'ip15pro-max-512-black', slug: 'iphone-15-pro-max-512-black', name: 'iPhone 15 Pro Max 512GB Black', category: 'iPhone', price: 2899999, condition: 'Nuevo', stock: 2,
    tags: ['pro max', '512gb', 'premium'], shortDescription: 'Pantalla grande y máxima batería para usuarios intensivos.', description: 'Ideal para creadores de contenido y usuarios power, con zoom óptico 5x y performance tope de gama.', installments: 'Hasta 6 cuotas sin interés',
    images: [baseImage('photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3')], specs: { Pantalla: '6.7" Super Retina XDR', Chip: 'A17 Pro', Cámara: '48 MP + Tele 5x', Batería: 'Hasta 29 horas de video' }, isNewArrival: true, createdAt: '2026-01-14',
    variants: [{ type: 'Capacidad', options: ['256GB', '512GB', '1TB'] }]
  },
  {
    id: 'case-clear-magsafe', slug: 'funda-clear-magsafe-iphone-15', name: 'Funda Clear MagSafe iPhone 15', category: 'Fundas', price: 69999, condition: 'Nuevo', stock: 14,
    tags: ['funda', 'clear', 'magsafe'], badge: 'Más vendido', shortDescription: 'Protección transparente con imanes reforzados.', description: 'Funda premium anticaídas con compatibilidad MagSafe total y acabado antiamarilleo.', installments: 'Hasta 3 cuotas sin interés',
    images: [baseImage('photo-1601593346740-925612772716?ixlib=rb-4.0.3')], specs: { Material: 'TPU + policarbonato', Compatibilidad: 'iPhone 15', Carga: 'MagSafe', Protección: '2 metros' }, featuredAccessory: true, createdAt: '2026-01-11'
  },
  {
    id: 'case-silicone-midnight', slug: 'funda-silicona-midnight-iphone-14', name: 'Funda Silicona Midnight iPhone 14', category: 'Fundas', price: 54999, condition: 'Nuevo', stock: 0,
    tags: ['funda', 'silicona', 'iphone 14'], shortDescription: 'Tacto suave, interior de microfibra y gran agarre.', description: 'Diseñada para el día a día, con ajuste preciso y cobertura completa de bordes.', installments: 'Hasta 3 cuotas sin interés',
    images: [baseImage('photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3')], specs: { Material: 'Silicona líquida', Compatibilidad: 'iPhone 14', Interior: 'Microfibra', Botones: 'Metálicos' }, featuredAccessory: true, createdAt: '2025-11-20'
  },
  {
    id: 'charger-20w-usbc', slug: 'cargador-20w-usbc', name: 'Cargador USB-C 20W', category: 'Cargadores', price: 45999, condition: 'Nuevo', stock: 22,
    tags: ['cargador', '20w', 'usb-c'], shortDescription: 'Carga rápida segura para iPhone y AirPods.', description: 'Adaptador compacto con protección térmica y compatibilidad universal USB-C.', installments: 'Hasta 3 cuotas sin interés',
    images: [baseImage('photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3')], specs: { Potencia: '20W', Puerto: 'USB-C', Entrada: '100-240V', Garantía: '12 meses' }, featuredAccessory: true, createdAt: '2026-01-05'
  },
  {
    id: 'charger-magsafe-duo', slug: 'cargador-magsafe-duo', name: 'Base MagSafe Duo 2-en-1', category: 'Cargadores', price: 139999, condition: 'Nuevo', stock: 6,
    tags: ['magsafe', 'carga inalambrica'], badge: 'Nuevo', shortDescription: 'Carga iPhone + AirPods en simultáneo.', description: 'Base de escritorio con acabado aluminio y carga magnética estable de hasta 15W.', installments: 'Hasta 6 cuotas sin interés',
    images: [baseImage('photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3')], specs: { Carga: '15W MagSafe', Dispositivos: '2 simultáneos', Material: 'Aluminio', Cable: 'USB-C incluido' }, featuredAccessory: true, createdAt: '2026-01-15'
  },
  {
    id: 'airpods-pro-2', slug: 'airpods-pro-2da-gen', name: 'AirPods Pro 2da Gen USB-C', category: 'AirPods', price: 549999, condition: 'Nuevo', stock: 9,
    tags: ['airpods', 'noise cancelling', 'usb-c'], badge: 'Más vendido', shortDescription: 'Cancelación activa de ruido y audio espacial.', description: 'Sonido premium, estuche con USB-C y excelente integración con todo el ecosistema Apple.', installments: 'Hasta 6 cuotas sin interés',
    images: [baseImage('photo-1606220838315-056192d5e927?ixlib=rb-4.0.3')], specs: { Audio: 'Spatial Audio', Cancelación: 'ANC', Batería: 'Hasta 30h con estuche', Conector: 'USB-C' }, createdAt: '2026-01-13'
  },
  {
    id: 'airpods-3', slug: 'airpods-3ra-gen', name: 'AirPods 3ra Gen', category: 'AirPods', price: 349999, condition: 'Nuevo', stock: 11,
    tags: ['airpods 3', 'audio'], shortDescription: 'Comodidad y sonido envolvente para todos los días.', description: 'Diseño ergonómico y batería de larga duración con estuche Lightning.', installments: 'Hasta 6 cuotas sin interés',
    images: [baseImage('photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3')], specs: { Audio: 'Adaptive EQ', Resistencia: 'IPX4', Batería: 'Hasta 30h', Control: 'Sensor de fuerza' }, createdAt: '2025-09-09'
  },
  {
    id: 'watch-se-44', slug: 'apple-watch-se-44-midnight', name: 'Apple Watch SE 44mm Midnight', category: 'Apple Watch', price: 679999, condition: 'Nuevo', stock: 4,
    tags: ['watch se', '44mm'], shortDescription: 'Tu compañero ideal para salud y entrenamiento.', description: 'Seguimiento de actividad, notificaciones inteligentes y diseño elegante.', installments: 'Hasta 6 cuotas sin interés',
    images: [baseImage('photo-1579586337278-3f436f25d4d6?ixlib=rb-4.0.3')], specs: { Tamaño: '44mm', GPS: 'Sí', Resistencia: '50m', Chip: 'S8' }, createdAt: '2025-12-01'
  },
  {
    id: 'watch-band-ocean-blue', slug: 'malla-ocean-blue-apple-watch', name: 'Malla Ocean Blue Apple Watch', category: 'Apple Watch', price: 89999, condition: 'Nuevo', stock: 15,
    tags: ['malla', 'watch band'], shortDescription: 'Malla de silicona premium resistente al agua.', description: 'Ideal para uso deportivo, cómoda y de secado rápido.', installments: 'Hasta 3 cuotas sin interés',
    images: [baseImage('photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3')], specs: { Talle: '42/44/45mm', Material: 'Fluoroelastómero', Cierre: 'Pin buckle', Color: 'Ocean Blue' }, featuredAccessory: true, createdAt: '2026-01-03'
  },
  {
    id: 'glass-privacy-15pro', slug: 'vidrio-privacidad-iphone-15-pro', name: 'Vidrio Templado Privacidad iPhone 15 Pro', category: 'Vidrios', price: 39999, condition: 'Nuevo', stock: 25,
    tags: ['vidrio', 'privacidad', '15 pro'], shortDescription: 'Protección + privacidad lateral.', description: 'Vidrio 9H con filtro de privacidad para proteger tu pantalla en lugares públicos.', installments: 'Hasta 3 cuotas sin interés',
    images: [baseImage('photo-1510557880182-3f8bc37f7179?ixlib=rb-4.0.3')], specs: { Dureza: '9H', Cobertura: 'Completa', Privacidad: 'Sí', Incluye: 'Kit de instalación' }, createdAt: '2026-01-02'
  },
  {
    id: 'glass-hd-14', slug: 'vidrio-hd-iphone-14', name: 'Vidrio Templado HD iPhone 14', category: 'Vidrios', price: 29999, condition: 'Nuevo', stock: 19,
    tags: ['vidrio hd', 'iphone 14'], shortDescription: 'Claridad total y respuesta táctil precisa.', description: 'Vidrio ultrafino con borde negro y oleofóbico para menor huella.', installments: 'Hasta 3 cuotas sin interés',
    images: [baseImage('photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3')], specs: { Dureza: '9H', Espesor: '0.33 mm', Protección: 'Anti huellas', Compatibilidad: 'iPhone 14' }, createdAt: '2025-09-22'
  },
  {
    id: 'cable-usbc-lightning-2m', slug: 'cable-usbc-lightning-2m', name: 'Cable USB-C a Lightning 2m', category: 'Otros', price: 35999, condition: 'Nuevo', stock: 30,
    tags: ['cable', 'lightning'], shortDescription: 'Cable reforzado para carga rápida y sincronización.', description: 'Recubrimiento trenzado con conectores metálicos de alta durabilidad.', installments: 'Hasta 3 cuotas sin interés',
    images: [baseImage('photo-1580910051074-3eb694886505?ixlib=rb-4.0.3')], specs: { Longitud: '2 metros', Material: 'Nylon trenzado', Certificación: 'MFi', Carga: 'PD 20W+' }, createdAt: '2026-01-01'
  },
  {
    id: 'powerbank-10000-magsafe', slug: 'powerbank-10000-magsafe', name: 'Power Bank MagSafe 10.000 mAh', category: 'Otros', price: 119999, condition: 'Nuevo', stock: 10,
    tags: ['power bank', 'magsafe'], shortDescription: 'Energía extra con fijación magnética.', description: 'Ideal para viajes o jornadas largas, carga inalámbrica + salida USB-C.', installments: 'Hasta 6 cuotas sin interés',
    images: [baseImage('photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3')], specs: { Capacidad: '10.000 mAh', Carga: 'MagSafe 15W', Puertos: 'USB-C', Peso: '210g' }, createdAt: '2025-12-20'
  },
  {
    id: 'adapter-usbc-hdmi', slug: 'adaptador-usbc-hdmi', name: 'Adaptador USB-C a HDMI 4K', category: 'Otros', price: 79999, condition: 'Nuevo', stock: 12,
    tags: ['adaptador', 'hdmi', '4k'], shortDescription: 'Conectá tu iPhone a pantallas externas.', description: 'Adaptador compacto para presentaciones y streaming en 4K.', installments: 'Hasta 3 cuotas sin interés',
    images: [baseImage('photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3')], specs: { Resolución: '4K 60Hz', Entrada: 'USB-C', Salida: 'HDMI', Material: 'Aluminio' }, createdAt: '2025-11-05'
  },
  {
    id: 'ip12-128-blue', slug: 'iphone-12-128-blue', name: 'iPhone 12 128GB Blue', category: 'iPhone', price: 899999, condition: 'Reacondicionado', stock: 6,
    tags: ['iphone 12', 'blue'], shortDescription: 'Excelente relación precio/rendimiento.', description: 'Equipo reacondicionado verificado, ideal para dar el salto a iOS.', installments: 'Hasta 6 cuotas sin interés',
    images: [baseImage('photo-1603921326210-6edd2d60ca68?ixlib=rb-4.0.3')], specs: { Pantalla: '6.1" OLED', Chip: 'A14 Bionic', Estado: 'Reacondicionado A', Garantía: '6 meses' }, createdAt: '2025-08-18'
  },
  {
    id: 'ip11-64-white', slug: 'iphone-11-64-white', name: 'iPhone 11 64GB White', category: 'iPhone', price: 699999, condition: 'Reacondicionado', stock: 4,
    tags: ['iphone 11', 'económico'], shortDescription: 'Entrada al ecosistema Apple con gran cámara dual.', description: 'iPhone 11 reacondicionado, batería certificada y funcionamiento impecable.', installments: 'Hasta 6 cuotas sin interés',
    images: [baseImage('photo-1574672280600-4accfa5b6f98?ixlib=rb-4.0.3')], specs: { Pantalla: '6.1" Liquid Retina', Chip: 'A13 Bionic', Cámara: 'Dual 12 MP', Estado: 'Reacondicionado A' }, createdAt: '2025-07-11'
  },
  {
    id: 'airtag-pack-4', slug: 'airtag-pack-4', name: 'AirTag Pack x4', category: 'Otros', price: 299999, condition: 'Nuevo', stock: 13,
    tags: ['airtag', 'rastreo'], shortDescription: 'Encontrá llaves, mochila y más en segundos.', description: 'Rastreador inteligente con red Find My y precisión de ubicación.', installments: 'Hasta 6 cuotas sin interés',
    images: [baseImage('photo-1625895197185-efcec01cffe0?ixlib=rb-4.0.3')], specs: { Cantidad: '4 unidades', Batería: 'CR2032', Resistencia: 'IP67', Red: 'Find My' }, createdAt: '2026-01-08'
  },
  {
    id: 'case-leather-brown-15pro', slug: 'funda-cuero-brown-iphone-15-pro', name: 'Funda Cuero Brown iPhone 15 Pro', category: 'Fundas', price: 84999, condition: 'Nuevo', stock: 9,
    tags: ['cuero', 'funda premium'], shortDescription: 'Elegancia premium con tacto natural.', description: 'Funda de cuero ecológico premium con protección reforzada en esquinas.', installments: 'Hasta 3 cuotas sin interés',
    images: [baseImage('photo-1484704849700-f032a568e944?ixlib=rb-4.0.3')], specs: { Material: 'Cuero ecológico', Compatibilidad: 'iPhone 15 Pro', Carga: 'MagSafe', Protección: 'Anticaídas' }, createdAt: '2026-01-04'
  },
  {
    id: 'cargador-auto-45w', slug: 'cargador-auto-usbc-45w', name: 'Cargador Auto USB-C 45W', category: 'Cargadores', price: 65999, condition: 'Nuevo', stock: 16,
    tags: ['auto', 'usb-c', '45w'], shortDescription: 'Carga ultra rápida mientras manejás.', description: 'Doble puerto para cargar dos dispositivos al mismo tiempo.', installments: 'Hasta 3 cuotas sin interés',
    images: [baseImage('photo-1553462944-7e2a1ec8f849?ixlib=rb-4.0.3')], specs: { Potencia: '45W', Puertos: 'USB-C + USB-A', Compatibilidad: 'Universal', Protección: 'Sobretensión' }, createdAt: '2025-12-08'
  },
  {
    id: 'watch-charger-portable', slug: 'cargador-portatil-apple-watch', name: 'Cargador Portátil Apple Watch', category: 'Apple Watch', price: 99999, condition: 'Nuevo', stock: 8,
    tags: ['apple watch', 'cargador'], shortDescription: 'Carga rápida para Apple Watch en movimiento.', description: 'Diseño llavero con batería interna para recargas de emergencia.', installments: 'Hasta 3 cuotas sin interés',
    images: [baseImage('photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3')], specs: { Carga: 'Magnética', Batería: '1.800 mAh', Puerto: 'USB-C', Uso: 'Portátil' }, createdAt: '2025-10-29'
  },
  {
    id: 'airpods-max-silver', slug: 'airpods-max-silver', name: 'AirPods Max Silver', category: 'AirPods', price: 1199999, condition: 'Nuevo', stock: 3,
    tags: ['airpods max', 'premium'], shortDescription: 'Audio de alta fidelidad con cancelación líder.', description: 'Experiencia de sonido inmersiva con diseño premium en aluminio.', installments: 'Hasta 12 cuotas sin interés',
    images: [baseImage('photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3')], specs: { Audio: 'Hi-Fi', Cancelación: 'ANC Pro', Material: 'Aluminio', Batería: '20 horas' }, featuredAccessory: true, createdAt: '2026-01-16'
  }
];

export const promoProducts = products.filter((p) => p.badge || p.originalPrice);
