import {useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { Icon, Marker, PointExpression } from 'leaflet';
import { City, Offer } from '../../types/offer';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../consts';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';

type MapContainerProps = {
  city: City,
  offers: Offer[],
}

type IconSize = {
  ICON_SIZE: PointExpression,
  ICON_ANCHOR: PointExpression
}

const IconsSize: IconSize = {
  ICON_SIZE: [40, 40],
  ICON_ANCHOR: [20, 40]
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: IconsSize.ICON_SIZE,
  iconAnchor: IconsSize.ICON_ANCHOR
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: IconsSize.ICON_SIZE,
  iconAnchor: IconsSize.ICON_ANCHOR
});

export function MapContainer({city, offers}: MapContainerProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const icon = useAppSelector((state) => state.icon);

  const { location } = city;

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
    <section style={{height: '750px'}} className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}
