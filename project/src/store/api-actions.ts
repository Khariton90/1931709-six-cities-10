import { saveToken, dropToken } from './../services/token';
import { ApiRoute, AppRoute, AuthorizationStatus } from './../consts';
import { loadOffers, setDataLoadedStatus, requireAutorization, redirectToRoute } from './action';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

export const fetchOfferAction = createAsyncThunk<void, undefined,{ dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(ApiRoute.Hotels);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'data/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requireAutorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAutorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {dispatch: AppDispatch,state: State,extra: AxiosInstance}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAutorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {dispath: AppDispatch, state: State, extra: AxiosInstance }>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAutorization(AuthorizationStatus.NoAuth));
  }
);
