import { MAX_STARS_RATING, FIVE_STARS_WIDTH, SelectOptions } from './consts';
import { Offer } from './types/offer';

export const getRatingStarsProcent = (rating: number) => (FIVE_STARS_WIDTH / MAX_STARS_RATING) * rating;

export const compareOffer = (high:number, low:number) => high - low;

export const sortList = (sortType: string, list: Offer[]) => {
  const sortObj = {
    [SelectOptions.DEFAULT]: () => list,
    [SelectOptions.HIGH_TO_LOW]: () => list.sort((offerA, offerB) => compareOffer(offerB.price, offerA.price)),
    [SelectOptions.LOW_TO_HIGT]: () => list.sort((offerA, offerB) => compareOffer(offerA.price, offerB.price)),
    [SelectOptions.TOP_RATED]: () => list.sort((offerA, offerB) => compareOffer(offerB.rating, offerA.rating)),
  };

  return sortObj[sortType]();
};
