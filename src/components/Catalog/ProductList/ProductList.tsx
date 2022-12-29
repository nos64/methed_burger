import React from 'react';
import ProductItem from './ProductItem';
import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <div className={styles.catalog__wrapper}>
      <h2 className={styles.catalog__title}>Бургеры</h2>

      <div className={styles.catalog__warpList}>
        <ul className={styles.catalog__list}>
          <ProductItem />
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
