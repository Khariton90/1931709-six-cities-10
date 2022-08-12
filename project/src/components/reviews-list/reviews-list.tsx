import { Reviews } from '../../mocks/reviews';
import { CommentSubmitForm } from '../comment-submit-form/comment-submit-form';
import { ReviewsItem } from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Reviews[]
}

export function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
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
