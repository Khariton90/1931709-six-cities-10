import {useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import L, { Icon, Marker } from 'leaflet';
import { City, Offer } from '../../types/offer';
import { URL_MARKER_CURRENT } from '../../consts';
import 'leaflet/dist/leaflet.css';

type MapContainerProps = {
  city: City,
  offers: Offer[]
}

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const markerGroup = L.layerGroup();

const createMarker = (point: Offer) => {
  const marker = new Marker({
    lat: point.city.location.latitude,
    lng: point.city.location.longitude
  });

  marker
    .setIcon(currentCustomIcon)
    .addTo(markerGroup);
};


export function MapContainer({city, offers}: MapContainerProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const { location } = city;

  useEffect(() => {
    markerGroup.clearLayers();

    if (map) {
      map.setView({lat: location.latitude, lng:location.longitude});

      offers.forEach((point) => createMarker(point));

      markerGroup.addTo(map);
    }
  }, [map, offers, city, location]);

  return (
    <section style={{height: '750px'}} className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}
