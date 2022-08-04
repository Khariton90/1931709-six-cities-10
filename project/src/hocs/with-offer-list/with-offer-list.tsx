import { ComponentType, useState } from 'react';
import { CardOffer } from '../../components/card-offer/card-offer';
import { Offer } from '../../types/offer';

type HOCProps = {
  renderOffer: (offer:Offer, key: string, nearby?: boolean) => void;
}

function withOfferList<T>(Component: ComponentType<T>) : ComponentType<Omit<T, keyof HOCProps>> {
  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithOfferList(props: ComponentProps): JSX.Element {
    const [activeOffer, setActiveOffer] = useState({});

    const changeActiveOfferHandler = (offer:Offer) => {
      setActiveOffer({...activeOffer, ...offer});
    };

    return (
      <Component
        {...props as T}
        renderOffer={(offer: Offer, nearbyOffer:boolean) => (
          <CardOffer
            key={offer.id}
            offer={offer}
            changeActiveOfferHandler={changeActiveOfferHandler}
            nearbyOffer={nearbyOffer}
          />
        )}
      />
    );
  }

  return WithOfferList;
}

export default withOfferList;
