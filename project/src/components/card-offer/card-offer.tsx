import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { getRatingStarsProcent } from '../../utils';
import cn from 'classnames';
import { useAppDispatch } from '../../hooks';
import { showCurrentIcon } from '../../store/action';

type CardOfferProps = {
  offer: Offer,
  nearbyOffer?: boolean
}

export function CardOffer({offer, nearbyOffer}: CardOfferProps): JSX.Element {
  const { price, previewImage, title, type, id, rating } = offer;

  const dispatch = useAppDispatch();

  const procentStars = getRatingStarsProcent(rating);

  const handleMouseEnterToCard = () => {
    if (nearbyOffer) {
      dispatch(showCurrentIcon(offer.id));
    }
  };

  const handleMouseLeaveToCard = () => {
    if (nearbyOffer) {
      dispatch(showCurrentIcon(null));
    }
  };

  return (
    <article
      className={cn('place-card', {'cities__card': !nearbyOffer, 'near-places__card': nearbyOffer})}
      onMouseEnter={handleMouseEnterToCard}
      onMouseLeave={handleMouseLeaveToCard}
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
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
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
