import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { RoomPage } from '../../pages/room-page/room-page';
import { dropToken, getToken } from '../../services/token';
import { PrivateRoute } from '../private-route/private-route';
import { Spinner } from '../spinner/spinner';

function App(): JSX.Element {
  const isLoaded = useAppSelector(({dataReducer}) => dataReducer.isDataLoaded);
  const autorizationStatus = useAppSelector(({userReducer}) => userReducer.autorizationStatus);
  const dispatch = useAppDispatch();

  const { Main, Favorites, Login, Room, NotFound } = AppRoute;

  const token = getToken();

  useEffect(() => {
    if (token) {
      dropToken();
    }
  }, [dispatch, token]);

  if (isLoaded) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path={Main} element={<MainPage />}/>
      <Route
        path={Favorites}
        element={
          <PrivateRoute autorizationStatus={autorizationStatus}>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route path={Login} element={<LoginPage />}/>
      <Route path={Room} element={<RoomPage />}/>
      <Route path={NotFound} element={<NotFoundPage />}/>
    </Routes>
  );
}

export default App;
