import dayjs from 'dayjs';
import { Reviews } from '../../mocks/reviews';
import { getRatingStarsProcent } from '../../utils';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

type ReviewsItemProps = {
  review: Reviews
}

const DATE_REVIEW = 'MMMM YYYY';
const DATE_TIME_REVIEW = 'YYYY-MM-DD';

export function ReviewsItem({review}: ReviewsItemProps): JSX.Element {
  const {user} = review;
  const getFormatDate = (format:string) => dayjs(review.date).format(format);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingStarsProcent(review.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time"
          dateTime={getFormatDate(DATE_TIME_REVIEW)}
        >
          {getFormatDate(DATE_REVIEW)}
        </time>
      </div>
    </li>
  );
}
