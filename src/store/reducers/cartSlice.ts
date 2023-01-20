import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartItem } from '../../types/ICartItem';

export interface ICartState {
  cartItems: ICartItem[];
}

const initialState: ICartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.count += action.payload.count;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    incrementCount(state, action: PayloadAction<string | undefined>) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item && item.count++;
    },
    decrementCount(state, action: PayloadAction<string | undefined>) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        if (item.count === 1) {
          const removedItem = state.cartItems.filter((item) => item.id !== action.payload);
          state.cartItems = removedItem;
        }
        item.count--;
      }
    },
    clearCart(state) {
      state.cartItems.length = 0;
    },
  },
});

export const { addToCart, incrementCount, decrementCount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
