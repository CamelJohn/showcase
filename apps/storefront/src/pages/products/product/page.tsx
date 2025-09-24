import { useLoaderData } from "react-router-dom";
import type { IProduct } from "@showcase/types";
import styles from "./Product.module.css";

export function ProductPage() {
  const product = useLoaderData() as IProduct;

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {/* Placeholder until we have real images */}
        <div className={styles.imagePlaceholder}>
          {product.title.charAt(0)}
        </div>
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p className={styles.stock}>
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>
        <p className={styles.category}>Category: {product.category}</p>

        <button
          className={styles.button}
          disabled={product.stock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
