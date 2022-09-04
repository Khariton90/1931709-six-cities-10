import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import { CommentSubmitForm } from './comment-submit-form';

const mockStore = configureMockStore();
describe('Component: CommentSubmitForm', () => {
  const history = createMemoryHistory();

  const state = {
    dataReducer: {
      reviews: [],
      error: null
    }
  };
  it ('should render correctly component', () => {
    render (
      <Provider store={mockStore(state)}>
        <HistoryRouter history={history}>
          <CommentSubmitForm id='1'/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
  });
});
