import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

export function NotFoundPage(): JSX.Element {
  return (
    <div>
      <h1>404. Page Not Found.</h1>
      <Link to={AppRoute.Main}>Go to main page</Link>
    </div>
  );
}
