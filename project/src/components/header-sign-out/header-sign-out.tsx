import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getOffers, getUserData } from '../../store/app-data/selectors';

export function HeaderSignOut(): JSX.Element {
  const userData = useAppSelector(getUserData);
  const offers = useAppSelector(getOffers);

  const dispatch = useAppDispatch();

  const filterOffers = offers.slice().filter((offer) => offer.isFavorite);

  const handleClickLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to="/favorites">
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={userData?.avatarUrl} alt="" style={{borderRadius: '50%'}}/>
          </div>
          <span className="header__user-name user__name">{userData?.email}</span>
          <span className="header__favorite-count">{filterOffers.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="/">
          <span className="header__signout" onClick={handleClickLogout}>Sign out</span>
        </Link>
      </li>
    </>
  );
}
