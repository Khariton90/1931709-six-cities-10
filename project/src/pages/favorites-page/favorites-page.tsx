import { useEffect } from 'react';
import { FavoritesEmpty } from '../../components/favorites-empty/favorites-empty';
import { FavoritesList } from '../../components/favorites-list/favorites-list';
import Header from '../../components/header/header';
import { Spinner } from '../../components/spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavorites } from '../../store/api-actions';

export function FavoritesPage(): JSX.Element {
  const authStatus = useAppSelector(({userReducer}) => userReducer.autorizationStatus);
  const isLoaded = useAppSelector(({dataReducer}) => dataReducer.isDataLoaded);
  const offers = useAppSelector(({dataReducer}) => dataReducer.offers);
  const favorites = useAppSelector(({dataReducer}) => dataReducer.favorites);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch, offers]);

  if (isLoaded && !favorites.length) {
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
