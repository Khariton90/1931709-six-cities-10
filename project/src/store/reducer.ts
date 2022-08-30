import { UserDTO } from '../types/user-dto';
import { SelectOptions, AuthorizationStatus } from './../consts';
import { CITY, CitiesList } from './../mocks/city';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, showCurrentIcon, sortOffers, loadOffers, setDataLoadedStatus, requireAutorization, loadOneOffer, loadNearby, loadReviews, setError, setUserData, changeFavoriteStatus, loadFavoritesOffers } from './action';
import { CitiesListType, City, Offer } from '../types/offer';
import { Reviews } from '../types/reviews';

type initialStateType = {
  city: City,
  citiesList: CitiesListType,
  offers: Offer[],
  icon: number | null,
  sortType: string,
  isDataLoaded: boolean,
  autorizationStatus: AuthorizationStatus,
  selectedOffer: Offer | null,
  nearby: Offer[]
  reviews: Reviews[],
  error: string | null,
  userData: UserDTO | null,
  favorites: Offer[]
}

const initialState:initialStateType = {
  city: CITY,
  citiesList: CitiesList,
  offers: [],
  icon: null,
  sortType: SelectOptions.DEFAULT,
  isDataLoaded: false,
  autorizationStatus: AuthorizationStatus.Unknown,
  selectedOffer: null,
  nearby: [],
  reviews: [],
  error: null,
  userData: null,
  favorites: []
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
    })
    .addCase(requireAutorization, (state, action) => {
      state.autorizationStatus = action.payload;
    })
    .addCase(loadOneOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(loadNearby, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(changeFavoriteStatus, (state, action) => {
      state.offers = [...state.offers.slice(0, action.payload.id - 1),
        action.payload,
        ...state.offers.slice(action.payload.id, state.offers.length)];
    })
    .addCase(loadFavoritesOffers, (state, action) => {
      state.favorites = action.payload;
    });
});

export {reducer};
