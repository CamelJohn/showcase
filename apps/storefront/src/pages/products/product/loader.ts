import type { LoaderFunctionArgs } from 'react-router-dom';
import type { IProduct } from '@showcase/types';

export async function productLoader({ params }: LoaderFunctionArgs) {
  if (!params.productId) {
    throw new Response('Product ID missing', { status: 400 });
  }

  const res = await fetch(`/api/products/${params.productId}`);

  if (!res.ok) throw new Response('Not Found', { status: 404 });

  const product: IProduct = await res.json();

  return product;
}
