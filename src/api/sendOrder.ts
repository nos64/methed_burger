import axios from 'axios';
import { ORDER_API } from 'common/constants';
import { IOrderDelivery, IServerResponse } from 'types/IOrderDelivery';

export const sendOrder = async (data: IOrderDelivery): Promise<IServerResponse> => {
  return await axios.post(ORDER_API, data).then((res) => res.data);
};
