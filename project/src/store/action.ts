import { AppRoute } from './../consts';
import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

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

export const loadOneOffer = createAction('data/loadOneOffer', (offer) => ({
  payload: offer
}));

export const loadNearby = createAction('data/loadNearby', (nearby) => ({
  payload: nearby
}));

export const loadReviews = createAction('data/loadReviews', (reviews) => ({
  payload: reviews
}));

export const setError = createAction('data/setError', (error) => ({
  payload: error
}));

export const setUserData = createAction('data/setUserData', (data) => ({
  payload: data
}));

export const changeFavoriteStatus = createAction('data/changeFavoriteStatus', (data: Offer) => ({
  payload: data
}));

export const loadFavoritesOffers = createAction('data/loadFavoritesOffers', (data: Offer[]) => ({
  payload: data
}));
