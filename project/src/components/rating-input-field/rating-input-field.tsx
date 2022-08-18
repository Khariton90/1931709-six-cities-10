import { ChangeEvent } from 'react';
import { MAX_STARS_RATING } from '../../consts';

type RatingInputFieldProps = {
  fieldChangeHandle: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: number,
  disabled: boolean
}

export function RatingInputField({fieldChangeHandle, value, disabled}:RatingInputFieldProps): JSX.Element {
  const starValue = MAX_STARS_RATING - value;

  return (
    <>
      <input className="form__rating-input visually-hidden"
        name="rating"
        value={starValue}
        id={`${starValue}-stars`}
        type="radio"
        disabled={disabled}
        onChange={(evt) => fieldChangeHandle(evt)}
      />
      <label
        htmlFor={`${starValue}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
