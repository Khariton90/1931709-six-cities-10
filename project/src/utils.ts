import { MAX_STARS_RATING, FIVE_STARS_WIDTH, SelectOptions } from './consts';
import { Offer } from './types/offer';

export const getRatingStarsProcent = (rating: number) => (FIVE_STARS_WIDTH / MAX_STARS_RATING) * rating;

export const compareOffer = (high:number, low:number) => high - low;

export const sortList = (sortType: string, list: Offer[]) => {
  const { DEFAULT, HIGH_TO_LOW, LOW_TO_HIGT, TOP_RATED } = SelectOptions;

  if (sortType !== DEFAULT) {
    if (sortType === HIGH_TO_LOW) {
      return list.sort((offerA, offerB) => compareOffer(offerB.price, offerA.price));
    }

    if (sortType === LOW_TO_HIGT) {
      return list.sort((offerA, offerB) => compareOffer(offerA.price, offerB.price));
    }

    if (sortType === TOP_RATED) {
      return list.sort((offerA, offerB) => compareOffer(offerB.rating, offerA.rating));
    }
  }

  return list;
};
