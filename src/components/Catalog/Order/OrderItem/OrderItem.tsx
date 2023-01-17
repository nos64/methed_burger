import React from 'react';

import { API_URL } from 'common/constants';
import { ICartItem } from 'types/ICartItem';
import { useAppDispatch } from 'hooks/redux';
import { decrementCount, incrementCount } from 'store/reducers/cartSlice';

import styles from './OrderItem.module.scss';

const OrderItem = (props: ICartItem) => {
  const dispatch = useAppDispatch();

  const increment = (id: string) => {
    dispatch(incrementCount(id));
  };

  const decrement = (id: string) => {
    dispatch(decrementCount(id));
  };

  return (
    <li className={styles.order__item}>
      <img
        className={styles.order__image}
        src={`${API_URL}/${props.product.image}`}
        alt={props.product.title}
      />

      <div className={styles.order__product}>
        <h3 className={styles.order__productTitle}>{props.product.title}</h3>
        <p className={styles.order__productWeight}>{props.product.weight}</p>
        <p className={styles.order__productPrice}>
          {props.product.price}
          <span className={styles.currency}>₽</span>
        </p>
      </div>

      <div className={`${styles.order__productCount} ${styles.count}`}>
        <button className={styles.count__minus} onClick={() => decrement(props.product.id)}>
          -
        </button>
        <p className={styles.count__amount}>{props.count}</p>
        <button className={styles.count__plus} onClick={() => increment(props.product.id)}>
          +
        </button>
      </div>
    </li>
  );
};

export default OrderItem;
