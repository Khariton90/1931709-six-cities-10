import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { requireAutorization } from '../../store/action';
import { logoutAction } from '../../store/api-actions';

export function HeaderSignOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userData);

  const logoutHandler = () => {
    dispatch(requireAutorization(AuthorizationStatus.NoAuth));
    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to="/">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{userData?.email}</span>
          <span className="header__favorite-count">3</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="/">
          <span className="header__signout" onClick={logoutHandler}>Sign out</span>
        </Link>
      </li>
    </>
  );
}
