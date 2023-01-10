import { useAppSelector } from 'hooks/redux';
import React, { useState } from 'react';
import ModalDelivery from './ModalDelivery';
import styles from './Order.module.scss';
import OrderItem from './OrderItem';

const Order = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const handleOrderClick = () => setIsOrderOpen(!isOrderOpen);
  const [isModalActive, setIsModalActive] = useState(false);
  const cartItems = useAppSelector((store) => store.cart.cartItems);

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
            <span className={styles.order__count}>0</span>
          </div>

          <div className={styles.order__wrap_list} onClick={(e) => e.stopPropagation()}>
            <ul className={styles.order__list}>
              <OrderItem />
            </ul>

            <div className={styles.order__total}>
              <p>Итого</p>
              <p>
                <span className={styles.order__totalAmount}>1279</span>
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
              <button className={styles.order__close}>Свернуть</button>
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
