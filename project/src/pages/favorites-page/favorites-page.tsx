import { useEffect } from 'react';
import { FavoritesEmpty } from '../../components/favorites-empty/favorites-empty';
import { FavoritesList } from '../../components/favorites-list/favorites-list';
import Header from '../../components/header/header';
import { Spinner } from '../../components/spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavorites } from '../../store/api-actions';
import { getDataLoadedStatus, getFavoritesOffers, getOffers } from '../../store/app-data/selectors';
import { getAuthStatus } from '../../store/user-process/selectors';

export function FavoritesPage(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const isLoaded = useAppSelector(getDataLoadedStatus);
  const offers = useAppSelector(getOffers);
  const favorites = useAppSelector(getFavoritesOffers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch, offers]);

  if (isLoaded || !favorites.length) {
    return (
      <Spinner />
    );
  }

  if (favorites.length) {
    return (
      <div className="page">
        <Header authStatus={authStatus}/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <FavoritesList />
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </div>
    );
  }

  return <FavoritesEmpty/>;
}
