import { Link } from "react-router-dom";
import styles from "./homepage.module.css";

export function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Showcase Store</h1>
      <p>Browse our amazing products below.</p>
      <Link to="/products" className={styles.button}>Go to Products</Link>
    </div>
  );
}
