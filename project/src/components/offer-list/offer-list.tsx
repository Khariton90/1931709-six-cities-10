import { useState } from 'react';
import { Offer } from '../../types/offer';
import { CardOffer } from '../card-offer/card-offer';

type OfferListProps = {
  offers: Offer[],
  nearbyOffer?: boolean,
}

export function OfferList({offers, nearbyOffer}: OfferListProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState({});

  const changeActiveOfferHandler = (offer:Offer) => {
    setActiveOffer({...activeOffer, ...offer});
  };

  return (
    <>
      {offers.map((offer:Offer) => (
        <CardOffer
          key={offer.id}
          offer={offer}
          changeActiveOfferHandler={changeActiveOfferHandler}
          nearbyOffer={nearbyOffer}
        />
      ))}
    </>
  );
}

