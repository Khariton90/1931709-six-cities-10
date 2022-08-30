import { setError } from '../store/app-data/app-data';
import { clearErrorAction } from './../store/api-actions';
import { store } from './../store/index';

export const handleErrorProcess = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
