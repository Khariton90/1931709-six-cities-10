import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearbyOffers, fetchStatusFavorite } from '../../store/api-actions';
import { changeFavoriteStatus } from '../../store/app-data/app-data';
import { getOffers } from '../../store/app-data/selectors';
import { Offer } from '../../types/offer';
import { CardOffer } from '../card-offer/card-offer';

type OfferListProps = {
  offers: Offer[]
  nearbyOffer?: boolean,
}

export function OfferList({offers, nearbyOffer}: OfferListProps): JSX.Element {
  const offersList = useAppSelector(getOffers);

  const dispatch = useAppDispatch();

  const paramsId = useParams().id;

  const [offerIsFavorite, setOffer] = useState<Offer>(offers[Number(paramsId)]);

  const handleChangeFavoriteStatus = (offer: Offer) => {
    setOffer((prevOffer) => (prevOffer = offer));
    dispatch(changeFavoriteStatus(offer));
    dispatch(fetchStatusFavorite(offer));
  };

  useEffect(() => {
    if (nearbyOffer) {
      dispatch(fetchNearbyOffers(paramsId));
    }
  }, [dispatch, nearbyOffer, offerIsFavorite, paramsId, offersList]);

  return (
    <>
      {offers.map((offer: Offer) => (
        <CardOffer
          key={offer.id}
          offer={offer}
          nearbyOffer={nearbyOffer}
          onChangeFavoriteStatus={handleChangeFavoriteStatus}
        />
      ))}
    </>
  );
}


