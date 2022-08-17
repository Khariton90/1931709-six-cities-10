import {useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { Marker } from 'leaflet';
import { useAppSelector } from '../../hooks';
import { currentCustomIcon, defaultCustomIcon } from '../../consts';
import 'leaflet/dist/leaflet.css';
import { City, Offer } from '../../types/offer';

type MapContainerProps = {
  city: City,
  offers: Offer[],
}

export function MapContainer({city, offers}: MapContainerProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const { location } = city;

  const icon = useAppSelector((state) => state.icon);

  useEffect(() => {
    if (map) {
      map.setView({lat: location.latitude, lng:location.longitude});

      map.eachLayer((layer) => {
        if (layer instanceof Marker){
          map.removeLayer(layer);
        }
      });

      offers.forEach((point) => {
        const marker = new Marker({
          lat: point.city.location.latitude,
          lng: point.city.location.longitude
        });

        marker
          .setIcon(
            icon === point.id ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(map);
      });


    }
  }, [map, offers, city, location, icon]);

  return (
    <section
      style={{height: '750px'}}
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}
