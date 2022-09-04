import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import { HeaderSignIn } from './header-sign-in';

describe('Component: HeaderSignIn', () => {

  it ('should render correctly component', () => {
    const history = createMemoryHistory();

    render (
      <HistoryRouter history={history}>
        <HeaderSignIn />
      </HistoryRouter>
    );

    expect(screen.getByTestId('sign-in-element')).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
