import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { mockReviewsItem } from '../../mock/mock';
import HistoryRouter from '../history-router/history-router';
import { ReviewsItem } from './reviews-item';

describe('Component: ReviewsItem', () => {
  const history = createMemoryHistory();

  it ('should render correctly component', () => {
    render (
      <HistoryRouter history={history}>
        <ReviewsItem review={mockReviewsItem}/>
      </HistoryRouter>
    );

    expect(screen.getByText(mockReviewsItem.user.name)).toBeInTheDocument();
    expect(screen.getByText(mockReviewsItem.comment)).toBeInTheDocument();
  });
});
