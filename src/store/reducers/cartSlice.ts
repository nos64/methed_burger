import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sendOrder } from 'api/getData';
import { AxiosError } from 'axios';
import { IOrderDelivery, IServerResponse } from 'types/IOrderDelivery';
// import { getCartDataFromIDsList } from 'api/getData';
// import { AxiosError } from 'axios';
// import { IProduct } from 'types/IProduct';
import { ICartItem } from '../../types/ICartItem';

// export const sendOrderToServer = createAsyncThunk(
//   'cart/sendOrderToServer',
//   async (data: IOrderDelivery, { rejectWithValue }) => {
//     try {
//       const sendedOrder = await sendOrder(data);
//       // console.log('sendedOrder: ', sendedOrder);
//       return sendedOrder;
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         return rejectWithValue('No products in cart');
//       }
//       throw error;
//     }
//   }
// );

interface ICartState {
  cartItems: ICartItem[];
  // orderResponse: IServerResponse | null;
  // isPending: boolean;
}

const initialState: ICartState = {
  cartItems: [],
  // orderResponse: null,
  // isPending: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // getCart(state, action: PayloadAction<ICartItem>) {
    //   if (state.cartItems.length !== 0) {
    //     state.cartItems = JSON.parse
    //   }
    // },
    addToCart(state, action: PayloadAction<ICartItem>) {
      const itemInCart = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (itemInCart) {
        itemInCart.count += action.payload.count;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    incrementCount(state, action: PayloadAction<string | undefined>) {
      const item = state.cartItems.find((item) => item.product.id === action.payload);
      item && item.count++;
    },
    decrementCount(state, action: PayloadAction<string | undefined>) {
      const item = state.cartItems.find((item) => item.product.id === action.payload);
      if (item) {
        if (item.count === 1) {
          // item.count = 1;
          // removeItem(action.payload);
          const removedItem = state.cartItems.filter((item) => item.product.id !== action.payload);
          state.cartItems = removedItem;
        }
        item.count--;
      }
    },
    clearCart(state) {
      state.cartItems.length = 0;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(sendOrderToServer.pending, (state) => {
  //       state.isPending = true;
  //       // state.error = undefined;
  //     })
  //     .addCase(sendOrderToServer.fulfilled, (state, action) => {
  //       state.isPending = false;
  //       // if (state.orderResponse) {
  //       state.orderResponse = action.payload;
  //       // }
  //     })
  //     .addCase(sendOrderToServer.rejected, (state, action) => {
  //       state.isPending = false;
  //       // state.error = action.payload;
  //       if (action.payload === 'Server Error!') {
  //       }
  //     });
  // },
});

export const { addToCart, incrementCount, decrementCount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
