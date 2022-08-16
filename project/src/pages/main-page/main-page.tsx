import { LocationsItem } from '../../components/locations-item/locations-item';
import { Logo } from '../../components/logo/logo';
import { MapContainer } from '../../components/map-container/map-container';
import { OfferList } from '../../components/offer-list/offer-list';
import { SortingOptions } from '../../components/sorting-options/sorting-options';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { sortList } from '../../utils';

export function MainPage(): JSX.Element {
  const store = useAppSelector((state) => state);
  const {city, offers, citiesList, sortType} = store;

  const dispatch = useAppDispatch();

  const filteredOffers = () => {
    const filteredOfferList = offers.filter((offer) => offer.city.name === city.name);
    const sortOfferList = sortList(sortType, filteredOfferList);

    return sortOfferList;
  };

  const offerList = filteredOffers();

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found" >{offerList.length} places to stay in {city.name}</b>
              <SortingOptions />
              <div className="cities__places-list places__list tabs__content">
                <OfferList offerList={offerList} />
              </div>

            </section>
            <div className="cities__right-section">
              <MapContainer city={city} offers={offerList}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

