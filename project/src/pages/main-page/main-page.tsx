import { useEffect } from 'react';
import Header from '../../components/header/header';
import LocationsItem from '../../components/locations-item/locations-item';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { MapContainer } from '../../components/map-container/map-container';
import { OfferList } from '../../components/offer-list/offer-list';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { Spinner } from '../../components/spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, loadNearby, loadOneOffer, showCurrentIcon } from '../../store/action';
import { Offer } from '../../types/offer';
import { sortList } from '../../utils';

export function MainPage(): JSX.Element {
  const authStatus = useAppSelector(({userReducer}) => userReducer.autorizationStatus);
  const city = useAppSelector(({appReducer}) => appReducer.city);
  const offers = useAppSelector(({dataReducer}) => dataReducer.offers);
  const citiesList = useAppSelector(({appReducer}) => appReducer.citiesList);
  const sortType = useAppSelector(({appReducer}) => appReducer.sortType);
  const isLoaded = useAppSelector(({dataReducer}) => dataReducer.isDataLoaded);
  const selectedOffer = useAppSelector(({appReducer}) => appReducer.selectedOffer);
  const nearbyOffers = useAppSelector(({dataReducer}) => dataReducer.nearby);

  const dispatch = useAppDispatch();

  const filteredOffers = (list: Offer[]) => {
    const filteredOfferList = list.slice().filter((offer) => offer.city.name === city.name);
    const sortOfferList = sortList(sortType, filteredOfferList);

    return sortOfferList;
  };

  const offerList = filteredOffers(offers);

  useEffect(() => {
    if (selectedOffer) {
      dispatch(loadOneOffer(null));
      dispatch(showCurrentIcon(null));
    }

    if (nearbyOffers.length) {
      dispatch(loadNearby([]));
    }

  }, [dispatch, selectedOffer, nearbyOffers.length]);

  if (!offers.length && !isLoaded) {
    return <Spinner />;
  }

  return (
    <div className="page page--gray page--main">
      <Header authStatus={authStatus}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.keys(citiesList).map((item) => (
                <LocationsItem
                  key={item}
                  city={item}
                  cityItem={city}
                  onCityChange={() => dispatch(changeCity(item))}
                />))}
            </ul>
          </section>
        </div>
        {
          !offers.length ?
            <MainEmpty /> :
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found" >{offerList.length} places to stay in {city.name}</b>
                  <SortingOptions sortType={sortType}/>
                  <div className="cities__places-list places__list tabs__content">
                    <OfferList offers={offerList}/>
                  </div>

                </section>
                <div className="cities__right-section">
                  <MapContainer city={city} offers={filteredOffers(offers)}/>
                </div>
              </div>
            </div>
        }
      </main>
    </div>
  );
}

