import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import HistoryRouter from '../history-router/history-router';
import { PrivateRoute } from './private-route';


const history = createMemoryHistory();

describe('Component: PrivateRoute', () => {
  beforeEach(() => {
    history.push('/favorites');
  });
  it ('should render component for public route, when user not autorized', () => {
    render (
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute autorizationStatus={AuthorizationStatus.NoAuth}>
                <h1>Private Route</h1>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<h1>Public Route</h1>}
          />
        </Routes>
      </HistoryRouter>
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it ('should render component for public route, when user autorized', () => {
    render (
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute autorizationStatus={AuthorizationStatus.Auth}>
                <h1>Private Route</h1>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<h1>Public Route</h1>}
          />
        </Routes>
      </HistoryRouter>
    );

    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
  });
});
