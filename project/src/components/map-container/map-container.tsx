import {useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { Marker } from 'leaflet';
import { useAppSelector } from '../../hooks';
import { currentCustomIcon, defaultCustomIcon } from '../../consts';
import { City, Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapContainerProps = {
  city: City,
  offers: Offer[],
  selectedOffer?: Offer | null
}

const MARKER_Z_INDEX = 2;

export function MapContainer({city, offers, selectedOffer}: MapContainerProps): JSX.Element {
  const { location } = city;

  const icon = useAppSelector((state) => state.icon);

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
          lat: point.city.location.latitude,
          lng: point.city.location.longitude
        });

        if (currentMarker) {
          marker.setZIndexOffset(MARKER_Z_INDEX);
        }

        marker
          .setIcon(
            currentMarker ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(map);
      });

      if (selectedOffer) {
        const marker = new Marker({
          lat: selectedOffer.city.location.latitude,
          lng: selectedOffer.city.location.longitude
        });

        marker
          .setIcon(currentCustomIcon)
          .addTo(map);
      }

    }
  }, [map, offers, city, location, icon, selectedOffer]);

  return (
    <section
      style={{height: '750px'}}
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}
