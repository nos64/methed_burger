import ModalWrapper from '../../../ModalWrapper';
import React from 'react';
import styles from './ModalDelivery.module.scss';

interface IModalDeliveryProps {
  isModalActive: boolean;
  setIsModalActive: () => void;
}

const ModalDelivery: React.FC<IModalDeliveryProps> = ({ isModalActive, setIsModalActive }) => {
  return (
    <ModalWrapper isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
      <div className={styles.modalDelivery}>
        <div className={styles.modalDelivery__container}>
          <h2 className={styles.modalDelivery__title}>Доставка</h2>
          <form className={styles.modalDelivery__form} action="" id="delivery">
            <fieldset className={styles.modalDelivery__fieldset}>
              <input
                className={styles.modalDelivery__input}
                type="text"
                name="name"
                required
                placeholder="Ваше имя"
              />
              <input
                className={styles.modalDelivery__input}
                type="tel"
                name="phone"
                required
                placeholder="Телефон"
              />
            </fieldset>

            <fieldset
              className={
                styles.modalDelivery__fieldset + ' ' + styles.modalDelivery__fieldset_radio
              }
            >
              <label className={styles.modalDelivery__label}>
                <input
                  className={styles.modalDelivery__radio}
                  type="radio"
                  name="format"
                  value="pickup"
                  checked
                />
                Самовывоз
              </label>
              <label className={styles.modalDelivery__label}>
                <input
                  className={styles.modalDelivery__radio}
                  type="radio"
                  name="format"
                  value="delivery"
                />
                Доставка
              </label>
            </fieldset>

            <fieldset
              className={styles.modalDelivery__fieldset + ' ' + styles.modalDelivery__fieldset_hide}
              name="address-info"
            >
              <input
                className={styles.modalDelivery__input}
                type="address"
                name="address"
                placeholder="Улица, дом, квартира"
              />
              <input
                className={styles.modalDelivery__input + ' ' + styles.modal_delivery__input_half}
                type="number"
                name="floor"
                placeholder="Этаж"
              />
              <input
                className={styles.modalDelivery__input + ' ' + styles.modal_delivery__input_half}
                type="number"
                name="intercom"
                placeholder="Домофон"
              />
            </fieldset>
          </form>
          <button className={styles.modalDelivery__submit} form="delivery">
            Оформить
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalDelivery;
