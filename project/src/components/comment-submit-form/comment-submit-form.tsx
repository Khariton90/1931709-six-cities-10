//Задание выполнено, для открытия интерфейса

import cn from 'classnames';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addNewCommentAction } from '../../store/api-actions';
import { CommentForm } from '../../types/comment-form';
import { RatingStarList } from '../rating-star-list/rating-star-list';
import './comment-submit-form.css';

const MIN_LENGTH_TEXTAREA = 50;
const MAX_LENGTH_TEXTAREA = 300;

const starList = [5, 4, 3, 2, 1];

type CommentSubmitFormProps = {
  id: string,
}

export function CommentSubmitForm({id}: CommentSubmitFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviews);
  const error = useAppSelector((state) => state.error);

  const [form, setForm] = useState<CommentForm>({
    id,
    rating: 0,
    comment: ''
  });


  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!error) {
      setDisabled(false);
    }
  }, [error]);

  useEffect(() => {
    setForm((prevForm) => ({...prevForm, rating: 0, comment: ''}));
    setDisabled(false);
  }, [reviews]);

  const onChangeFormValues = (value:number) => {
    setForm((prevForm) => ({...prevForm, rating: value}));
  };

  const handleChangeTextArea = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prevForm) => ({...prevForm, comment: evt.target.value}));
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setDisabled(true);
    dispatch(addNewCommentAction(form));
  };

  const validForm = form.rating && form.comment.length > MIN_LENGTH_TEXTAREA;

  return (
    <form
      className={cn('reviews__form form', {'pointerEvents': disabled})}
      action="#"
      method="post"
      onSubmit={handleSubmitForm}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingStarList
        onChangeFormValues={onChangeFormValues}
        starList={starList}
        rating={form.rating}
      />
      <textarea className="reviews__textarea form__textarea"
        disabled={disabled}
        onChange={handleChangeTextArea}
        minLength={MIN_LENGTH_TEXTAREA}
        maxLength={MAX_LENGTH_TEXTAREA}
        value={form.comment}
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        {
          !disabled ?
            <button className="reviews__submit form__submit button" type="submit" disabled={!validForm}>Submit</button> :
            <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
        }
      </div>
    </form>
  );
}
