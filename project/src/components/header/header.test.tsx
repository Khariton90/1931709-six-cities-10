import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../consts';
import { mockSelectedOffer, mockUserData } from '../../mock/mock';
import HistoryRouter from '../history-router/history-router';
import Header from './header';

const mockStore = configureMockStore();

describe('Component: Header', () => {
  const history = createMemoryHistory();
  const state = {
    userReducer: {
      userData: mockUserData
    },
    dataReducer: {
      offers: [mockSelectedOffer]
    }
  };

  it ('should render correctly component', () => {
    render (
      <Provider store={mockStore(state)}>
        <HistoryRouter history={history}>
          <Header authStatus={AuthorizationStatus.Auth}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('header-app')).toBeInTheDocument();
  });
});
