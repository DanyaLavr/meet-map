import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerCluster from "./components/marker-cluster/MarkerCluster";
interface IMark {
  name: string;
  lat: number;
  lon: number;
  interests: string[];
}
const Map = ({ data }: { data: IMark[] }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerCluster data={data} />
      <Marker position={[51.505, -0.09]}>
        <Popup>Center</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
