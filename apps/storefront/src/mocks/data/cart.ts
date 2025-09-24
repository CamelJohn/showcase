import { faker } from '@faker-js/faker';
import { mockProducts } from './product';

export function mockCart(products = mockProducts(5)) {
  const items = products.map((product, index) => ({
    productId: product.id,
    name: product.title,
    price: product.price,
    quantity: index + 1,
  }));

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return {
    items,
    total,
    currency: faker.finance.currencyCode(),
  };
}
