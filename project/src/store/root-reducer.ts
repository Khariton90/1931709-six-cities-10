import { userProcessSlice } from './user-process/user-process';
import { appData } from './app-data/app-data';
import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.User]: userProcessSlice.reducer
});
