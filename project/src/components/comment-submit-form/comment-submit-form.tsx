import cn from 'classnames';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addNewCommentAction } from '../../store/api-actions';
import { CommentForm } from '../../types/comment-form';
import RatingStarList from '../rating-star-list/rating-star-list';
import ReviewsButton from '../reviews-button/reviews-button';
import ReviewsTextarea from '../reviews-textarea/reviews-textarea';
import './comment-submit-form.css';

const MIN_LENGTH_TEXTAREA = 50;
const MAX_LENGTH_TEXTAREA = 300;

const starList = [5, 4, 3, 2, 1];

type CommentSubmitFormProps = {
  id: string,
}

export function CommentSubmitForm({id}: CommentSubmitFormProps): JSX.Element {
  const reviews = useAppSelector(({dataReducer}) => dataReducer.reviews);
  const error = useAppSelector(({dataReducer}) => dataReducer.error);

  const dispatch = useAppDispatch();

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

  const handleChangeFormValues = useCallback((value:number) => {
    setForm((prevForm) => ({...prevForm, rating: value}));
  }, []);

  const handleChangeTextArea = useCallback((evt: ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prevForm) => ({...prevForm, comment: evt.target.value}));
  }, []);

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
        onChangeFormValues={handleChangeFormValues}
        starList={starList}
        rating={form.rating}
      />
      <ReviewsTextarea
        disabled={disabled}
        onChangeTextArea={handleChangeTextArea}
        minLength={MIN_LENGTH_TEXTAREA}
        maxLength={MAX_LENGTH_TEXTAREA}
        comment={form.comment}
      />
      <ReviewsButton disabled={disabled} validForm={validForm}/>
    </form>
  );
}
