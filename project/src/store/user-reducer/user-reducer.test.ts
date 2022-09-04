import { setUserData } from './../action';
import { mockUserData } from './../../mock/mock';
import { requireAutorization } from '../action';
import { AuthorizationStatus } from './../../consts';
import { userReducer } from './user-reducer';

describe('Reducer: userReducer', () => {
  let state = {
    autorizationStatus: AuthorizationStatus.Unknown,
    userData: null,
  };

  beforeEach(() => {
    state = {...state, autorizationStatus: AuthorizationStatus.Unknown};
  });
  it ('without aditional parameters should result initial state', () => {
    const updatedReducer = userReducer(void 0, {type: 'UNKNOWN_TYPE', payload: 'unknown'});

    expect(updatedReducer).toEqual(state);
  });

  it ('should return autorizationStatus Auth', () => {
    const updatedReducer = userReducer(state, requireAutorization(AuthorizationStatus.Auth));

    expect(updatedReducer.autorizationStatus).toBe(AuthorizationStatus.Auth);
  });

  it ('should return not empty userData object', () => {
    const updatedReducer = userReducer(state, setUserData(mockUserData));

    expect(updatedReducer.userData).toEqual(mockUserData);
  });
});
