import React from 'react';

import { IProduct } from '../../../../types/IProduct';
import { API_URL } from 'common/constants';
import { useAppDispatch } from 'hooks/redux';
import { addToCart } from 'store/reducers/cartSlice';

import styles from './ProductItem.module.scss';

interface IProductProps {
  product: IProduct;
  handleProductClick: (product: IProduct) => void;
}

const ProductItem: React.FC<IProductProps> = ({ product, handleProductClick }) => {
  const dispatch = useAppDispatch();

  const addToCartClick = (id: string, count = 1) => {
    dispatch(addToCart({ id, count }));
  };

  return (
    <li className={styles.catalog__item}>
      <article className={styles.product}>
        <img
          className={styles.product__image}
          src={`${API_URL}/${product.image}`}
          alt={product.title}
          onClick={() => handleProductClick(product)}
        />
        <p className={styles.product__price}>
          {product.price}
          <span className={styles.currency}> ₽</span>
        </p>

        <h3 className={styles.ptoduct__title}>
          <button className={styles.product__detail} onClick={() => handleProductClick(product)}>
            {product.title}
          </button>
        </h3>
        <p className={styles.product__weight}>{product.weight}г</p>
        <button
          className={styles.product__add}
          type="button"
          onClick={() => addToCartClick(product.id)}
        >
          Добавить
        </button>
      </article>
    </li>
  );
};

export default ProductItem;
