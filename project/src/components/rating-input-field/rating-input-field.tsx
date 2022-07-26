import { ChangeEvent } from 'react';

type RatingInputFieldProps = {
  fieldChangeHandle: (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  value: number
}


export function RatingInputField({fieldChangeHandle, value}:RatingInputFieldProps): JSX.Element {
  return (
    <><input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={(evt) => fieldChangeHandle(evt)} />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
