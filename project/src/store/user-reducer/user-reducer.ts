import { AuthorizationStatus } from '../../consts';
import { createReducer } from '@reduxjs/toolkit';
import { requireAutorization, setUserData } from '../action';
import { UserState } from '../../types/state';

const initialState: UserState = {
  autorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAutorization, (state, action) => {
      state.autorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export {userReducer};
