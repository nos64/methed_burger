import ModalWrapper from '../../../ModalWrapper';
import React from 'react';
import styles from './ModalProduct.module.scss';
import pic from '../../.././../assets/images/burger_1.jpg';

interface IModalProductProps {
  isModalActive: boolean;
  setIsModalActive: () => void;
}

const ModalProduct: React.FC<IModalProductProps> = ({ isModalActive, setIsModalActive }) => {
  return (
    <ModalWrapper isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
      <div className={styles.modalProduct}>
        <div className={styles.modalProduct__container}>
          <h2 className={styles.modalProduct__title}>Мясная бомба</h2>

          <div className={styles.modalProduct__content}>
            <img className={styles.modalProduct__image} src={pic} alt="Мясная бомба" />

            <p className={styles.modalProduct__description}>
              Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит
              вас своей сочностью, а хрустящие листья салата добавят свежести.
            </p>
            <div className={styles.modalProduct__ingredients + ' ' + styles.ingredients}>
              <h3 className={styles.ingredients__title}>Состав:</h3>

              <ul className={styles.ingredients__list}>
                <li className={styles.ingredients__item}>Пшеничная булочка</li>
                <li className={styles.ingredients__item}>Котлета из говядины</li>
                <li className={styles.ingredients__item}>Красный лук</li>
                <li className={styles.ingredients__item}>Листья салата</li>
                <li className={styles.ingredients__item}>Соус сорчичный</li>
              </ul>

              <p className={styles.ingredients__calories}>520г, ккал 430</p>
            </div>
          </div>
          <div className={styles.modalProduct__footer}>
            <div className={styles.modalProduct__add}>
              <button className={styles.modalProduct__btn}>Добавить</button>

              <div className={styles.modalProduct__count + ' ' + styles.count}>
                <button className={styles.count__minus}>-</button>
                <p className={styles.count__amount}>1</p>
                <button className={styles.count__plus}>+</button>
              </div>
            </div>

            <p className={styles.modalProduct__price}>
              <span className={styles.modalProduct__priceCount}>550</span>
              <span className={styles.currency}>₽</span>
            </p>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalProduct;
