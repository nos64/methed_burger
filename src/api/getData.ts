import { api } from './axios';
import { AxiosError } from 'axios';
import { IProduct } from '../types/IProduct';
import { PREFIX_PRODUCT } from '../common/constants';

// export const getData = async (): Promise<IProduct[]> => {
// const productData = await api.get(`${PREFIX_PRODUCT}`);
// return productData.data;
export const getData = async () => {
  return await api.get<AxiosError, IProduct[]>(`${PREFIX_PRODUCT}`);
};
