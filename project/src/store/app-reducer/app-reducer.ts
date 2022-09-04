import { CitiesList, CITY, SelectOptions } from '../../consts';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, showCurrentIcon, sortOffers, loadOneOffer, } from '../action';
import { AppState } from '../../types/state';

const initialState: AppState = {
  city: CITY,
  citiesList: CitiesList,
  icon: null,
  sortType: SelectOptions.DEFAULT,
  selectedOffer: null,
};

const appReducer = createReducer(initialState, (builder) => {
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

    .addCase(loadOneOffer, (state, action) => {
      state.selectedOffer = action.payload;
    });
});

export {appReducer};
