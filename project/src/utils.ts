import { toast } from 'react-toastify';
import { MAX_STARS_RATING, FIVE_STARS_WIDTH, SelectOptions, INVALID_MESSAGE, AUTO_CLOSE_TIME_OUT } from './consts';
import { Offer } from './types/offer';

export const getRatingStarsProcent = (rating: number) => (FIVE_STARS_WIDTH / MAX_STARS_RATING) * rating;

export const compareOffer = (high:number, low:number) => high - low;

export const sortList = (sortType: string, list: Offer[]) => {
  const sortObj = {
    [SelectOptions.DEFAULT]: () => list,
    [SelectOptions.HIGH_TO_LOW]: () => list.sort((offerA, offerB) => compareOffer(offerB.price, offerA.price)),
    [SelectOptions.LOW_TO_HIGH]: () => list.sort((offerA, offerB) => compareOffer(offerA.price, offerB.price)),
    [SelectOptions.TOP_RATED]: () => list.sort((offerA, offerB) => compareOffer(offerB.rating, offerA.rating)),
  };

  return sortObj[sortType]();
};

export const validatePassword = (password: string) => {
  const letters = /[a-zA-Z]/.test(password);
  const numbers = /(?=.*[0-9])/.test(password);

  if (letters && numbers) {
    return password;
  }

  toast(
    INVALID_MESSAGE,
    {autoClose: AUTO_CLOSE_TIME_OUT, position: 'top-center'}
  );

  return false;
};
