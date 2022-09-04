import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { mockSelectedOffer } from '../../mock/mock';
import HistoryRouter from '../history-router/history-router';
import { FavoritesCard } from './favorites-card';

const mockStore = configureMockStore();
describe('Component: FavoritesCard', () => {
  const history = createMemoryHistory();

  const state = {
    dataReducer: {
      offers: [mockSelectedOffer],
      favorites: []
    }
  };

  render (
    <Provider store={mockStore(state)}>
      <HistoryRouter history={history}>
        <FavoritesCard
          favoritesCard={mockSelectedOffer}
          onChangeFavoriteCard={() => mockSelectedOffer}
        />
      </HistoryRouter>
    </Provider>
  );

  it ('should render correctly component', () => {
    expect(screen.getByTestId('favorites-card')).toBeInTheDocument();
  });
});
