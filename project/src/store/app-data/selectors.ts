import { City, CitiesListType } from './../../types/offer';
import { UserDTO } from './../../types/user-dto';
import { Reviews } from './../../types/reviews';
import { State } from './../../types/state';
import { NameSpace } from '../../consts';
import { Offer } from '../../types/offer';

export const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getErrorStatus = (state: State): string | null => state[NameSpace.Data].error;
export const getReviews = (state: State): Reviews[] => state[NameSpace.Data].reviews;
export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getFavoritesOffers = (state: State): Offer[] => state[NameSpace.Data].favorites;
export const getUserData = (state: State): UserDTO | null => state[NameSpace.Data].userData;
export const getCity = (state: State): City => state[NameSpace.Data].city;
export const getActiveMapIcon = (state: State): number | null => state[NameSpace.Data].icon;
export const getCitiesList = (state: State): CitiesListType => state[NameSpace.Data].citiesList;
export const getSortType = (state: State): string => state[NameSpace.Data].sortType;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearby;
export const getSelectedOffer = (state: State): Offer | null => state[NameSpace.Data].selectedOffer;
