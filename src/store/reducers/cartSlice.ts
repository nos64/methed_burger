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
    addToCart(state, action: PayloadAction<ICartItem>) {
      state.cartItems.push(action.payload);
    },
    // incrementCount() {

    // },
    // decrementCount() {

    // },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
