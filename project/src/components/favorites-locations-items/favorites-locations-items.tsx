import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchStatusFavorite } from '../../store/api-actions';
import { Offer } from '../../types/offer';
import { FavoritesCard } from '../favorites-card/favorites-card';

type FavoritesLocationsItemsProps = {
  city: string
}

export function FavoritesLocationsItems({city}: FavoritesLocationsItemsProps): JSX.Element {
  const favorites = useAppSelector((state) => state.favorites);

  const dispatch = useAppDispatch();

  const handleChangeFavoriteCard = (card: Offer) => {
    dispatch(fetchStatusFavorite(card));
  };

  const getFiltededOffers = (list: Offer[]) => list.slice().filter((offer) => offer.city.name === city);
  const offersList = getFiltededOffers(favorites);

  if (offersList.length) {
    return (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="/" onClick={(evt) => evt.preventDefault()}>
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {offersList.map((offer) => (
            <FavoritesCard favoritesCard={offer} key={offer.id} onChangeFavoriteCard={handleChangeFavoriteCard}/>
          ))}
        </div>
      </li>
    );
  }

  return (
    <>
    </>
  );
}
