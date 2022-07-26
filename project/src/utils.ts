import { MAX_STARS_RATING, FIVE_STARS_WIDTH } from './consts';

export const getRatingStarsProcent = (rating: number) => (FIVE_STARS_WIDTH / MAX_STARS_RATING) * rating;
