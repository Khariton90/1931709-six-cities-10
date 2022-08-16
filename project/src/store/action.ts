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
