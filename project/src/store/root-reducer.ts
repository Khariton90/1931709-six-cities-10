import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './app-reducer/app-reducer';
import { dataReducer } from './data-reducer/data-reducer';
import { userReducer } from './user-reducer/user-reducer';

export const rootReducer = combineReducers({
  appReducer,
  userReducer,
  dataReducer,
});

