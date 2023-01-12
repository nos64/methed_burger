import { IProduct } from './IProduct';

// export interface ICartItem {
//   id: string | undefined;
//   count: number;
// }

export interface ICartItem {
  product: IProduct;
  count: number;
}
