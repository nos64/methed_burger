import React from 'react';
import styles from './ProductItem.module.scss';
import { IProduct } from '../../../../types/IProduct';
import { API_URL } from 'common/constants';
import { useAppDispatch } from 'hooks/redux';
import { addToCart } from 'store/reducers/cartSlice';
interface IProductProps {
  product: IProduct;
  handleProductClick: (product: IProduct) => void;
}

const ProductItem: React.FC<IProductProps> = ({ product, handleProductClick }) => {
  const dispatch = useAppDispatch();
  const addToCartClick = (product: IProduct, count = 1) => {
    dispatch(addToCart({ product, count }));
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
          onClick={() => addToCartClick(product)}
        >
          Добавить
        </button>
      </article>
    </li>
  );
};

export default ProductItem;
