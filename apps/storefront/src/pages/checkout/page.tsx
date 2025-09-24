
import { useState } from 'react';
import styles from './checkout.module.css';
import { useCart } from '../../state/cart/useCart';
import { mockedProducts } from '../../mocks/data/product';

export const CheckoutPage = () => {
  const { cartItems, getTotal } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleCheckout = () => {
    // Here we would call the backend to create an order
    console.log('Order submitted:', cartItems);
    setSubmitted(true);
  };

  if (submitted)
    return (
      <div className={styles.checkoutPage}>
        <h1>Thank you for your order!</h1>
      </div>
    );

  return (
    <div className={styles.checkoutPage}>
      <h1>Checkout</h1>
      <ul className={styles.checkoutList}>
        {cartItems.map(item => {
          const product = mockedProducts.find(p => p.id === item.productId);
          if (!product) return null;
          return (
            <li key={item.productId}>
              {product.title} x {item.quantity} = $
              {(product.price * item.quantity).toFixed(2)}
            </li>
          );
        })}
      </ul>
      <h2>Total: ${getTotal().toFixed(2)}</h2>
      <button onClick={handleCheckout}>Confirm Order</button>
    </div>
  );
};
