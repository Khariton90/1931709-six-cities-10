import { render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { FavoritesList } from './favorites-list';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
describe('Component: FavoritesList', () => {
  it ('should render correctly', () => {
    const history = createMemoryHistory();

    render (
      <Provider store={mockStore({dataReducer: {
        favorites: []
      }})}
      >
        <HistoryRouter history={history} >
          <FavoritesList />
        </HistoryRouter>
      </Provider>
    );

    const favoritesTitle = screen.getByText('Saved listing');

    expect(favoritesTitle).toBeInTheDocument();
  });
});
