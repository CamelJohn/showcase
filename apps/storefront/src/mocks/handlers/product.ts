import { http, HttpResponse } from 'msw';
import { mockedProducts } from '../data/product';

const listProducts = http.get('/api/products', () => {
  return HttpResponse.json(mockedProducts, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
});

const getProduct = http.get('/api/products/:id', ({ params }) => {
  const product = mockedProducts.find((p) => p.id === params.id);
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
