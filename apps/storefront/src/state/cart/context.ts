import React from 'react';
import type { CartContextType } from './types';

export const CartContext = React.createContext<CartContextType | undefined>(undefined);
