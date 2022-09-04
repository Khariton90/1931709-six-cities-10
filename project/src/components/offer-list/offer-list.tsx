import { useAppDispatch } from '../../hooks';
import { changeFavoriteStatus } from '../../store/action';
import { fetchStatusFavorite } from '../../store/api-actions';
import { Offer } from '../../types/offer';
import { CardOffer } from '../card-offer/card-offer';

type OfferListProps = {
  offers: Offer[]
  nearbyOffer?: boolean,
}

export function OfferList({offers, nearbyOffer}: OfferListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleChangeFavoriteStatus = (offer: Offer) => {
    dispatch(changeFavoriteStatus(offer));
    dispatch(fetchStatusFavorite(offer));
  };

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


