import { Host } from './../types/offer';

export type Reviews = {
  comment: string
  date: string
  id: number
  rating: number
  user: Host
}

export const reviews: Reviews[] = [{
  comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
  date: '2022-06-13T12:25:36.938Z',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: 'https://10.react.pages.academy/static/avatar/3.jpg',
    id: 1,
    isPro: true,
    name: 'Isaac'
  }}
];
