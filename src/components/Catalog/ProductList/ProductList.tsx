import { getData } from '../../../api/getData';
import React, { useEffect, useState } from 'react';
import ModalProduct from './ModalProduct';
import ProductItem from './ProductItem';
import styles from './ProductList.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import { useAppDispatch } from './../../../hooks/redux';
import { getDataFromServer } from 'store/reducers/productSlice';

const ProductList = () => {
  const products = useAppSelector((store) => store.product.products);
  const dispatch = useAppDispatch();
  const [isModalActive, setIsModalActive] = useState(false);
  // const [activeCard, setActiveCard] = useState<IProduct | null>(null);

  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);

  const data = getData();
  console.log(data);
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
            {products.map((item) => (
              <ProductItem key={item.id} {...item} />
            ))}
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
