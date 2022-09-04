import {useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { Marker } from 'leaflet';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { currentCustomIcon, defaultCustomIcon } from '../../consts';
import { City, Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { changeCity } from '../../store/action';

type MapContainerProps = {
  city: City,
  offers: Offer[],
  selectedOffer?: Offer | null
}

export function MapContainer({city, offers, selectedOffer}: MapContainerProps): JSX.Element {
  const { location } = city;

  const icon = useAppSelector(({appReducer}) => appReducer.icon);
  const dispatch = useAppDispatch();

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView({lat: location.latitude, lng:location.longitude});

      map.eachLayer((layer) => {
        if (layer instanceof Marker){
          map.removeLayer(layer);
        }
      });

      offers.forEach((point) => {
        const currentMarker = icon === point.id;

        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            currentMarker ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(map);
      });

      if (selectedOffer) {
        dispatch(changeCity(selectedOffer.city.name));

        const marker = new Marker({
          lat: selectedOffer.location.latitude,
          lng: selectedOffer.location.longitude
        });

        marker
          .setIcon(currentCustomIcon)
          .addTo(map);
      }

    }
  }, [dispatch, icon, location.latitude, location.longitude, map, offers, selectedOffer]);

  return (
    <section
      style={{height: '750px'}}
      className="cities__map map"
      ref={mapRef}
      data-testid="map-element"
    >
    </section>
  );
}
