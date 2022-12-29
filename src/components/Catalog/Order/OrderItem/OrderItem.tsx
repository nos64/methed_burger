import React from 'react';
import styles from './OrderItem.module.scss';
import hotDog1 from '../../../../assets/images/hot-dog_1.jpg';

const OrderItem = () => {
  return (
    <li className={styles.order__item}>
      <img className={styles.order__image} src={hotDog1} alt="Жгучий хот-дог" />

      <div className={styles.order__product}>
        <h3 className={styles.order__productTitle}>Жгучий хот-дог</h3>
        <p className={styles.order__productWeight}>245г</p>
        <p className={styles.order__productPrice}>
          239
          <span className={styles.currency}>₽</span>
        </p>
      </div>

      <div className={`${styles.order__productCount} ${styles.count}`}>
        <button className={styles.count__minus}>-</button>
        <p className={styles.count__amount}>1</p>
        <button className={styles.count__plus}>+</button>
      </div>
    </li>
  );
};

export default OrderItem;
