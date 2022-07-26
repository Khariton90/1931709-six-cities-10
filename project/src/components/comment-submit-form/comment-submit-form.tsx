import { ChangeEvent, FormEvent, useState } from 'react';
import { MAX_STARS_RATING } from '../../consts';
import { RatingInputField } from '../rating-input-field/rating-input-field';

export function CommentSubmitForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: ''
  });

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const formSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  const listRatingInput = Array.from({length: MAX_STARS_RATING}, (_, i) => i + 1).map((number) => <RatingInputField key={number} value={number} fieldChangeHandle={fieldChangeHandle}/>);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => formSubmitHandle(evt)}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {listRatingInput}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={(evt) => fieldChangeHandle(evt)}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
}
