import { useState } from 'react';
import { Offer } from '../../types/offer';
import { CardOffer } from '../card-offer/card-offer';

type OfferListProps = {
  offerList: Offer[]
  nearbyOffer?: boolean,
}

export function OfferList({offerList, nearbyOffer}: OfferListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState({});

  const changeActiveOfferHandler = (offer: Offer) => {
    setActiveOffer({...activeOffer, ...offer});
  };

  return (
    <>
      {offerList.map((offer: Offer) => (
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


