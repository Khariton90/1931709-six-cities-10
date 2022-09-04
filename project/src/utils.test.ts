import { getRatingStarsProcent } from './utils';
describe('Function: getRatingStarsProcent', () => {
  it('should return rating in correct', () => {
    const rating = 5;
    expect(getRatingStarsProcent(rating)).toBe(100);
  });

  it('should return a zero rating', () => {
    expect(getRatingStarsProcent()).toBe(0);
  });
});
