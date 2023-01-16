export interface IOrderDelivery {
  name: string;
  phone: string;
  format: string;
  address?: string;
  floor?: string;
  intercom?: string;
  order: IOrderInCart[];
}

export type IOrderInCart = {
  id: string;
  count: number;
};

export interface IServerResponse {
  createdAt: string;
  format: string;
  id: string;
  name: string;
  order: IOrderInCart[];
  phone: string;
}
