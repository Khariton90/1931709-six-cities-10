import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { mockSelectedOffer, mockUserData } from '../../mock/mock';
import HistoryRouter from '../history-router/history-router';
import { HeaderSignOut } from './header-sign-out';

const mockStore = configureMockStore();
describe('Component: HeaderSignOut', () => {
  const state = {
    userReducer: {
      userData: mockUserData
    },
    dataReducer: {
      offers: [mockSelectedOffer]
    }
  };
  it ('should render correctly component', () => {
    const history = createMemoryHistory();

    render (
      <Provider store={mockStore(state)}>
        <HistoryRouter history={history}>
          <HeaderSignOut />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});
