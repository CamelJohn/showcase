import type { IProduct } from '@showcase/types';

export async function productsLoader(): Promise<IProduct[]> {
  const response = await fetch('/api/products');

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
}
