import { createReducer } from '@reduxjs/toolkit';
import { DataState } from '../../types/state';
import { loadOffers, setDataLoadedStatus, loadNearby, loadReviews, setError, changeFavoriteStatus, loadFavoritesOffers } from '../action';

const initialState: DataState = {
  offers: [],
  isDataLoaded: false,
  nearby: [],
  reviews: [],
  error: null,
  favorites: []
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
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
    .addCase(changeFavoriteStatus, (state, action) => {
      state.offers = [...state.offers.slice(0, action.payload.id - 1),
        action.payload,
        ...state.offers.slice(action.payload.id, state.offers.length)];
    })
    .addCase(loadFavoritesOffers, (state, action) => {
      state.favorites = action.payload;
    });
});

export {dataReducer};
