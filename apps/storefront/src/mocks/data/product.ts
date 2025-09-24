import { faker } from '@faker-js/faker';
import { type IProduct } from '@showcase/types';

export function mockProduct(): IProduct {
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    stock: faker.number.int({ min: 0, max: 100 }),
    category: faker.commerce.department(),
  };
}

export function mockProducts(count: number): IProduct[] {
  return Array.from({ length: count }, () => mockProduct());
}
