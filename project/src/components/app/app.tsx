import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { reviews } from '../../mocks/reviews';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { RoomPage } from '../../pages/room-page/room-page';
import { City, Offer } from '../../types/offer';
import { PrivateRoute } from '../private-route/private-route';

type MainPageProps = {
  offersCount: number;
  offers: Offer[]
  city: City
};

function App({offersCount, offers, city}:MainPageProps): JSX.Element {
  const { Main, Favorites, Login, Room, NotFound } = AppRoute;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Main} element={<MainPage offersCount={offersCount} offers={offers} city={city}/>}/>
        <Route
          path={Favorites}
          element={
            <PrivateRoute autorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route path={Login} element={<LoginPage />}/>
        <Route path={Room} element={<RoomPage offers={offers} city={city} reviews={reviews}/>}/>
        <Route path={NotFound} element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
