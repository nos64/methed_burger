import ModalWrapper from '../../../ModalWrapper';
import React from 'react';
import styles from './ModalProduct.module.scss';
import { IProduct } from 'types/IProduct';
import { API_URL } from 'common/constants';

interface IModalProductProps {
  isModalActive: boolean;
  setIsModalActive: () => void;
  activeProduct: IProduct | null;
}

const ModalProduct: React.FC<IModalProductProps> = ({
  isModalActive,
  setIsModalActive,
  activeProduct,
}) => {
  return (
    <ModalWrapper isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
      {activeProduct && (
        <div className={styles.modalProduct}>
          <div className={styles.modalProduct__container}>
            <h2 className={styles.modalProduct__title}>{activeProduct.title}</h2>

            <div className={styles.modalProduct__content}>
              <img
                className={styles.modalProduct__image}
                src={`${API_URL}/${activeProduct.image}`}
                alt={activeProduct.title}
              />

              <p className={styles.modalProduct__description}>{activeProduct.description}</p>
              <div className={styles.modalProduct__ingredients + ' ' + styles.ingredients}>
                <h3 className={styles.ingredients__title}>Состав:</h3>

                <ul className={styles.ingredients__list}>
                  {activeProduct.ingredients.map((item, index) => (
                    <li className={styles.ingredients__item} key={index}>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className={styles.ingredients__calories}>
                  {activeProduct.weight}г, {activeProduct.calories}ккал
                </p>
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
                <span className={styles.modalProduct__priceCount}>{activeProduct.price}</span>
                <span className={styles.currency}>₽</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </ModalWrapper>
  );
};

export default ModalProduct;
