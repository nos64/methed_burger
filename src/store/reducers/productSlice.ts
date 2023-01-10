import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductCategoryData } from '../../api/getData';
import { AxiosError } from 'axios';
import { IProduct } from '../../types/IProduct';
import { INavItem } from 'types/INavItem';
import { navPanelData } from 'common/navPanelData';

// export const getDataFromServer = createAsyncThunk<IProduct[], void, { rejectValue: string }>(
//   'product/getDataFromServer',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await getData();
//       return response;
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         return rejectWithValue('Server Error!');
//       }
//       throw error;
//     }
//   }
// );

export const getProductCategory = createAsyncThunk<IProduct[], string, { rejectValue: string }>(
  'product/getProductCategory',
  async (category: string, { rejectWithValue }) => {
    try {
      const response = await getProductCategoryData(category);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue('No products');
      }
      throw error;
    }
  }
);

interface IProductState {
  products: IProduct[];
  productsCat: IProduct[];
  activeCategory: INavItem;
  isPending: boolean;
  error: string | undefined;
  // isNoData: boolean;
}

const initialState: IProductState = {
  products: [],
  productsCat: [],
  activeCategory: navPanelData[0],
  isPending: false,
  error: undefined,
  // isNoData: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<INavItem>) {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(getDataFromServer.pending, (state) => {
    //     state.isPending = true;
    //     state.error = undefined;
    //   })
    //   .addCase(getDataFromServer.fulfilled, (state, action) => {
    //     state.isPending = false;
    //     state.products = action.payload;
    //   })
    //   .addCase(getDataFromServer.rejected, (state, action) => {
    //     state.isPending = false;
    //     state.error = action.payload;
    //     if (action.payload === 'Server Error!') {
    //     }
    //   });
    builder
      .addCase(getProductCategory.pending, (state) => {
        state.isPending = true;
        state.error = undefined;
      })
      .addCase(getProductCategory.fulfilled, (state, action) => {
        state.isPending = false;
        state.productsCat = action.payload;
      })
      .addCase(getProductCategory.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.payload;
        if (action.payload === 'Server Error!') {
          // state.isNoData = true;
        }
      });
  },
});

export const { setActiveCategory } = productSlice.actions;
export default productSlice.reducer;
