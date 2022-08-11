import { offers } from './../mocks/offers';
import { CITY } from './../mocks/city';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { City, Offer } from '../types/offer';

type initialStateType = {
  city: City,
  offers: Offer[],
  count:number
}

const initialState:initialStateType = {
  city: CITY,
  offers: offers,
  count: 1
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});


export {reducer};
