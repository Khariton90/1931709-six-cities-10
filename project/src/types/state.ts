import { AuthorizationStatus } from './../consts';
import { store } from './../store/index';
import { City, CitiesListType, Offer } from './offer';
import { Reviews } from './reviews';
import { UserDTO } from './user-dto';

export type UserProcessSlice = {
  autorizationStatus: AuthorizationStatus
}

export type AppDTO = {
  city: City,
  citiesList: CitiesListType,
  offers: Offer[],
  icon: number | null,
  sortType: string,
  isDataLoaded: boolean,
  selectedOffer: Offer | null,
  nearby: Offer[]
  reviews: Reviews[],
  error: string | null,
  userData: UserDTO | null,
  favorites: Offer[]
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
