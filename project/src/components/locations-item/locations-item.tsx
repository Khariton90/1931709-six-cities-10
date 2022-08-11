import { City } from '../../types/offer';

type LocationsItemProps = {
  city: City,
  cityItem: City,
  changeCityHandler: (city: City) => City | unknown
}

export function LocationsItem({ city, cityItem, changeCityHandler }:LocationsItemProps): JSX.Element {
  const activeCity = city.name === cityItem?.name ? 'tabs__item--active' : null;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${ activeCity}`} href="/" onClick={(evt) => {
        evt.preventDefault();
        changeCityHandler(cityItem);
      }}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}
