import { Reviews } from './../types/reviews';
import { UserDTO } from './../types/user-dto';
import { name, image, internet, datatype, lorem, date } from 'faker';
import { Offer } from '../types/offer';

const mockHost = {
  avatarUrl: image.avatar(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: datatype.string(),
};

export const mockUserData: UserDTO = {
  avatarUrl: image.avatar(),
  email: internet.email(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: name.title(),
  token: datatype.string()
};

export const mockSelectedOffer: Offer = {
  bedrooms: datatype.number(),
  city: {
    location: {
      latitude: datatype.number(),
      longitude: datatype.number(),
      zoom: datatype.number()
    },
    name: datatype.string(),
  },
  description: datatype.string(),
  goods: ['1', '2'],
  host: mockHost,
  id: 1,
  images: [datatype.string(), datatype.string()],
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  location: {
    latitude: datatype.number(),
    longitude: datatype.number(),
    zoom: datatype.number()
  },
  maxAdults: datatype.number(),
  previewImage: image.imageUrl(),
  price: datatype.number(),
  rating: datatype.number(),
  title: datatype.string(),
  type: datatype.string(),
};

export const mockReviewsItem: Reviews = {
  comment: lorem.paragraph(),
  date: date.month(),
  id: 1,
  rating: datatype.number(),
  user: mockHost,
};
