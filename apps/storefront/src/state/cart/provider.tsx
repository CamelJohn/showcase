import type { ICartItem } from '@showcase/types';
import { mockedProducts } from '../../mocks/data/product';
import { CartContext } from './context';
import type { ICartProviderProps } from './types';
import React from 'react';

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cartItems, setCartItems] = React.useState<ICartItem[]>([]);

  const addToCart = (productId: string, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { productId, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => {
      const product = mockedProducts.find(p => p.id === item.productId);
      return product ? sum + product.price * item.quantity : sum;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};