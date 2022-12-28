import React from 'react';
import styles from './Order.module.scss';
import hotDog1 from '../../../assets/images/hot-dog_1.jpg';
// класс для октрывания корзины order_open

const Order = () => {
  return (
    <div className="catalog__order order">
      <section className="order__wrapper">
        <div className="order__wrap-title">
          <h2 className="order__title">Корзина</h2>
          <span className="order__count">4</span>
        </div>

        <div className="order__wrap_list">
          <ul className="order__list">
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
          </ul>

          <div className={styles.order__total}>
            <p>Итого</p>
            <p>
              <span className={styles.order__totalAmount}>1279</span>
              <span className={styles.currency}>₽</span>
            </p>
          </div>

          <button className={styles.order__submit}>Оформить заказ</button>
          <div className={styles.order__wrapApeal}>
            <p className={styles.order__apeal}>Бесплатная доставка</p>
            <button className={styles.order__close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
