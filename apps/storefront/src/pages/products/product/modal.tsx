import type { IProduct } from '@showcase/types';
import React from 'react';
import styles from "./modal.module.css";

interface IProductModalProps {
  isOpen: boolean;
  product: IProduct;
  onClose?: () => void;
}

export const ProductModal: React.FC<IProductModalProps> = ({ isOpen, product, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose(); // Close when clicking outside the modal
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            {product.title.charAt(0)}
          </div>
        </div>

        <div className={styles.info}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>
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
    </div>
  );
};
