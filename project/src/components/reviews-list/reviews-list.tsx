import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviews } from '../../store/api-actions';
import { CommentSubmitForm } from '../comment-submit-form/comment-submit-form';
import { ReviewsItem } from '../reviews-item/reviews-item';

type ReviewsListProps = {
  id: string | undefined
}

export function ReviewsList({id}: ReviewsListProps): JSX.Element {

  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, [dispatch, id]);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => (
            <ReviewsItem key={review.id} review={review}/>
          ))
        }
      </ul>
      <CommentSubmitForm />
    </section>
  );
}
