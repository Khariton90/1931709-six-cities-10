import { ChangeEvent, memo } from 'react';

type ReviewsTextareaProps = {
  disabled: boolean,
  onChangeTextArea: (evt: ChangeEvent<HTMLTextAreaElement>) => void
  minLength: number,
  maxLength: number,
  comment: string
}

function ReviewsTextarea({disabled, onChangeTextArea, minLength, maxLength, comment}: ReviewsTextareaProps): JSX.Element {
  return (
    <textarea className="reviews__textarea form__textarea"
      data-testid="textarea-element"
      disabled={disabled}
      onChange={(evt) => onChangeTextArea(evt)}
      minLength={minLength}
      maxLength={maxLength}
      value={comment}
      id="review" name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
    >
    </textarea>
  );
}

export default memo(ReviewsTextarea);
