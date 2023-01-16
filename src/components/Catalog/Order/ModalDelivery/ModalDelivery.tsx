import ModalWrapper from '../../../ModalWrapper';
import React, { useEffect, useState } from 'react';
import styles from './ModalDelivery.module.scss';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { IOrderDelivery, IOrderInCart, IServerResponse } from 'types/IOrderDelivery';
import { clearCart } from 'store/reducers/cartSlice';
import { sendOrderToServer } from 'store/reducers/orderSlice';

interface IModalDeliveryProps {
  isModalActive: boolean;
  setIsModalActive: () => void;
}

const ModalDelivery: React.FC<IModalDeliveryProps> = ({ isModalActive, setIsModalActive }) => {
  const dispatch = useAppDispatch();
  const [isDeliveryChecked, setIsDeliveryChecked] = useState(false);
  const cartItems = useAppSelector((store) => store.cart.cartItems);
  const orderResponse = useAppSelector((store) => store.order.orderResponse);
  const [serverResponse, setServerResponse] = useState<IServerResponse | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IOrderDelivery>({ mode: 'onBlur' });

  useEffect(() => {
    const sendedOrder: IOrderInCart[] = [];
    cartItems.map((item) => sendedOrder.push({ id: item.product.id, count: item.count }));
    setValue('order', sendedOrder);
  }, [setValue, cartItems]);

  const onSubmit = (data: IOrderDelivery) => {
    if (!isDeliveryChecked) {
      delete data.address;
      delete data.floor;
      delete data.intercom;
    }
    dispatch(sendOrderToServer(data));
    reset();
    dispatch(clearCart());
  };

  useEffect(() => {
    if (orderResponse) {
      setServerResponse(orderResponse);
      console.log('ServerResponse: ', serverResponse);
    }
  }, [orderResponse]);

  return (
    <ModalWrapper isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
      <div className={styles.modalDelivery}>
        <div className={styles.modalDelivery__container}>
          <h2 className={styles.modalDelivery__title}>Доставка</h2>
          <form
            className={styles.modalDelivery__form}
            action=""
            id="delivery"
            onSubmit={handleSubmit(onSubmit)}
          >
            <fieldset className={styles.modalDelivery__fieldset}>
              <input
                className={styles.modalDelivery__input}
                type="text"
                {...register('name', {
                  required: 'Пожалуйста введите ваше Имя',
                })}
                placeholder={errors?.name ? errors?.name?.message : 'Ваше имя'}
              />
              <input
                className={styles.modalDelivery__input}
                type="tel"
                {...register('phone', {
                  required: 'Пожалуйста введите номер Телефона',
                  pattern: /[0-9]/,
                })}
                placeholder={errors?.phone ? errors?.phone?.message : 'Телефон'}
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
                  value="pickup"
                  {...register('format')}
                  defaultChecked
                  onChange={() => setIsDeliveryChecked(false)}
                />
                Самовывоз
              </label>
              <label className={styles.modalDelivery__label}>
                <input
                  className={styles.modalDelivery__radio}
                  type="radio"
                  value="delivery"
                  {...register('format')}
                  checked={isDeliveryChecked}
                  onChange={() => setIsDeliveryChecked(true)}
                />
                Доставка
              </label>
            </fieldset>

            <fieldset
              className={
                !isDeliveryChecked
                  ? styles.modalDelivery__fieldset + ' ' + styles.modalDelivery__fieldset_hide
                  : styles.modalDelivery__fieldset
              }
              name="address-info"
            >
              <input
                className={styles.modalDelivery__input}
                type="address"
                {...register('address', {
                  required: isDeliveryChecked,
                })}
                placeholder="Улица, дом, квартира"
              />
              <input
                className={styles.modalDelivery__input + ' ' + styles.modal_delivery__input_half}
                type="number"
                {...register('floor', {
                  required: isDeliveryChecked,
                })}
                placeholder="Этаж"
              />
              <input
                className={styles.modalDelivery__input + ' ' + styles.modal_delivery__input_half}
                type="number"
                {...register('intercom')}
                placeholder="Домофон"
              />
            </fieldset>
          </form>
          <button
            className={styles.modalDelivery__submit}
            form="delivery"
            type="submit"
            // disabled={!isValid}
          >
            Оформить
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalDelivery;
