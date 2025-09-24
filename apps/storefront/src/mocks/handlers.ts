import { http, HttpResponse } from 'msw';
import type { IProduct } from '@showcase/types';

const products: IProduct[] = [
  { id: '1', title: 'Product 1', description: 'Desc', price: 10, stock: 5, category: 'A' },
  { id: '2', title: 'Product 2', description: 'Desc', price: 20, stock: 3, category: 'B' },
];

interface IGetProductParams {
  id: string;
}

export const handlers = [
  http.get('/api/products', () => {
    return HttpResponse.json(products, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.get<IGetProductParams>('/api/products/:id', ({ params }) => {
    const { id } = params;
    const product = products.find((p) => p.id === id);
    return HttpResponse.json(product, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];
