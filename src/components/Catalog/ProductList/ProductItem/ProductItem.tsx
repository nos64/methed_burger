import React from 'react';
import styles from './ProductItem.module.scss';
import { IProduct } from '../../../../types/IProduct';
import { API_URL } from 'common/constants';
interface IProductProps {
  item: IProduct;
  handleProductClick: (item: IProduct) => void;
}

const ProductItem: React.FC<IProductProps> = ({ item, handleProductClick }) => {
  return (
    <li className={styles.catalog__item}>
      <article className={styles.product}>
        <img
          className={styles.product__image}
          src={`${API_URL}/${item.image}`}
          alt={item.title}
          onClick={() => handleProductClick(item)}
        />
        <p className={styles.product__price}>
          {item.price}
          <span className={styles.currency}> ₽</span>
        </p>

        <h3 className={styles.ptoduct__title}>
          <button className={styles.product__detail} onClick={() => handleProductClick(item)}>
            {item.title}
          </button>
        </h3>
        <p className={styles.product__weight}>{item.weight}г</p>
        <button className={styles.product__add} type="button">
          Добавить
        </button>
      </article>
    </li>
  );
};

export default ProductItem;
