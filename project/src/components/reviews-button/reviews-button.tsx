import { memo } from 'react';

type ReviewsButtonProps = {
  disabled: boolean,
  validForm: boolean | number
}

function ReviewsButton({disabled, validForm}: ReviewsButtonProps): JSX.Element {
  return (
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      {
        !disabled ?
          <button data-testid="button" className="reviews__submit form__submit button" type="submit" disabled={!validForm}>Submit</button> :
          <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      }
    </div>
  );
}

export default memo(ReviewsButton);
