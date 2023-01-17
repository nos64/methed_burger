import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from 'hooks/redux';

import OrderItem from './OrderItem';
import ModalDelivery from './ModalDelivery';

import styles from './Order.module.scss';

const Order = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((store) => store.cart.cartItems);

  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [orderCountSum, setOrderCountSum] = useState(0);
  const [orderMoneySum, setOrderMoneySum] = useState(0);

  const handleOrderClick = () => setIsOrderOpen(!isOrderOpen);

  const getTotalQuantity = () => {
    const orderSum = cartItems.reduce((acc, item) => acc + item.count, 0);
    setOrderCountSum(orderSum);
  };

  const getTotalSum = () => {
    const moneySum = cartItems.reduce((acc, item) => acc + item.product.price * item.count, 0);
    setOrderMoneySum(moneySum);
  };

  useEffect(() => {
    getTotalQuantity();
    getTotalSum();
  }, [cartItems]);

  const handleCloseModal = () => {
    setIsModalActive(false);
  };
  const handleDeliveryBtmClick = () => {
    setIsModalActive(true);
  };

  return (
    <>
      <div
        className={
          isOrderOpen
            ? `${styles.catalog__order} ${styles.order} ${styles.order_open}`
            : `${styles.catalog__order} ${styles.order}`
        }
        onClick={handleOrderClick}
      >
        <section className={styles.order__wrapper}>
          <div className={styles.order__wrapTitle}>
            <h2 className={styles.order__title}>Корзина</h2>
            <span className={styles.order__count}>{orderCountSum}</span>
          </div>

          <div className={styles.order__wrap_list} onClick={(e) => e.stopPropagation()}>
            <ul className={styles.order__list}>
              {cartItems.length
                ? cartItems.map((item) => <OrderItem key={item.product.id} {...item} />)
                : null}
            </ul>

            <div className={styles.order__total}>
              <p>Итого</p>
              <p>
                <span className={styles.order__totalAmount}>{orderMoneySum}</span>
                <span className={styles.currency}>₽</span>
              </p>
            </div>

            <button
              className={styles.order__submit}
              onClick={handleDeliveryBtmClick}
              disabled={!cartItems.length}
            >
              Оформить заказ
            </button>
            <div className={styles.order__wrapApeal}>
              <p className={styles.order__apeal}>Бесплатная доставка</p>
              <button className={styles.order__close} onClick={handleOrderClick} type="button">
                Свернуть
              </button>
            </div>
          </div>
        </section>
      </div>
      <ModalDelivery
        isModalActive={isModalActive}
        setIsModalActive={handleCloseModal}
      ></ModalDelivery>
    </>
  );
};

export default Order;
