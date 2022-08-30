import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;

  const autorizationStatus = useAppSelector(getAuthStatus);

  return (
    autorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
}
