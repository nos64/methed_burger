import React from 'react';
import { IServerResponse } from 'types/IOrderDelivery';

import ModalWrapper from '../../../ModalWrapper';

import styles from './ModalDeliveryInfo.module.scss';

interface IModalDeliveryInfoProps {
  isModalActive: boolean;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  serverResponse: IServerResponse | null;
  setServerResponse: React.Dispatch<React.SetStateAction<IServerResponse | null>>;
}

const ModalDeliveryInfo: React.FC<IModalDeliveryInfoProps> = ({
  isModalActive,
  setIsModalActive,
  serverResponse,
  setServerResponse,
}) => {
  return (
    <ModalWrapper isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
      {serverResponse && (
        <div className={styles.modalDeliveryInfo}>
          <div className={styles.modalDeliveryInfo__container}>
            <h3 className={styles.modalDeliveryInfo__title}>Уважаемый {serverResponse.name}!</h3>
            <div className={styles.modalDeliveryInfo__wrapper}>
              <p>Заказ № {serverResponse.id}</p>
              <div>
                <span>
                  От {serverResponse.createdAt.slice(8, 10)}.{serverResponse.createdAt.slice(5, 7)}.
                  {serverResponse.createdAt.slice(0, 4)}
                </span>
                <span>
                  в {serverResponse.createdAt.slice(11, 13)}:
                  {serverResponse.createdAt.slice(14, 16)}
                </span>
              </div>

              <p>Успешно принят в работу</p>
              <p>В ближайшее время с Вами свяжется наш менеджер</p>
              <p>Благодарим за заказ!</p>
              <p>Будем рады видеть Вас снова</p>
            </div>
          </div>
        </div>
      )}
    </ModalWrapper>
  );
};

export default ModalDeliveryInfo;
