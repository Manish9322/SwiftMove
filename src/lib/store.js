import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import counterReducer from './slices/counterSlice';
import contactReducer from './slices/contactSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      counter: counterReducer,
      contact: contactReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};
