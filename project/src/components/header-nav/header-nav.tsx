import { AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks';
import { HeaderSignIn } from '../header-sign-in/header-sign-in';
import { HeaderSignOut } from '../header-sign-out/header-sign-out';

export function HeaderNav(): JSX.Element {
  const autorizationStatus = useAppSelector((state) => state.autorizationStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          autorizationStatus === AuthorizationStatus.Auth ?
            <HeaderSignOut /> :
            <HeaderSignIn />
        }
      </ul>
    </nav>
  );
}
