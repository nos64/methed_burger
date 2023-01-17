import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sendOrder } from 'api/sendOrder';
import { AxiosError } from 'axios';
import { IOrderDelivery, IServerResponse } from 'types/IOrderDelivery';

export const sendOrderToServer = createAsyncThunk<
  IServerResponse,
  IOrderDelivery,
  { rejectValue: string }
>('cart/sendOrderToServer', async (data: IOrderDelivery, { rejectWithValue }) => {
  try {
    const sendedOrder = await sendOrder(data);
    return sendedOrder;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue('No products in cart');
    }
    throw error;
  }
});

interface ICartState {
  orderResponse: IServerResponse | null;
  isPending: boolean;
  error: string | undefined;
}

const initialState: ICartState = {
  orderResponse: null,
  isPending: false,
  error: undefined,
};

const cartSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOrderToServer.pending, (state) => {
        state.isPending = true;
        state.error = undefined;
      })
      .addCase(sendOrderToServer.fulfilled, (state, action) => {
        state.isPending = false;
        state.orderResponse = action.payload;
      })
      .addCase(sendOrderToServer.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.payload;
        if (action.payload === 'Server Error!') {
        }
      });
  },
});

export default cartSlice.reducer;
