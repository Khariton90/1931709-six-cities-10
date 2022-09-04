import { setDataLoadedStatus, setError, loadOffers, loadNearby, loadReviews, loadFavoritesOffers } from './../action';
import { dataReducer } from './data-reducer';

const initialState = {
  offers: [],
  isDataLoaded: false,
  nearby: [],
  reviews: [],
  error: null,
  favorites: []
};
describe('Reducer: DataReducer', () => {
  it ('should return initialState', () => {
    const unknownAction = {
      type: 'UNKNOWN_ACTION',
      payload: null
    };
    const updatedReducer = dataReducer(void 0, unknownAction);

    expect(updatedReducer).toEqual(initialState);
  });

  it ('should return not empty offer array', () => {
    const array = new Array(5).fill(null);

    const updatedReducer = dataReducer(initialState, loadOffers(array));
    expect(updatedReducer.offers.length).toBeTruthy();
  });

  it ('should return loadedStatus is true', () => {
    const updatedState = dataReducer(initialState, setDataLoadedStatus(true));
    expect(updatedState.isDataLoaded).toBeTruthy();
  });

  it ('should return not empty nearby array', () => {
    const array = new Array(5).fill(null);

    const updatedReducer = dataReducer(initialState, loadNearby(array));
    expect(updatedReducer.nearby.length).toBeTruthy();
  });

  it ('should return not empty reviews array', () => {
    const array = new Array(5).fill(null);

    const updatedReducer = dataReducer(initialState, loadReviews(array));
    expect(updatedReducer.reviews.length).toBe(5);
  });
  it ('should return error message', () => {
    const updatedReducer = dataReducer(initialState, setError('errorMessage'));
    expect(updatedReducer.error).toBe('errorMessage');
  });

  it ('should return not empty favorites array', () => {
    const array = new Array(2).fill(null);

    const updatedReducer = dataReducer(initialState, loadFavoritesOffers(array));
    expect(updatedReducer.favorites.length).toBe(2);
  });
});
