import { api } from './axios';
// import { AxiosError, AxiosResponse } from 'axios';
import { IProduct } from '../types/IProduct';
import { PREFIX_PRODUCT } from '../common/constants';

// export const getData = async (): Promise<IProduct[]> => {
// const productData = await api.get(`${PREFIX_PRODUCT}`);
// return productData.data;
export const getData = async (): Promise<IProduct[]> => {
  return await api.get<IProduct[]>(`${PREFIX_PRODUCT}`).then((res) => res.data);
};
