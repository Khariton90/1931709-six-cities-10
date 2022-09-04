import cn from 'classnames';
import { useEffect, useState } from 'react';
import { AppRoute } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { getToken } from '../../services/token';
import { loadOneOffer, redirectToRoute } from '../../store/action';
import { fetchStatusFavorite } from '../../store/api-actions';
import { Offer } from '../../types/offer';

type PropertyBookMarkButtonProps = {
  selectedOffer: Offer
  type?: string,
  width?: number,
  height?: number,
  onChangeFavoriteCard: (offer: Offer) => void;
}

export function PropertyBookMarkButton({selectedOffer, type, width, height, onChangeFavoriteCard}: PropertyBookMarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const token = getToken();

  const [card, setCard] = useState(selectedOffer);

  useEffect(() => {
    if (token){
      dispatch(fetchStatusFavorite(card));
    }
  }, [card, dispatch, token]);

  const handleSetCard = (offer: Offer) => {
    if (!token) {
      dispatch(redirectToRoute(AppRoute.Login));
      return;
    }

    setCard((prev) => (prev = offer));
    dispatch(loadOneOffer(offer));
    onChangeFavoriteCard(offer);
  };

  return (
    <button data-testid="bookmark-button" className={cn(`${type}bookmark-button button`, {[`${type}bookmark-button--active`]: selectedOffer.isFavorite})} type="button"
      onClick={() => handleSetCard({...selectedOffer, isFavorite: !selectedOffer.isFavorite})}
    >
      <svg className={cn(`${type}bookmark-icon`, {[`${type}bookmark-icon--active`]: selectedOffer.isFavorite})} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
