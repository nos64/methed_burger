import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getData } from '../../api/getData';
import { AxiosError } from 'axios';
import { IProduct } from '../../types/IProduct';
import { ICartItem } from '../../types/ICartItem';

interface IProductState {
  products: IProduct[];
  isPending: boolean;
  activeProduct: IProduct | null;
  cartItems: ICartItem[];
}

const initialState: IProductState = {
  products: [],
  isPending: false,
  activeProduct: null,
  cartItems: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      state.cartItems.push(action.payload);
    },
    setActiveProduct(state, action: PayloadAction<IProduct | null>) {
      state.activeProduct = action.payload;
    },
    // incrementCount() {

    // },
    // decrementCount() {

    // },
  },
});

export const { addToCart, setActiveProduct } = productSlice.actions;
export default productSlice.reducer;
