import type { ICartItem } from './cart-item';

export enum OrderStatus {
  Pending = 'pending',
  Completed = 'completed',
  Cancelled = 'cancelled',
}

export interface Order {
  id: string;
  userId: string;
  items: ICartItem[];
  total: number;
  status: OrderStatus;
}
