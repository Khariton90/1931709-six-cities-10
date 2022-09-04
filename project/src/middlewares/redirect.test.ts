import { State } from './../types/state';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from 'redux';
import {redirect} from './redirect';
import { AppRoute } from '../consts';
import { redirectToRoute } from '../store/action';

const fakeHistory = {
  location: {
    pathname: ''
  },
  push(path: string) {
    this.location.pathname = path;
  }
};

jest.mock('../browser-history', () => fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: Redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it ('should be redirect to /login', () => {
    store.dispatch(redirectToRoute(AppRoute.Login));
    expect(fakeHistory.location.pathname).toBe(AppRoute.Login);
    expect(store.getActions()).toEqual([redirectToRoute(AppRoute.Login)]);
  });
});
