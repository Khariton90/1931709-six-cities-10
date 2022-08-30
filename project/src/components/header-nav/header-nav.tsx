import { AuthorizationStatus } from '../../consts';
import { HeaderSignIn } from '../header-sign-in/header-sign-in';
import { HeaderSignOut } from '../header-sign-out/header-sign-out';

type HeaderNavProps = {
  authStatus: AuthorizationStatus
}

export function HeaderNav({authStatus}: HeaderNavProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          authStatus === AuthorizationStatus.Auth ?
            <HeaderSignOut /> :
            <HeaderSignIn />
        }
      </ul>
    </nav>
  );
}
