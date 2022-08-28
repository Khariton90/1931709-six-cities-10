import { memo } from 'react';
import { AuthorizationStatus } from '../../consts';
import { HeaderNav } from '../header-nav/header-nav';
import { Logo } from '../logo/logo';

type HeaderProps = {
  authStatus: AuthorizationStatus
}

function Header({authStatus}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <HeaderNav authStatus={authStatus}/>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
