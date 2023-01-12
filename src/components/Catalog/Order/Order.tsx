import { useAppSelector, useAppDispatch } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { getCartData } from 'store/reducers/cartSlice';
import ModalDelivery from './ModalDelivery';
import styles from './Order.module.scss';
import OrderItem from './OrderItem';

const Order = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const handleOrderClick = () => setIsOrderOpen(!isOrderOpen);
  const [isModalActive, setIsModalActive] = useState(false);
  const cartItems = useAppSelector((store) => store.cart.cartItems);
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((store) => store.cart.cartProducts);
  const [orderCount, setOrderCount] = useState(0);
  useEffect(() => {
    if (cartItems.length) {
      const cartListIds = cartItems.map((item) => item.product.id);
      dispatch(getCartData(cartListIds));
      const orderSum = cartItems.reduce((acc, item) => acc + item.count, 0);
      setOrderCount(orderSum);
    }
  }, [cartItems, dispatch]);

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
            <span className={styles.order__count}>{orderCount}</span>
          </div>

          <div className={styles.order__wrap_list} onClick={(e) => e.stopPropagation()}>
            <ul className={styles.order__list}>
              {cartProducts.length
                ? cartProducts.map((item) => <OrderItem key={item.id} {...item} />)
                : null}
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
              disabled={!!cartItems.length}
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
