import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { MapContainer } from '../../components/map-container/map-container';
import { OfferList } from '../../components/offer-list/offer-list';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { Spinner } from '../../components/spinner/spinner';
import { AuthorizationStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearbyOffers, fetchOneOffer } from '../../store/api-actions';
import { getRatingStarsProcent } from '../../utils';

export function RoomPage(): JSX.Element {
  const paramsId = useParams().id;

  const city = useAppSelector((state) => state.city);
  const nearby = useAppSelector((state) => state.nearby);
  const selectedOffer = useAppSelector((state) => state.selectedOffer);
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);
  const autorizationStatus = useAppSelector((state) => state.autorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOneOffer(paramsId));
    dispatch(fetchNearbyOffers(paramsId));
  }, [dispatch, paramsId]);

  if (isDataLoaded && !nearby.length) {
    return <Spinner />;
  }

  if (selectedOffer) {
    const {
      images,
      isPremium,
      title,
      rating,
      type,
      bedrooms,
      maxAdults,
      price,
      goods,
      host
    } = selectedOffer;

    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                { isPremium ? <div className="property__mark"><span>Premium</span></div> : null}

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${getRatingStarsProcent(rating)}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                        Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">

                    {goods.map((good) => (
                      <li className="property__inside-item" key={good}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    <span className="property__user-status">
                      {host.isPro ? 'Pro' : null}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                          A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <p className="property__text">
                          An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                { autorizationStatus === AuthorizationStatus.Auth ? <ReviewsList id={selectedOffer.id.toString()}/> : null }
              </div>
            </div>
            <section className="property__map" style={{'overflow': 'hidden'}}>
              <MapContainer
                city={city}
                offers={nearby}
                selectedOffer={selectedOffer}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OfferList nearbyOffer offers={nearby}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
    </>
  );
}

