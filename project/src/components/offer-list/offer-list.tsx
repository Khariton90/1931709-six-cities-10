import { Offer } from '../../types/offer';
import { CardOffer } from '../card-offer/card-offer';

type OfferListProps = {
  offers: Offer[]
  nearbyOffer?: boolean,
}

export function OfferList({offers, nearbyOffer}: OfferListProps): JSX.Element {

  return (
    <>
      {offers.map((offer: Offer) => (
        <CardOffer
          key={offer.id}
          offer={offer}
          nearbyOffer={nearbyOffer}
        />
      ))}
    </>
  );
}


