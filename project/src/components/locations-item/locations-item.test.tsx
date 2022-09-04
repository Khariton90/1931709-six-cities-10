import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { mockSelectedOffer } from '../../mock/mock';
import { City } from '../../types/offer';
import HistoryRouter from '../history-router/history-router';
import LocationsItem from './locations-item';


const mockProps = {
  city: 'Cologne',
  cityItem: {...mockSelectedOffer, name: 'Cologne'},
  onCityChange: (item: City) => undefined
};

describe('Component: LocationsItem', () => {

  it ('should render correctly component', () => {
    const history = createMemoryHistory();

    render (
      <HistoryRouter history={history}>
        <LocationsItem city={mockProps.city}
          cityItem={mockProps.cityItem}
          onCityChange={mockProps.onCityChange}
        />
      </HistoryRouter>
    );

    expect(screen.getByText('Cologne')).toBeInTheDocument();
  });
});
