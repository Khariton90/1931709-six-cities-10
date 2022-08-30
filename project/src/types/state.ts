import { AuthorizationStatus } from '../consts';
import { store } from './../store/index';
import { City, CitiesListType, Offer } from './offer';
import { Reviews } from './reviews';
import { UserDTO } from './user-dto';

export type AppState = {
  city: City,
  citiesList: CitiesListType,
  icon: number | null,
  sortType: string,
  selectedOffer: Offer | null,
}

export type DataState = {
  offers: Offer[],
  isDataLoaded: boolean,
  nearby: Offer[]
  reviews: Reviews[],
  error: string | null,
  favorites: Offer[]
}

export type UserState = {
  autorizationStatus: AuthorizationStatus,
  userData: UserDTO | null,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
