import { changeCity, showCurrentIcon, loadOneOffer } from './../action';
import { CITY, CitiesList, SelectOptions } from '../../consts';
import { appReducer } from './app-reducer';
import { mockSelectedOffer } from '../../mock/mock';


describe('Reducer: appReducer', () => {
  const initialState = {
    city: CITY,
    citiesList: CitiesList,
    icon: null,
    sortType: SelectOptions.DEFAULT,
    selectedOffer: null,
  };

  it ('without aditional parameters should result initial state', () => {
    const updatedReducer = appReducer(void 0, {type: 'UNKNOWN_ACTION', payload: 'unknown'});

    expect(updatedReducer).toEqual(initialState);
  });

  it ('should return the city with the name Cologne', () => {
    const updatedReducer = appReducer(initialState, changeCity('Cologne'));

    expect(updatedReducer.city.name).toBe('Cologne');
  });

  it ('must return the icon number of the active offer', () => {
    const updatedReducer = appReducer(initialState, showCurrentIcon(1));

    expect(updatedReducer.icon).toBe(1);
  });

  it ('should return null if no offer is selected', () => {
    const updatedReducer = appReducer(initialState, showCurrentIcon(null));

    expect(updatedReducer.icon).toBeNull();
  });

  it ('should return selected offer', () => {
    const updatedReducer = appReducer(initialState, loadOneOffer(mockSelectedOffer));

    expect(updatedReducer.selectedOffer).toEqual(mockSelectedOffer);
  });
});
