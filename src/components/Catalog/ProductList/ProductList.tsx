import React, { useState } from 'react';
import ModalProduct from './ModalProduct';
import ProductItem from './ProductItem';
import styles from './ProductList.module.scss';
// import { IProduct } from '../../../types/IProduct';

const ProductList = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  // const [activeCard, setActiveCard] = useState<IProduct | null>(null);

  const handleCloseModal = () => {
    setIsModalActive(false);
    // setActiveItem(null);
  };

  return (
    <>
      <div className={styles.catalog__wrapper}>
        <h2 className={styles.catalog__title}>Бургеры</h2>

        <div className={styles.catalog__warpList}>
          <ul className={styles.catalog__list}>
            <ProductItem />
          </ul>
        </div>
      </div>
      <ModalProduct
        isModalActive={isModalActive}
        setIsModalActive={handleCloseModal}
      ></ModalProduct>
    </>
  );
};

export default ProductList;
