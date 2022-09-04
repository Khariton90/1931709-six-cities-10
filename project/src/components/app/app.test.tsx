import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute, AuthorizationStatus, CitiesList, CITY, SelectOptions } from '../../consts';
import { mockSelectedOffer } from '../../mock/mock';
import HistoryRouter from '../history-router/history-router';
import App from './app';

const mockStore = configureMockStore();

const store = mockStore({
  dataReducer: {
    offers: [mockSelectedOffer],
    isLoaded: false,
    favorites: [],
    nearby: [mockSelectedOffer],
  },
  userReducer: {
    autorizationStatus: AuthorizationStatus.Unknown
  },
  appReducer: {
    city: CITY,
    citiesList: CitiesList,
    sortType: SelectOptions.DEFAULT,
    selectedOffer: mockSelectedOffer
  }
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Aplication routing', () => {
  it ('should render MainPage when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    const titleElement = screen.getByText(/Cities/i);
    const placesTextElement = screen.getByText(/places to stay/i);

    expect(titleElement).toBeInTheDocument();
    expect(placesTextElement).toBeInTheDocument();
  });

  it ('should render LoginPage when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    const loginPageId = screen.getByTestId('login-page');
    const emailLabelText = screen.getByText(/E-mail/i);
    const passwordLabelText = screen.getByText(/Password/i);

    expect(loginPageId).toBeInTheDocument();
    expect(emailLabelText).toBeInTheDocument();
    expect(passwordLabelText).toBeInTheDocument();
  });

  it ('should render NotFoundPage when user navigate to non-existent route', () => {
    history.push('/non-existent route');

    render(fakeApp);

    const notFoundPageTextElement = screen.getByText(/Go to main page/i);
    expect(notFoundPageTextElement).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it ('should render RoomPage when user navigate to "/offer/:id"', () => {
    history.push('/offer/1');

    render(fakeApp);

    expect(screen.getByTestId('room-page')).toBeInTheDocument();
  });
});
