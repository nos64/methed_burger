import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
  // activeProduct: IProduct | null;
  isPending: boolean;
  error: string | undefined;
  isNoData: boolean;
}

const initialState: IProductState = {
  products: [],
  // activeProduct: null,
  isPending: false,
  error: undefined,
  isNoData: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromServer.pending, (state) => {
        state.isPending = true;
        state.error = undefined;
      })
      .addCase(getDataFromServer.fulfilled, (state, action) => {
        state.isPending = false;
        state.products = action.payload;
      })
      .addCase(getDataFromServer.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.payload;
        if (action.payload === 'Server Error!') {
          state.isNoData = true;
        }
      });
  },
});

// export const { setActiveProduct } = productSlice.actions;
export default productSlice.reducer;
