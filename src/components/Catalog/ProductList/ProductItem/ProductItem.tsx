import React from 'react';
import styles from './ProductItem.module.scss';
import burger from '../../../../assets/images/photo-5.jpg';

const ProductItem = () => {
  return (
    <li className={styles.catalog__item}>
      <article className={styles.product}>
        <img className={styles.product__image} src={burger} alt="Мясная бомба" />
        <p className={styles.product__price}>
          689
          <span className={styles.currency}>₽</span>
        </p>

        <h3 className={styles.ptoduct__title}>
          <button className={styles.product__detail}>Мясная бомба</button>
        </h3>
        <p className={styles.product__weight}>520г</p>
        <button className={styles.product__add} type="button">
          Добавить
        </button>
      </article>
    </li>
  );
};

export default ProductItem;
