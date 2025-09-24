import { http, HttpResponse } from 'msw';
import { mockProducts } from '../data/product';

const products = mockProducts(20);

const listProducts = http.get('/api/products', () => {
  return HttpResponse.json(products, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
});

const getProduct = http.get('/api/products/:id', ({ params }) => {
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    return HttpResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return HttpResponse.json(product, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
});

export const productHandlers = [listProducts, getProduct];
