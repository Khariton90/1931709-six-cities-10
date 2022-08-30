import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { getRatingStarsProcent } from '../../utils';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavorites } from '../../store/api-actions';


type FavoritesCardProps = {
  favoritesCard: Offer,
  onChangeFavoriteCard: (card: Offer) => void
}

export function FavoritesCard({favoritesCard, onChangeFavoriteCard}: FavoritesCardProps): JSX.Element {
  const {
    isPremium,
    previewImage,
    price, rating,
    title,
    id,
    type
  } = favoritesCard;

  const offers = useAppSelector(({dataReducer}) => dataReducer.offers);

  const dispatch = useAppDispatch();

  const [card, setCard] = useState(favoritesCard);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch, offers]);

  const handleSetCard = (offer: Offer) => {
    setCard(offer);
    onChangeFavoriteCard(offer);
  };

  return (
    <article className="favorites__card place-card">
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}

      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={cn('place-card__bookmark-button button', {'place-card__bookmark-button--active': card.isFavorite})} type="button"
            onClick={() => handleSetCard({...card, isFavorite: !card.isFavorite})}
          >
            <svg className={cn('place-card__bookmark-icon', {'place-card__bookmark-icon--active': card.isFavorite})} width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingStarsProcent(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
