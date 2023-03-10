import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { clearCart } from 'store/reducers/cartSlice';
import { clearOrderInformation, sendOrderToServer } from 'store/reducers/orderSlice';

import ModalWrapper from '../../../ModalWrapper';

import { IOrderDelivery, IOrderInCart, IServerResponse } from 'types/IOrderDelivery';

import styles from './ModalDelivery.module.scss';
import ModalDeliveryInfo from '../ModalDeliveryInfo';

interface IModalDeliveryProps {
  isModalActive: boolean;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDelivery: React.FC<IModalDeliveryProps> = ({ isModalActive, setIsModalActive }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((store) => store.cart.cartItems);
  const orderResponse = useAppSelector((store) => store.order.orderResponse);

  const [isDeliveryChecked, setIsDeliveryChecked] = useState(false);
  const [serverResponse, setServerResponse] = useState<IServerResponse | null>(null);

  const [informationModalActive, setInformationModalActive] = useState(false);

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
    setIsModalActive(false);
  };

  useEffect(() => {
    if (orderResponse) {
      setServerResponse(orderResponse);
      dispatch(clearOrderInformation());
      setInformationModalActive(true);
    }
  }, [orderResponse, dispatch]);

  return (
    <>
      <ModalWrapper isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
        <div className={styles.modalDelivery}>
          <div className={styles.modalDelivery__container}>
            <h2 className={styles.modalDelivery__title}>????????????????</h2>
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
                    required: '???????????????????? ?????????????? ???????? ??????',
                  })}
                  placeholder={errors?.name ? errors?.name?.message : '???????? ??????'}
                />
                <input
                  className={styles.modalDelivery__input}
                  type="tel"
                  {...register('phone', {
                    required: '???????????????????? ?????????????? ?????????? ????????????????',
                    pattern: /[0-9]/,
                  })}
                  placeholder={errors?.phone ? errors?.phone?.message : '??????????????'}
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
                  ??????????????????
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
                  ????????????????
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
                  placeholder="??????????, ??????, ????????????????"
                />
                <input
                  className={styles.modalDelivery__input + ' ' + styles.modal_delivery__input_half}
                  type="number"
                  {...register('floor', {
                    required: isDeliveryChecked,
                  })}
                  placeholder="????????"
                />
                <input
                  className={styles.modalDelivery__input + ' ' + styles.modal_delivery__input_half}
                  type="number"
                  {...register('intercom')}
                  placeholder="??????????????"
                />
              </fieldset>
            </form>
            <button className={styles.modalDelivery__submit} form="delivery" type="submit">
              ????????????????
            </button>
          </div>
        </div>
      </ModalWrapper>
      <ModalDeliveryInfo
        isModalActive={informationModalActive}
        setIsModalActive={setInformationModalActive}
        serverResponse={serverResponse}
      ></ModalDeliveryInfo>
    </>
  );
};

export default ModalDelivery;
