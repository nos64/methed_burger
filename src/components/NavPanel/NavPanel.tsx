import Container from '../Container';
import React from 'react';
import styles from './NavPanel.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Container>
        <div className={styles.navigation__container}>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <button
                className={`${styles.navigation__button} ${styles.navigation__button_burger} ${styles.navigation__button_active}`}
              >
                Бургеры
              </button>
            </li>
            <li className={styles.navigation__item}>
              <button className={`${styles.navigation__button} ${styles.navigation__button_snack}`}>
                Закуски
              </button>
            </li>
            <li className={styles.navigation__item}>
              <button
                className={`${styles.navigation__button} ${styles.navigation__button_hotDog}`}
              >
                Хот-доги
              </button>
            </li>
            <li className={styles.navigation__item}>
              <button className={`${styles.navigation__button} ${styles.navigation__button_combo}`}>
                Комбо
              </button>
            </li>
            <li className={styles.navigation__item}>
              <button
                className={`${styles.navigation__button} ${styles.navigation__button_shawarma}`}
              >
                Шаурма
              </button>
            </li>
            <li className={styles.navigation__item}>
              <button className={`${styles.navigation__button} ${styles.navigation__button_pizza}`}>
                Пицца
              </button>
            </li>
            <li className={styles.navigation__item}>
              <button className={`${styles.navigation__button} ${styles.navigation__button_wok}`}>
                Вок
              </button>
            </li>
            <li className={styles.navigation__item}>
              <button
                className={`${styles.navigation__button} ${styles.navigation__button_desert}`}
              >
                Десерты
              </button>
            </li>
            <li className={styles.navigation__item}>
              <button className={`${styles.navigation__button} ${styles.navigation__button_sauce}`}>
                Соусы
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
