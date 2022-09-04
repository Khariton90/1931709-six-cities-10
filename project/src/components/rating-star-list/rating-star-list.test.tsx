import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import RatingStarList from './rating-star-list';


describe('Component: RatingStarList', () => {

  it ('should render correctly component', () => {
    const history = createMemoryHistory();

    render (
      <HistoryRouter history={history}>
        <RatingStarList
          starList={[5, 4, 3, 2, 1]}
          rating={1}
          onChangeFormValues={() => 1}
        />
      </HistoryRouter>
    );

    expect(screen.getByTestId('reviews-rating')).toBeInTheDocument();
  });
});
