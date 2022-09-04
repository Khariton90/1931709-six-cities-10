import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import { FavoritesLocationsItems } from './favorites-locations-items';
import { createMemoryHistory } from 'history';
import { mockSelectedOffer } from '../../mock/mock';

const mockStore = configureMockStore();

describe('Component: FavoritesLocationsItems', () => {
  const history = createMemoryHistory();

  const state = {
    dataReducer: {
      favorites: [
        {...mockSelectedOffer,
          city: {
            ...mockSelectedOffer.city,
            name: 'Paris'
          }
        }
      ]
    }
  };
  it ('should return render correctly component', () => {
    render (
      <Provider store={mockStore(state)}>
        <HistoryRouter history={history}>
          <FavoritesLocationsItems city='Paris' />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  });
});
