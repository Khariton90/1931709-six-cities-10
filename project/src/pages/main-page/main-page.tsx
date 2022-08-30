import Header from '../../components/header/header';
import LocationsItem from '../../components/locations-item/locations-item';
import { MainEmpty } from '../../components/main-empty/main-empty';
import { MapContainer } from '../../components/map-container/map-container';
import { OfferList } from '../../components/offer-list/offer-list';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { Spinner } from '../../components/spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { Offer } from '../../types/offer';
import { sortList } from '../../utils';

export function MainPage(): JSX.Element {
  const authStatus = useAppSelector((state) => state.autorizationStatus);
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const citiesList = useAppSelector((state) => state.citiesList);
  const sortType = useAppSelector((state) => state.sortType);
  const isLoaded = useAppSelector((state) => state.isDataLoaded);

  const dispatch = useAppDispatch();

  const filteredOffers = (list: Offer[]) => {
    const filteredOfferList = list.slice().filter((offer) => offer.city.name === city.name);
    const sortOfferList = sortList(sortType, filteredOfferList);

    return sortOfferList;
  };

  const offerList = filteredOffers(offers);

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

