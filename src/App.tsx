import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import data from "../public/users.json";
import "leaflet.markercluster";
import MarkerCluster from "./components/marker-cluster/MarkerCluster";
import { useMemo, useState } from "react";
import Finder from "./components/finder/Finder";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

function App() {
  const [query, setQuery] = useState("");
  const filteredData = useMemo(() => {
    return data.filter((elem) =>
      elem.interests.some((elem) =>
        elem.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  }, [query]);

  return (
    <>
      <Finder onSubmit={setQuery} />
      <MapContainer
        center={[38.34, -0.5]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerCluster data={filteredData} />

        <Marker
          position={[38.34, -0.5]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>Center</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default App;
