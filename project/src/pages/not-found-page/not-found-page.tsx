import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import './not-found-page.css';

export function NotFoundPage(): JSX.Element {
  return (
    <div className='not-found-page'>
      <h1><span>4</span><img src="./img/earth.png" alt="earth"/> <span>4</span></h1>
      <Link to={AppRoute.Main} className="locations__item-link tabs__item--active">Go to main page</Link>
    </div>
  );
}
