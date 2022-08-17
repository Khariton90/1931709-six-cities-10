import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { requireAutorization } from '../../store/action';
import { logoutAction } from '../../store/api-actions';

export function HeaderSignOut(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to="/">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          <span className="header__favorite-count">3</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="/">
          <span className="header__signout" onClick={() => {
            dispatch(requireAutorization(AuthorizationStatus.NoAuth));
            dispatch(logoutAction());
          }}
          >Sign out
          </span>
        </Link>
      </li>
    </>
  );
}
