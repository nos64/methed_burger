import Container from '../Container';
import React from 'react';
import styles from './Footer.module.scss';
import SVGPics from '../../assets/images/_sprite.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__content}>
          <svg
            className={styles.footer__logo}
            viewBox="0 0 199 44"
            role="img"
            aria-label="Логотип YourMeal"
          >
            <use href={`${SVGPics}#logo`} />
          </svg>

          <address className={styles.footer__address}>
            <div className={styles.footer__contact}>
              <h2 className={styles.footer__title}>Номер для заказа</h2>

              <a className={styles.footer__linkPhone} href="tel: +79308333811">
                <svg
                  className={styles.footer__linkPic}
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Изображение телефона"
                >
                  <use href={`${SVGPics}#tel`} />
                </svg>

                <span>+7(930)833-38-11</span>
              </a>
            </div>

            <div className={styles.footer__contact}>
              <h2 className={styles.footer__title + ' ' + styles.footer__title_sn}>
                Мы в соцсетях
              </h2>

              <ul className={styles.footer__list}>
                <li className={styles.footer__listItem}>
                  <a href="" className={styles.footer__linkSn} aria-label="группа в ВК">
                    <svg
                      className={styles.footer__linkIcon}
                      viewBox="0 0 36 36"
                      role="img"
                      aria-label="группа в ВК"
                    >
                      <use href={`${SVGPics}#vkLink`} />
                    </svg>
                  </a>
                </li>

                <li className={styles.footer__listItem}>
                  <a href="" className={styles.footer__linkSn} aria-label="канал в Телеграм">
                    <svg
                      className={styles.footer__linkIcon}
                      viewBox="0 0 36 36"
                      role="img"
                      aria-label="канал в Телеграм"
                    >
                      <use href={`${SVGPics}#telegramLink`} />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </address>

          <div className={styles.footer__development}>
            <p>© YouMeal, 2022</p>
            <p>
              Design:{' '}
              <a className={styles.footer__developmentLink} href="#">
                Anastasia Ilina
              </a>
            </p>
            <p>
              Developer:{' '}
              <a className={styles.footer__developmentLink} href="mailto:manosov1984@gmail.com">
                Mikhail Nosov
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
