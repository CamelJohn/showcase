import type { ICartItem } from '@showcase/types';
import type { ReactNode } from 'react';

export interface CartContextType {
  cartItems: ICartItem[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getTotal: () => number;
}

export interface ICartProviderProps {
  children: ReactNode;
}
