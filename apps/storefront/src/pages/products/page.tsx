import type { IProduct } from '@showcase/types';
import { Link, useLoaderData } from 'react-router-dom';
import styles from './products.module.css';

export function ProductsPage() {
    const products = useLoaderData() as IProduct[];

    return (
    <div className={styles.container}>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.grid}>
        {products.map((p) => (
          <Link key={p.id} to={`/products/${p.id}`} className={styles.card}>
            <h3>{p.title}</h3>
            <p className={styles.price}>${p.price}</p>
            <small className={styles.category}>{p.category}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}
