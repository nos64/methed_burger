import React, { useEffect, useState } from 'react';
import ModalProduct from './ModalProduct';
import ProductItem from './ProductItem';
import styles from './ProductList.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import { useAppDispatch } from './../../../hooks/redux';
import { getDataFromServer } from 'store/reducers/productSlice';
import { IProduct } from 'types/IProduct';

const ProductList: React.FC = () => {
  const activeCategory = useAppSelector((store) => store.product.activeCategory);
  const products = useAppSelector((store) => store.product.products);
  const isNoData = useAppSelector((store) => store.product.isNoData);
  const isPending = useAppSelector((store) => store.product.isPending);
  const error = useAppSelector((store) => store.product.error);
  const dispatch = useAppDispatch();
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeProduct, setActiveProduct] = useState<IProduct | null>(null);
  const [visibleProductCategory, setVisibleProductCategory] = useState<IProduct[]>([]);

  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);

  useEffect(() => {
    const visibleProducts = products.filter((item) => item.category === activeCategory.modificator);
    setVisibleProductCategory(visibleProducts);
  }, [activeCategory, products]);

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

        <div className={styles.catalog__warpList}>
          <ul className={styles.catalog__list}>
            {isPending && <h2>...Loading</h2>}
            {!error ? (
              visibleProductCategory.map((item: IProduct) => (
                <ProductItem
                  key={item.id}
                  item={item}
                  handleProductClick={() => handleProductClick(item)}
                />
              ))
            ) : (
              <h2>An error occered: {error}</h2>
            )}
          </ul>
        </div>
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
