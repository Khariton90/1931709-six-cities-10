import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { mockSelectedOffer } from '../../mock/mock';
import HistoryRouter from '../history-router/history-router';
import { OfferList } from './offer-list';

const mockStore = configureMockStore();

describe('Component: OfferList', () => {

  it ('should render correctly component', () => {
    const history = createMemoryHistory();

    render (
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <OfferList offers={[mockSelectedOffer]}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
  });
});
