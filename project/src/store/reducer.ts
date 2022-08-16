import { SelectOptions } from './../consts';
import { offers } from './../mocks/offers';
import { CITY, CitiesList } from './../mocks/city';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, showCurrentIcon, sortOffers } from './action';
import { CitiesListType, City, Offer } from '../types/offer';

type initialStateType = {
  city: City,
  citiesList: CitiesListType,
  offers: Offer[],
  icon: number | null,
  sortType: string
}

const initialState:initialStateType = {
  city: CITY,
  citiesList: CitiesList,
  offers: offers,
  icon: null,
  sortType: SelectOptions.DEFAULT
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = state.citiesList[action.payload];
    })
    .addCase(showCurrentIcon, (state, action) => {
      state.icon = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortType = action.payload;
    });
});


export {reducer};
