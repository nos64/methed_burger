import Container from '../Container';
import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__container}>
          <svg
            className={styles.header__logo}
            viewBox="0 0 199 44"
            role="img"
            aria-label="Логотип YourMeal"
          >
            <use href="#_sprite_logo" />
          </svg>
          <div className={styles.header__titleContainer}>
            <h1 className={styles.header__title}>
              <span className={styles.header__titleText}>Только самые</span>
              <span className={`${styles.header__titleText} ${styles.header__titleText_red}`}>
                сочные бургеры!
              </span>
            </h1>
            <p className={styles.header__appeal}>Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
