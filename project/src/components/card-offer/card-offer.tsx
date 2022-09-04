import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { getRatingStarsProcent } from '../../utils';
import cn from 'classnames';
import { useAppDispatch } from '../../hooks';
import { loadOneOffer, redirectToRoute, showCurrentIcon } from '../../store/action';
import { getToken } from '../../services/token';
import { AppRoute } from '../../consts';
import { fetchNearbyOffers, fetchReviews } from '../../store/api-actions';

type CardOfferProps = {
  offer: Offer,
  nearbyOffer?: boolean,
  onChangeFavoriteStatus: (offer: Offer) => void
}

export function CardOffer({offer, nearbyOffer, onChangeFavoriteStatus}: CardOfferProps): JSX.Element {
  const { price, previewImage, title, type, id, rating } = offer;

  const dispatch = useAppDispatch();

  const procentStars = getRatingStarsProcent(rating);
  const token = getToken();

  const handleMouseEnterToCard = () => {
    if (!nearbyOffer) {
      dispatch(showCurrentIcon(offer.id));
    }
  };

  const handleMouseLeaveToCard = () => {
    if (!nearbyOffer) {
      dispatch(showCurrentIcon(null));
    }
  };

  const handleChangeFavoriteStatus = () => {
    if (token) {
      onChangeFavoriteStatus({...offer, isFavorite: !offer.isFavorite});
      return;
    }
    dispatch(redirectToRoute(AppRoute.Login));
  };

  const handleClickOfferCard = () => {
    if (token) {
      dispatch(fetchReviews(offer.id.toString()));
    }

    dispatch(fetchNearbyOffers(offer.id.toString()));
    dispatch(showCurrentIcon(offer.id));
    dispatch(loadOneOffer(offer));
  };


  return (
    <article
      className={cn('place-card', {'cities__card': !nearbyOffer, 'near-places__card': nearbyOffer})}
      onMouseEnter={handleMouseEnterToCard}
      onMouseLeave={handleMouseLeaveToCard}
      onClick={handleClickOfferCard}
      data-testid="places__card"
    >
      <div className={cn('place-card__image-wrapper', {'cities__card': !nearbyOffer, 'near-places__image-wrapper': nearbyOffer})} >
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={cn('place-card__bookmark-button button', {'place-card__bookmark-button--active': offer.isFavorite})} type="button"
            onClick={handleChangeFavoriteStatus}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${procentStars}%`}}></span>
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
