import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './app-reducer';
import { dataReducer } from './data-reducer';
import { userReducer } from './user-reducer';

export const rootReducer = combineReducers({
  appReducer,
  userReducer,
  dataReducer,
});
