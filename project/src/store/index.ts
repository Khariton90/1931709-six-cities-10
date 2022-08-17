import { redirect } from '../middlewares/redirect';
import { createApi } from './../services/api';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const api = createApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }).concat(redirect),
});
