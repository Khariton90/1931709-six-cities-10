import { CommentForm } from './../types/comment-form';
import { handleErrorProcess } from './../services/handle-error';
import { store } from './index';
import { saveToken, dropToken } from './../services/token';
import { ApiRoute, AppRoute, AuthorizationStatus, AUTO_CLOSE_TIME_OUT } from './../consts';
import { loadOffers, setDataLoadedStatus, requireAutorization, redirectToRoute, loadOneOffer, loadNearby, loadReviews, setError, setUserData, changeFavoriteStatus, loadFavoritesOffers } from './action';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { UserDTO } from '../types/user-dto';
import { Reviews } from '../types/reviews';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), AUTO_CLOSE_TIME_OUT);
  }
);

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
    const {data} = await api.post<UserDTO>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAutorization(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch, state: State, extra: AxiosInstance }>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAutorization(AuthorizationStatus.NoAuth));
  }
);

export const fetchOneOffer = createAsyncThunk<void, string | undefined, {dispatch: AppDispatch, state: State, extra: AxiosInstance }>(
  'data/fetchOneOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${ApiRoute.Hotels}/${id}`);
      dispatch(loadOneOffer(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const fetchNearbyOffers = createAsyncThunk<void, string | undefined, {dispatch: AppDispatch, state: State, extra: AxiosInstance }>(
  'data/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`/hotels/${id}/nearby`);
    dispatch(loadNearby(data));
  }
);

export const fetchReviews = createAsyncThunk<void, string | undefined, {dispatch: AppDispatch, state: State, extra: AxiosInstance }>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`/comments/${id}`);
    dispatch(loadReviews(data));
  }
);

export const addNewCommentAction = createAsyncThunk<void, CommentForm, {dispatch: AppDispatch, state: State, extra: AxiosInstance }> (
  'data/addNewCommentAction',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<CommentForm>(`/comments/${id}`, {comment, rating});
      dispatch(loadReviews(data));
    } catch {
      handleErrorProcess('Ошибка сервера');
    }
  }
);

export const fetchFavorites = createAsyncThunk<void, Offer[] | undefined,{ dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>('/favorite');
    dispatch(loadFavoritesOffers(data));
  }
);

export const fetchStatusFavorite = createAsyncThunk<void, Offer,{ dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'data/changeStatusFavorite',
  async ({id, isFavorite}, {dispatch, extra: api}) => {
    const {data} = await api.post<Offer>(`/favorite/${id}/${Number(isFavorite)}`);
    dispatch(changeFavoriteStatus(data));
  }
);
