import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getData } from '../../api/getData';
import { AxiosError } from 'axios';
import { IProduct } from '../../types/IProduct';

export const getDataFromServer = createAsyncThunk<IProduct[], void, { rejectValue: string }>(
  'product/getDataFromServer',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData();
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue('Server Error!');
      }
      throw error;
    }
  }
);

interface IProductState {
  products: IProduct[];
  activeProduct: IProduct | null;
  isLoading: boolean;
  error: string | null;
  isNoData: boolean;
}

const initialState: IProductState = {
  products: [],
  activeProduct: null,
  isLoading: false,
  error: null,
  isNoData: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // addToCart(state, action: PayloadAction<ICartItem>) {
    //   state.cartItems.push(action.payload);
    // },
    setActiveProduct(state, action: PayloadAction<IProduct | null>) {
      state.activeProduct = action.payload;
    },
    // incrementCount() {

    // },
    // decrementCount() {

    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromServer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDataFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getDataFromServer.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload === 'Server Error!') {
          state.isNoData = true;
        }
      });
  },
});

export const { setActiveProduct } = productSlice.actions;
export default productSlice.reducer;
