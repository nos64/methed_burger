import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import cartSlice from './reducers/cartSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import orderSlice from './reducers/orderSlice';

const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
  order: orderSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['product', 'order'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
