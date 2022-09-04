import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

export function HeaderSignIn(): JSX.Element {
  return (
    <ul className="header__nav-list" data-testid="sign-in-element">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    </ul>
  );
}
