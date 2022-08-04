import { Offer } from '../../types/offer';

type OfferListProps = {
  offers: Offer[],
  nearbyOffer?: boolean,
  renderOffer: (offer:Offer, nearby?: boolean, key?: string) => [],
}

export function OfferList({offers, renderOffer, nearbyOffer}: OfferListProps): JSX.Element {

  return (
    <>
      {offers.map((offer:Offer) => renderOffer(offer, nearbyOffer))}
    </>
  );
}

