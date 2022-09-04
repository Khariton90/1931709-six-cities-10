import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { mockSelectedOffer } from '../../mock/mock';
import HistoryRouter from '../history-router/history-router';
import { PropertyBookMarkButton } from './property-bookmark-button';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: PropertyBookmarkButton', () => {
  const mockProps = {
    selectedOffer: mockSelectedOffer,
    onChangeFavoriteCard: () => undefined
  };

  it ('should render correctly component', () => {

    render (
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <PropertyBookMarkButton
            selectedOffer={mockProps.selectedOffer}
            onChangeFavoriteCard={mockProps.onChangeFavoriteCard}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('bookmark-button')).toBeInTheDocument();
  });
});
