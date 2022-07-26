import { CardOffer } from '../card-offer/card-offer';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type OfferListProps = {
  offers: Offer[],
}

export function OfferList({offers}: OfferListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState(offers[0]);

  const changeActiveOfferHandler = (offer:Offer) => {
    setActiveOffer({...activeOffer, ...offer});
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}-offer`;
        return (
          <CardOffer offer={offer} key={keyValue} changeActiveOfferHandler={changeActiveOfferHandler}/>
        );
      })}
    </div>
  );
}
