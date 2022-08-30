import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { RoomPage } from '../../pages/room-page/room-page';
import { getToken } from '../../services/token';
import { getDataLoadedStatus } from '../../store/app-data/selectors';
import HistoryRouter from '../history-router/history-router';
import { PrivateRoute } from '../private-route/private-route';
import { Spinner } from '../spinner/spinner';

function App(): JSX.Element {
  const isLoaded = useAppSelector(getDataLoadedStatus);
  const dispatch = useAppDispatch();

  const { Main, Favorites, Login, Room, NotFound } = AppRoute;

  const token = getToken();

  useEffect(() => {
    if (token) {
      // dropToken();
    }
  }, [dispatch, token]);

  if (isLoaded) {
    return <Spinner />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={Main} element={<MainPage />}/>
        <Route
          path={Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={Login} element={<LoginPage />}/>
        <Route path={Room} element={<RoomPage />}/>
        <Route path={NotFound} element={<NotFoundPage />}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
