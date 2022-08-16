import { loadOffers, setDataLoadedStatus } from './action';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const fetchOfferAction = createAsyncThunk<void, undefined,{ dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'data/loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>('/hotels');
    dispatch(setDataLoadedStatus(true));
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
  }
);
