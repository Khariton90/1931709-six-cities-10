import {configureMockStore} from '@jedmao/redux-mock-store';
import { render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../consts';
import HistoryRouter from '../history-router/history-router';
import { FavoritesEmpty } from './favorites-empty';

const mockStore = configureMockStore();

const dataState = {
  offers: [],
  isDataLoaded: false,
  nearby: [],
  reviews: [],
  error: null,
  favorites: []
};

const userState = {
  autorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};


describe('Component: FavoritesEmpty', () => {
  it('should render correctly component', () => {
    const history = createMemoryHistory();

    render (
      <Provider store={mockStore({userReducer: {...userState}, dataReducer: {...dataState}})}>
        <HistoryRouter history={history}>
          <FavoritesEmpty />
        </HistoryRouter>
      </Provider>
    );

    const nothing = 'Nothing yet saved.';

    expect(screen.getByText(nothing)).toBeInTheDocument();
    expect(screen.getByTestId('footer__logo')).toBeInTheDocument();
  });
});
