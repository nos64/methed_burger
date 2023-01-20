import { api } from './axios';
import { IProduct } from '../types/IProduct';
import { PREFIX_PRODUCT } from '../common/constants';

export const getProductCategoryData = async (category: string): Promise<IProduct[]> => {
  return await api
    .get<IProduct[]>(`${PREFIX_PRODUCT}?category=${category}`)
    .then((res) => res.data);
};

export const getProductsByIds = async (ids: string[]): Promise<IProduct[]> => {
  return await api.get<IProduct[]>(`${PREFIX_PRODUCT}?list=${ids}`).then((res) => res.data);
};
