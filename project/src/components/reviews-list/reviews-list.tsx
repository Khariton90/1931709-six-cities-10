import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviews } from '../../store/api-actions';
import { getReviews } from '../../store/app-data/selectors';
import { CommentSubmitForm } from '../comment-submit-form/comment-submit-form';
import { ReviewsItem } from '../reviews-item/reviews-item';

type ReviewsListProps = {
  id: string,
}

const MAX_NUMBER_COMMENTS = 10;

export function ReviewsList({id}: ReviewsListProps): JSX.Element {
  const reviews = useAppSelector(getReviews);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!reviews.length) {
      dispatch(fetchReviews(id));
    }
  }, [dispatch, id, reviews]);

  const getSortReviews = () => {
    const sortReviews = reviews.slice().sort((rewA, rewB) => dayjs(rewB.date).diff(dayjs(rewA.date)));
    return sortReviews;
  };

  const sortReviews = getSortReviews();

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          sortReviews.slice(0, MAX_NUMBER_COMMENTS).map((review) => (
            <ReviewsItem key={review.id} review={review}/>
          ))
        }
      </ul>
      <CommentSubmitForm id={id}/>
    </section>
  );
}
