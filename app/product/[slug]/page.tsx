import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { ProductDetail } from '@/components/product-detail';

export default function Page({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return notFound();
  return <ProductDetail product={product} />;
}
