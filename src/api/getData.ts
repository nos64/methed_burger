import { api } from './axios';
// import { AxiosError, AxiosResponse } from 'axios';
import { IProduct } from '../types/IProduct';
import { PREFIX_PRODUCT } from '../common/constants';
import { IOrderDelivery } from 'types/IOrderDelivery';
import axios from 'axios';

// export const getData = async (): Promise<IProduct[]> => {
//   return await api.get<IProduct[]>(`${PREFIX_PRODUCT}`).then((res) => res.data);
// };

export const getProductCategoryData = async (category: string): Promise<IProduct[]> => {
  return await api
    .get<IProduct[]>(`${PREFIX_PRODUCT}?category=${category}`)
    .then((res) => res.data);
};

export const getCartDataFromIDsList = async (list: (string | undefined)[]): Promise<IProduct[]> => {
  return await api.get<IProduct[]>(`${PREFIX_PRODUCT}?list=${list}`).then((res) => res.data);
};

export const sendOrder = async (data: IOrderDelivery): Promise<string> => {
  return await axios.post('https://reqres.in/api/users', data).then((res) => res.data);
};
