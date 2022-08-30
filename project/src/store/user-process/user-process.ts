import { createSlice } from '@reduxjs/toolkit';
import { UserProcessSlice } from './../../types/state';
import { AuthorizationStatus, NameSpace } from '../../consts';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserProcessSlice = {
  autorizationStatus: AuthorizationStatus.Unknown
};

export const userProcessSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.autorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.autorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.autorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.autorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.autorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
