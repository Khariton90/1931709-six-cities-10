import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { mockSelectedOffer } from '../../mock/mock';
import HistoryRouter from '../history-router/history-router';
import { MapContainer } from './map-container';

const mockStore = configureMockStore();

describe('Component: MapContainer', () => {
  const history = createMemoryHistory();

  const state = {
    appReducer: { icon: 1 }
  };

  const mockProps = {
    city: mockSelectedOffer.city,
    offers: [mockSelectedOffer],
  };
  it ('should render corrctly component', () => {

    render (
      <Provider store={mockStore(state)}>
        <HistoryRouter history={history}>
          <MapContainer
            city={mockProps.city}
            offers={mockProps.offers}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('map-element')).toBeInTheDocument();
  });
});
