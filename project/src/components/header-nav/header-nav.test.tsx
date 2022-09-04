import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../consts';
import { mockUserData, mockSelectedOffer } from '../../mock/mock';
import HistoryRouter from '../history-router/history-router';
import { HeaderNav } from './header-nav';

const mockStore = configureMockStore();

const state = {
  userReducer: {
    userData: mockUserData
  },
  dataReducer: {
    offers: [mockSelectedOffer]
  }
};

describe('Component: HeaderNav', () => {
  it ('should render correctly component if the user is logged in', () => {
    const history = createMemoryHistory();

    render (
      <Provider store={mockStore(state)}>
        <HistoryRouter history={history}>
          <HeaderNav authStatus={AuthorizationStatus.Auth}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it ('should render correctly component if the user not logged', () => {
    const history = createMemoryHistory();

    render (
      <Provider store={mockStore(state)}>
        <HistoryRouter history={history}>
          <HeaderNav authStatus={AuthorizationStatus.NoAuth}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
