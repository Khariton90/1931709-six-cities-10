import { offers } from './../mocks/offers';
import { CITY, CitiesList } from './../mocks/city';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { CitiesListType, City, Offer } from '../types/offer';

type initialStateType = {
  city: City,
  citiesList: CitiesListType,
  offers: Offer[],
}

const initialState:initialStateType = {
  city: CITY,
  citiesList: CitiesList,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = state.citiesList[action.payload];
    });
});


export {reducer};
