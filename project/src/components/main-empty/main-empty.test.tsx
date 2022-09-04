import HistoryRouter from '../history-router/history-router';
import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { MainEmpty } from './main-empty';
import { name } from 'faker';

const mockStore = configureMockStore();

const appState = {
  city: {
    name: name.title()
  }
};

describe('Component: MainEmpty', () => {
  it ('should render correctly component', () => {
    const history = createMemoryHistory();

    render (
      <Provider store={mockStore({appReducer: appState})}>
        <HistoryRouter history={history}>
          <MainEmpty />
        </HistoryRouter>
      </Provider>
    );

    const noPlacesElement = screen.getByText('No places to stay available');
    const citiesStatusElement = screen.getByText(`We could not find any property available at the moment in ${appState.city.name}`);

    expect(noPlacesElement).toBeInTheDocument();
    expect(citiesStatusElement).toBeInTheDocument();
  });
});
