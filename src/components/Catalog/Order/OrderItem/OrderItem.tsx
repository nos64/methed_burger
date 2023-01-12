import React from 'react';
import styles from './OrderItem.module.scss';
import { IProduct } from 'types/IProduct';
import { API_URL } from 'common/constants';

const OrderItem = (props: IProduct) => {
  return (
    <li className={styles.order__item}>
      <img className={styles.order__image} src={`${API_URL}/${props.image}`} alt={props.title} />

      <div className={styles.order__product}>
        <h3 className={styles.order__productTitle}>{props.title}</h3>
        <p className={styles.order__productWeight}>{props.weight}</p>
        <p className={styles.order__productPrice}>
          {props.price}
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
