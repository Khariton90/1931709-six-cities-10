import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks';
import { reviews } from '../../mocks/reviews';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { RoomPage } from '../../pages/room-page/room-page';
import { PrivateRoute } from '../private-route/private-route';
import { Spinner } from '../spinner/spinner';


function App(): JSX.Element {
  const { Main, Favorites, Login, Room, NotFound } = AppRoute;
  const isLoaded = useAppSelector((state) => state.isDataLoaded);

  if(isLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Main} element={<MainPage />}/>
        <Route
          path={Favorites}
          element={
            <PrivateRoute autorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={Login} element={<LoginPage />}/>
        <Route path={Room} element={<RoomPage reviews={reviews}/>}/>
        <Route path={NotFound} element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
