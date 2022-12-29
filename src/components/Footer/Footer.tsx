import Container from '../Container';
import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container />
      <div className={styles.footer__content}>
        <svg
          className={styles.footer__logo}
          viewBox="0 0 199 44"
          role="img"
          aria-label="Логотип YourMeal"
        >
          <use href="#_sprite_logo" />
        </svg>

        <address className={styles.footer__address}>
          <div className={styles.footer__contact}>
            <h2 className={styles.footer__title}>Номер для заказа</h2>

            <a className={styles.footer__linkPhone} href=" tel: +79308333811">
              <svg
                className={styles.footer__linkPic}
                viewBox="0 0 24 24"
                role="img"
                aria-label="Изображение телефона"
              >
                <use href="#_sprite_tel" />
              </svg>

              <span>+7(930)833-38-11</span>
            </a>
          </div>

          <div className={styles.footer__contact}>
            <h2 className="footer__title footer__title_sn">Мы в соцсетях</h2>

            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="" className="footer__link-sn" aria-label="группа в ВК">
                  <svg
                    className="footer__link-icon"
                    viewBox="0 0 36 36"
                    role="img"
                    aria-label="группа в ВК"
                  >
                    <use href="#_sprite_vkLink" />
                  </svg>
                </a>
              </li>

              <li className="footer__list-item">
                <a href="" className="footer__link-sn" aria-label="канал в Телеграм">
                  <svg
                    className="footer__link-icon"
                    viewBox="0 0 36 36"
                    role="img"
                    aria-label="канал в Телеграм"
                  >
                    <use href="#_sprite_telegramLink" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </address>

        <div className="footer__development">
          <p>© YouMeal, 2022</p>
          <p>
            Design:{' '}
            <a className="footer__development-link" href="#">
              Anastasia Ilina
            </a>
          </p>
          <p>
            Developer:{' '}
            <a className="footer__development-link" href="mailto:manosov1984@gmail.com">
              Mikhail Nosov
            </a>
          </p>
        </div>
      </div>
      <Container />
    </footer>
  );
};

export default Footer;
