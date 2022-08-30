import { fetchFavorites, fetchNearbyOffers, fetchReviews } from './../api-actions';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, SelectOptions } from '../../consts';
import { CITY, CitiesList } from '../../mocks/city';
import { AppDTO } from '../../types/state';
import { fetchOfferAction } from '../api-actions';

const initialState: AppDTO = {
  city: CITY,
  citiesList: CitiesList,
  offers: [],
  icon: null,
  sortType: SelectOptions.DEFAULT,
  isDataLoaded: false,
  selectedOffer: null,
  nearby: [],
  reviews: [],
  error: null,
  userData: null,
  favorites: []
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = state.citiesList[action.payload];
    },
    showCurrentIcon: (state, action) => {
      state.icon = action.payload;
    },
    sortOffers: (state, action) => {
      state.sortType = action.payload;
    },
    setDataLoadedStatus: (state, action) => {
      state.isDataLoaded = action.payload;
    },
    loadOffers: (state, action) => {
      state.offers = action.payload;
    },
    loadOneOffer: (state, action) => {
      state.selectedOffer = action.payload;
    },
    loadNearby: (state, action) => {
      state.nearby = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    changeFavoriteStatus: (state, action) => {
      state.offers = [...state.offers.slice(0, action.payload.id - 1),
        action.payload,
        ...state.offers.slice(action.payload.id, state.offers.length)];
    },
    loadFavoritesOffers: (state, action) => {
      state.favorites = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        //Проблема с загрузкой Uncaught ReferenceError: Cannot access 'fetchOfferAction' before initialization
        state.offers = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearby = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  }
});

export const {changeCity, showCurrentIcon, sortOffers, setDataLoadedStatus, loadOffers, loadOneOffer, loadNearby, loadReviews, setError, setUserData, changeFavoriteStatus, loadFavoritesOffers} = appData.actions;
