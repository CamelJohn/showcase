import styles from './cart.module.css';
import { useCart } from '../../state/cart/useCart';
import { mockedProducts } from '../../mocks/data/product';

export const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();

  return (
    <div className={styles.cartPage}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table className={styles.cartTable}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => {
              const product = mockedProducts.find(p => p.id === item.productId);
              if (!product) return null;
              return (
                <tr key={item.productId}>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      max={product.stock}
                      onChange={e =>
                        updateQuantity(item.productId, Number(e.target.value))
                      }
                    />
                  </td>
                  <td>${(product.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.productId)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <h2>Total: ${getTotal().toFixed(2)}</h2>
      {cartItems.length > 0 && (
        <button
          onClick={() => {
            // Navigate to checkout
            window.location.href = '/checkout';
          }}
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};