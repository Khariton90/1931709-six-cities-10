import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { AUTO_CLOSE_TIME_OUT, MAX_STARS_RATING } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addNewCommentAction } from '../../store/api-actions';
import { RatingInputField } from '../rating-input-field/rating-input-field';

const MIN_LENGTH_TEXTAREA = 50;
const MAX_LENGTH_TEXTAREA = 300;

export function CommentSubmitForm(): JSX.Element {
  const [rating, setRating] = useState<number>(MAX_STARS_RATING);
  const [textArea, setTextArea] = useState<string>('');
  const [disabled, setDisabled] = useState(false);

  const selectedCity = useAppSelector((state) => state.selectedOffer);
  const error = useAppSelector((state) => state.error);

  const dispatch = useAppDispatch();

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const starValue = Number(evt.target.value);
    setRating(starValue);
  };

  const formSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (error) {
      setDisabled(true);
      toast.info('Ошибка на сервере', {autoClose: AUTO_CLOSE_TIME_OUT});
      setTimeout(() => setDisabled(false), AUTO_CLOSE_TIME_OUT);
      return false;
    }

    if (selectedCity && !error) {
      setDisabled(true);
      dispatch(addNewCommentAction({id: selectedCity.id, rating: rating, comment: textArea}));
      setTextArea('');
      setTimeout(() => setDisabled((prev) => (prev = false)), AUTO_CLOSE_TIME_OUT);
    }
  };

  const listRatingInput = Array.from({length: MAX_STARS_RATING}, (_, i) => i);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => formSubmitHandle(evt)}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {listRatingInput
          .map((number) => (
            <RatingInputField key={number} value={number}
              fieldChangeHandle={fieldChangeHandle}
              disabled={disabled}
            />
          ))}
      </div>
      <textarea className="reviews__textarea form__textarea"
        minLength={MIN_LENGTH_TEXTAREA}
        maxLength={MAX_LENGTH_TEXTAREA}
        disabled={disabled}
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={textArea}
        onChange={(evt) => setTextArea(evt.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabled}>Submit</button>
      </div>
    </form>
  );
}
