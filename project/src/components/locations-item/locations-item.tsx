import cn from 'classnames';
import React from 'react';
import { City } from '../../types/offer';

type LocationsItemProps = {
  city: City,
  cityItem: City,
  onCityChange: (city: City) => void;
}

export function LocationsItem({ city, cityItem, onCityChange }:LocationsItemProps): JSX.Element {
  const changeCityHandler = (evt: React.MouseEvent) => {
    evt.preventDefault();
    onCityChange(cityItem);
  };

  return (
    <li className="locations__item">
      <a
        className={
          cn('locations__item-link tabs__item', {'tabs__item--active': city.name === cityItem?.name})
        }
        href="/"
        onClick={changeCityHandler}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}
