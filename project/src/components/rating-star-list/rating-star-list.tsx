import { Fragment, memo } from 'react';

type RatingStarListProps = {
  onChangeFormValues: (value: number) => void,
  starList: number[],
  rating: number,
}

function RatingStarList({onChangeFormValues, starList, rating}: RatingStarListProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      { starList.map((star) => (
        <Fragment key={`${star}-star`}>
          <input className="form__rating-input visually-hidden"
            onChange={() => onChangeFormValues(star)}
            name="rating"
            value={star}
            id={`${star}-stars`}
            type="radio"
            checked={rating === star}
          />
          <label
            htmlFor={`${star}-stars`}
            className="reviews__rating-label form__rating-label"
            title="perfect"
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      )) }
    </div>
  );
}

export default memo(RatingStarList);
