import { CitiesNames } from '../../consts';
import { FavoritesLocationsItems } from '../favorites-locations-items/favorites-locations-items';

export function FavoritesList(): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          Object.values(CitiesNames).map((key) => <FavoritesLocationsItems key={key} city={key}/>)
        }
      </ul>
    </section>
  );
}
