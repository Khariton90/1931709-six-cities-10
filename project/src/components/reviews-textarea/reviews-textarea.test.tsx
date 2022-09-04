import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import ReviewsTextarea from './reviews-textarea';
import { lorem } from 'faker';

describe('Component: ReviewsTextarea', () => {
  const history = createMemoryHistory();

  const min = 50;
  const max = 300;

  const mockProps = {
    disabled: false,
    onChangeTextArea: () => undefined,
    minLength: min,
    maxLength: max,
    comment: lorem.paragraph(),
  };
  it ('should render correctly component', () => {
    render (
      <HistoryRouter history={history}>
        <ReviewsTextarea
          disabled={mockProps.disabled}
          onChangeTextArea={mockProps.onChangeTextArea}
          minLength={mockProps.minLength}
          maxLength={mockProps.maxLength}
          comment={mockProps.comment}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(mockProps.comment)).toBeInTheDocument();
  });

  it ('if prop disabled is true textArea disabled', () => {
    render (
      <HistoryRouter history={history}>
        <ReviewsTextarea
          disabled
          onChangeTextArea={mockProps.onChangeTextArea}
          minLength={mockProps.minLength}
          maxLength={mockProps.maxLength}
          comment={mockProps.comment}
        />
      </HistoryRouter>
    );

    expect(screen.getByTestId('textarea-element')).toBeDisabled();
  });
});
