import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartDataFromIDsList } from 'api/getData';
import { AxiosError } from 'axios';
import { IProduct } from 'types/IProduct';
import { ICartItem } from '../../types/ICartItem';

export const getCartData = createAsyncThunk<
  IProduct[],
  (string | undefined)[],
  { rejectValue: string }
>('cart/getCartDataFromIDsList', async (list: (string | undefined)[], { rejectWithValue }) => {
  try {
    const response = await getCartDataFromIDsList(list);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue('No products in cart');
    }
    throw error;
  }
});

interface ICartState {
  cartItems: ICartItem[];
  cartProducts: IProduct[];
}

const initialState: ICartState = {
  cartItems: [],
  cartProducts: [],
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
          removeItem(action.payload);
        }
        item.count--;
      }
    },
    removeItem(state, action: PayloadAction<string | undefined>) {
      const removeItem = state.cartItems.filter((item) => item.product.id !== action.payload);
      state.cartItems = removeItem;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartData.pending, (state) => {
        // state.isPending = true;
        // state.error = undefined;
      })
      .addCase(getCartData.fulfilled, (state, action) => {
        // state.isPending = false;
        state.cartProducts = action.payload;
      })
      .addCase(getCartData.rejected, (state, action) => {
        // state.isPending = false;
        // state.error = action.payload;
        if (action.payload === 'Server Error!') {
        }
      });
  },
});

export const { addToCart, incrementCount, decrementCount, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
