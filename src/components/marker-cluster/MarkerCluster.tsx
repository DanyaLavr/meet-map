import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet.markercluster";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

interface IProps {
  data: { lat: number; lon: number; name: string; interests: string[] }[];
}

const MarkerCluster = ({ data }: IProps) => {
  const map = useMap();

  useEffect(() => {
    const markers = L.markerClusterGroup({
      maxClusterRadius: 120,
      iconCreateFunction: function (cluster) {
        var markers = cluster.getAllChildMarkers();
        var n = 0;

        n += markers.length;

        return L.divIcon({
          html: `<svg viewBox="0 0 32 32" width="40" height="40"><path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" fill="red"/></svg>`,
          className: "mycluster",
          iconSize: L.point(40, 40),
        });
      },
      //Disable all of the defaults:
      //   spiderfyOnMaxZoom: false,
      //   showCoverageOnHover: false,
      //   zoomToBoundsOnClick: false,
    });
    const icon = new Icon({
      iconUrl: markerIconPng,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    data.forEach((elem) => {
      const marker = L.marker([elem.lat, elem.lon], { icon });

      marker.bindPopup(`
        <div>
          <h3>Hi! I'm ${elem.name}</h3>
          <ul class='user-interests'>
          <li class="user-interests__title">I like:</li>
            ${elem.interests.map((elem) => `<li>${elem}</li>`).join("")}
          </ul>
        </div>
      `);

      markers.addLayer(marker);
    });
    map.addLayer(markers);

    return () => {
      map.removeLayer(markers);
    };
  }, [data, map]);

  return null;
};

export default MarkerCluster;
