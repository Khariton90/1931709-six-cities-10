import { AppRoute } from './../consts';
import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('offer/changeCity', (value) => ({
  payload: value
}));

export const showCurrentIcon = createAction('map/showCurrentIcon', (icon) => ({
  payload: icon
}));

export const sortOffers = createAction('offer/sortOffers', (option) => ({
  payload: option
}));

export const loadOffers = createAction('data/loadOffers', (offers) => ({
  payload: offers
}));

export const setDataLoadedStatus = createAction('offer/setDataLoadedStatus', (status) => ({
  payload: status
}));

export const requireAutorization = createAction('user/requireAutorization', (status) => ({
  payload: status
}));

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
