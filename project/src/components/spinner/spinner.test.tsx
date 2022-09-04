import HistoryRouter from '../history-router/history-router';
import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Spinner } from './spinner';
describe('Component: Spinner', () => {
  const history = createMemoryHistory();

  it ('should correctly render component', () => {
    render (
      <HistoryRouter history={history}>
        <Spinner />
      </HistoryRouter>
    );

    const element = screen.getByTestId('spinner-element');

    expect(element).toBeInTheDocument();
  });
});
