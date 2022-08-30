import { Icon } from 'leaflet';
import { IconSize } from './types/map-container';

export const MAX_STARS_RATING = 5;
export const FIVE_STARS_WIDTH = 100;
export const INVALID_MESSAGE = 'В пароле должна быть хотя бы одна цифра и буква';
export const DATE_REVIEW = 'MMMM YYYY';
export const DATE_TIME_REVIEW = 'YYYY-MM-DD';
export const AUTO_CLOSE_TIME_OUT = 1000;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '*'
}

export enum ApiRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const MapOptions = {
  URL_MARKER_DEFAULT: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  URL_MARKER_CURRENT: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  MAP_URL_TEMPLATE: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  MAP_ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const SelectOptions = {
  DEFAULT: 'DEFAULT',
  LOW_TO_HIGH: 'LOW_TO_HIGH',
  HIGH_TO_LOW: 'HIGH_TO_LOW',
  TOP_RATED: 'TOP_RATED'
};

export const sortOptions: {[key:string]: string} = {
  [SelectOptions.DEFAULT]: 'Popular',
  [SelectOptions.LOW_TO_HIGH]: 'Price: low to high',
  [SelectOptions.HIGH_TO_LOW]: 'Price: high to low',
  [SelectOptions.TOP_RATED]: 'Top rated first'
};

export const IconsSize: IconSize = {
  ICON_SIZE: [40, 40],
  ICON_ANCHOR: [20, 40]
};

export const defaultCustomIcon = new Icon({
  iconUrl: MapOptions.URL_MARKER_DEFAULT,
  iconSize: IconsSize.ICON_SIZE,
  iconAnchor: IconsSize.ICON_ANCHOR
});

export const currentCustomIcon = new Icon({
  iconUrl: MapOptions.URL_MARKER_CURRENT,
  iconSize: IconsSize.ICON_SIZE,
  iconAnchor: IconsSize.ICON_ANCHOR
});

export enum CitiesNames {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}
