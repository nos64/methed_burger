import React, { useEffect, useState } from 'react';

import ModalProduct from './ModalProduct';
import ProductItem from './ProductItem';

import { useAppSelector } from '../../../hooks/redux';
import { useAppDispatch } from './../../../hooks/redux';
import { getProductCategory } from 'store/reducers/productSlice';
import { IProduct } from 'types/IProduct';

import styles from './ProductList.module.scss';

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector((store) => store.product.activeCategory);
  const productsCat = useAppSelector((store) => store.product.productsCat);
  const error = useAppSelector((store) => store.product.error);

  const [isModalActive, setIsModalActive] = useState(false);
  const [activeProduct, setActiveProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    dispatch(getProductCategory(activeCategory.modificator));
  }, [activeCategory, dispatch]);

  const handleProductClick = (item: IProduct | null) => {
    setIsModalActive(!isModalActive);
    setActiveProduct(!isModalActive ? item : null);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
    setActiveProduct(null);
  };

  return (
    <>
      <div className={styles.catalog__wrapper}>
        <h2 className={styles.catalog__title}>{activeCategory.buttonText}</h2>

        {!error ? (
          <div className={styles.catalog__warpList}>
            <ul className={styles.catalog__list}>
              {productsCat.map((item: IProduct) => (
                <ProductItem
                  key={item.id}
                  product={item}
                  handleProductClick={() => handleProductClick(item)}
                />
              ))}
            </ul>
          </div>
        ) : (
          <h2 className={styles.errorMessage}>An error occered: {error}</h2>
        )}
      </div>
      <ModalProduct
        isModalActive={isModalActive}
        setIsModalActive={handleCloseModal}
        activeProduct={activeProduct}
      ></ModalProduct>
    </>
  );
};

export default ProductList;
