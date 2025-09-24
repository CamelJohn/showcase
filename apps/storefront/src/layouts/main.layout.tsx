import { Link, Outlet } from 'react-router-dom';
import styles from './main.layout.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Storefront</h1>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet /> {/* child routes render here */}
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
}