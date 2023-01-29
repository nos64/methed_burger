import React, { useEffect, useState } from 'react';
import { IServerResponse } from 'types/IOrderDelivery';

import ModalWrapper from '../../../ModalWrapper';

import styles from './ModalDeliveryInfo.module.scss';

interface IModalDeliveryInfoProps {
  isModalActive: boolean;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  serverResponse: IServerResponse | null;
}

const ModalDeliveryInfo: React.FC<IModalDeliveryInfoProps> = ({
  isModalActive,
  setIsModalActive,
  serverResponse,
}) => {
  const [time, setTime] = useState('');
  useEffect(() => {
    if (serverResponse) {
      const realTime =
        Date.parse(serverResponse.createdAt) -
        new Date(serverResponse.createdAt).getTimezoneOffset() * 60 * 1000;
      setTime(new Date(realTime).toISOString());
    }
  }, [serverResponse, time]);

  return (
    <ModalWrapper isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
      {serverResponse && (
        <div className={styles.modalDeliveryInfo}>
          <div className={styles.modalDeliveryInfo__container}>
            <h3 className={styles.modalDeliveryInfo__title}>Уважаемый {serverResponse.name}!</h3>
            <div className={styles.modalDeliveryInfo__wrapper}>
              <p className={styles.modalDeliveryInfo__text}>Заказ № {serverResponse.id}</p>
              <div className={styles.modalDeliveryInfo__date}>
                <span>
                  От {time.slice(8, 10)}.{time.slice(5, 7)}.{time.slice(0, 4)}
                </span>
                <span>
                  в {time.slice(11, 13)}:{time.slice(14, 16)}
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
