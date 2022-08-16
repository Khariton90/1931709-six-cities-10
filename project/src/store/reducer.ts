import { SelectOptions } from './../consts';
import { CITY, CitiesList } from './../mocks/city';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, showCurrentIcon, sortOffers, loadOffers, setDataLoadedStatus } from './action';
import { CitiesListType, City, Offer } from '../types/offer';

type initialStateType = {
  city: City,
  citiesList: CitiesListType,
  offers: Offer[],
  icon: number | null,
  sortType: string,
  isDataLoaded: boolean
}

const initialState:initialStateType = {
  city: CITY,
  citiesList: CitiesList,
  offers: [],
  icon: null,
  sortType: SelectOptions.DEFAULT,
  isDataLoaded: false
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
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});


export {reducer};
