import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import ReviewsButton from './reviews-button';

describe('Component: ReviewsButton', () => {
  const history = createMemoryHistory();
  it ('should render correctly component', () => {
    render (
      <HistoryRouter history={history}>
        <ReviewsButton disabled validForm/>
      </HistoryRouter>
    );

    const reviewsHelpTextElement = screen.getByText(/To submit review please make sure to set/i);
    expect(reviewsHelpTextElement).toBeInTheDocument();
  });

  it ('if the form is not valid the button is disabled', () => {
    render (
      <HistoryRouter history={history}>
        <ReviewsButton
          disabled={false}
          validForm={false}
        />
      </HistoryRouter>
    );

    expect(screen.getByTestId('button')).toBeDisabled();
  });
});
