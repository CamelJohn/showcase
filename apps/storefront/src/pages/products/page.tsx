import type { IProduct } from '@showcase/types';
import { Link, useLoaderData } from 'react-router-dom';
import styles from './products.module.css';
import React from 'react';
import { ProductModal } from './product/modal';

export function ProductsPage() {
  const products = useLoaderData() as IProduct[];
  const [selectedProduct, setSelectedProduct] = React.useState<IProduct | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = React.useState(false);

  const handleOpenModal = (product: IProduct) => {
    setSelectedProduct(product);
    setIsViewModalOpen(true);
  };
  const handleCloseModal = () => setIsViewModalOpen(false);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.grid}>
        {products.map((p) => (
          <div key={p.id} className={styles.card} onClick={() => handleOpenModal(p)}>
            <h3>{p.title}</h3>
            <p className={styles.price}>${p.price}</p>
            <small className={styles.category}>{p.category}</small>
          </div>
          // <Link key={p.id} to={`/products/${p.id}`} className={styles.card}>
          //   <h3>{p.title}</h3>
          //   <p className={styles.price}>${p.price}</p>
          //   <small className={styles.category}>{p.category}</small>
          // </Link>
        ))}
      </div>
      {isViewModalOpen && selectedProduct && (
        <ProductModal
          isOpen={isViewModalOpen}
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
