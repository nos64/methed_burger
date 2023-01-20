import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductsByIds } from 'api/getData';
import { AxiosError } from 'axios';
import { IProduct } from 'types/IProduct';
import { IRenderedProducts } from 'types/IRenderedProducts';
import { ICartState } from './cartSlice';

export const getProductsByIDList = createAsyncThunk<
  IRenderedProducts[],
  undefined,
  { rejectValue: string; state: { cart: ICartState } }
>('product/getProductsByIDList', async (_, { rejectWithValue, getState }) => {
  try {
    const cartIdsArray = getState().cart.cartItems.map((item) => item.id);
    const response = cartIdsArray.length ? await getProductsByIds(cartIdsArray) : [];

    const products: IRenderedProducts[] = [];
    response.map((item: IProduct) =>
      getState().cart.cartItems.find((elem) => {
        if (item.id === elem.id) {
          products.push({ product: item, count: elem.count });
        }
      })
    );
    return products;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue('No products');
    }
    throw error;
  }
});

interface IRenderedProductsState {
  renderedProducts: IRenderedProducts[];
  isPending: boolean;
  error: string | undefined;
}

const initialState: IRenderedProductsState = {
  renderedProducts: [],
  isPending: false,
  error: undefined,
};

const renderedCart = createSlice({
  name: 'renderedCart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsByIDList.pending, (state) => {
        state.isPending = true;
        state.error = undefined;
      })
      .addCase(getProductsByIDList.fulfilled, (state, action) => {
        state.isPending = false;
        state.renderedProducts = action.payload;
      })
      .addCase(getProductsByIDList.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.payload;
        if (action.payload === 'Server Error!') {
        }
      });
  },
});

export default renderedCart.reducer;
