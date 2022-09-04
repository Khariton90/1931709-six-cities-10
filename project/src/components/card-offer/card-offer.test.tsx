import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { mockSelectedOffer } from '../../mock/mock';
import { Offer } from '../../types/offer';
import HistoryRouter from '../history-router/history-router';
import { CardOffer } from './card-offer';

const mockStore = configureMockStore();

describe('Component: CardOffer', () => {
  const history = createMemoryHistory();

  const mockProps = {
    offer: mockSelectedOffer,
    onChangeFavoriteStatus: (offer: Offer) => offer
  };

  it ('should render correctly component', () => {
    render (
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <CardOffer offer={mockProps.offer} onChangeFavoriteStatus={mockProps.onChangeFavoriteStatus}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
    expect(screen.getByTestId('places__card')).toBeInTheDocument();
  });
});
