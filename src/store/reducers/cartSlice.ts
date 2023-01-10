import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../types/ICartItem';

interface ICartState {
  cartItems: ICartItem[];
}

const initialState: ICartState = {
  cartItems: [],
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
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.count += action.payload.count;
      }
      state.cartItems.push(action.payload);
    },
    incrementCount(state, action: PayloadAction<string | undefined>) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item && item.count++;
    },
    decrementCount(state, action: PayloadAction<string | undefined>) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        if (item.count === 1) {
          item.count = 1;
        }
        item.count--;
      }
    },
    removeItem(state, action: PayloadAction<string | undefined>) {
      const removeItem = state.cartItems.filter((item) => item.id !== action.payload);
      state.cartItems = removeItem;
    },
  },
});

export const { addToCart, incrementCount, decrementCount, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
