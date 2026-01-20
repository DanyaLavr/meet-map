import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import data from "../public/users.json";
import "leaflet.markercluster";
import MarkerCluster from "./components/marker-cluster/MarkerCluster";
import { useMemo, useState } from "react";
import Finder from "./components/finder/Finder";

function App() {
  const [query, setQuery] = useState("");
  const filteredData = useMemo(() => {
    return data.filter((elem) =>
      elem.interests.some((elem) =>
        elem.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  }, [query]);
  console.log("query :>> ", query);
  console.log("filteredData :>> ", filteredData);
  return (
    <>
      <Finder onSubmit={setQuery} />
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerCluster data={filteredData} />
        <Marker position={[51.505, -0.09]}>
          <Popup>Center</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default App;
