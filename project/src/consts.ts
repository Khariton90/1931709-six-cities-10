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

export const MAX_STARS_RATING = 5;

export const FIVE_STARS_WIDTH = 100;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export const MAP_URL_TEMPLATE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const SelectOptions = {
  DEFAULT: 'DEFAULT',
  LOW_TO_HIGT: 'LOW_TO_HIGT',
  HIGH_TO_LOW: 'HIGH_TO_LOW',
  TOP_RATED: 'TOP_RATED'
};

export const sortOptions: {[key:string]: string} = {
  [SelectOptions.DEFAULT]: 'Popular',
  [SelectOptions.LOW_TO_HIGT]: 'Price: low to high',
  [SelectOptions.HIGH_TO_LOW]: 'Price: high to low',
  [SelectOptions.TOP_RATED]: 'Top rated first'
};
