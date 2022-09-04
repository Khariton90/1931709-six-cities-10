import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { SelectOptions } from '../../consts';
import HistoryRouter from '../history-router/history-router';
import SortingOptions from './sorting-options';

const mockStore = configureMockStore();

describe('Component: SortingOptions', () => {
  const history = createMemoryHistory();
  it ('should render correctly component', () => {

    render (
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <SortingOptions sortType={SelectOptions.DEFAULT}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('sort-element')).toHaveLength(4);
  });
});
