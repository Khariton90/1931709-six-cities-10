import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { mockReviewsItem } from '../../mock/mock';
import HistoryRouter from '../history-router/history-router';
import { ReviewsList } from './reviews-list';

const mockStore = configureMockStore();

describe('Component: ReviewsList', () => {
  const history = createMemoryHistory();

  const state = {
    dataReducer: {
      reviews: [mockReviewsItem]
    }
  };
  it ('should render correctly component', () => {
    render (
      <Provider store={mockStore(state)}>
        <HistoryRouter history={history}>
          <ReviewsList id='1'/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });
});
