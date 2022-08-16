import { Offer } from '../../types/offer';
import { CardOffer } from '../card-offer/card-offer';

type OfferListProps = {
  offerList: Offer[]
  nearbyOffer?: boolean,
  onSetShowPinOffer?: (offer: Offer) => void;
}

export function OfferList({offerList, nearbyOffer, onSetShowPinOffer}: OfferListProps): JSX.Element {

  return (
    <>
      {offerList.map((offer: Offer) => (
        <CardOffer
          key={offer.id}
          offer={offer}
          nearbyOffer={nearbyOffer}
        />
      ))}
    </>
  );
}


