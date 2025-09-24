import type { LoaderFunctionArgs } from 'react-router-dom';
import type { IProduct } from '@showcase/types';

export async function productLoader({ params }: LoaderFunctionArgs) {
  if (!params.productId) {
    throw new Response('Product ID missing', { status: 400 });
  }

  const response = await fetch(`http://localhost:3001/products/${params.productId}`);

  if (!response.ok) throw new Response('Not Found', { status: 404 });

  const product: IProduct = await response.json();

  return product;
}
