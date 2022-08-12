import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('offer/changeCity', (value) => ({
  payload: value
}));
