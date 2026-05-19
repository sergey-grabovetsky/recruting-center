"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Vacancy } from "../data/vacancies";
import L from "leaflet";

// Фікс іконки маркера
const defaultIconPrototype = L.Icon.Default.prototype as L.Icon.Default & {
  _getIconUrl?: unknown;
};
delete defaultIconPrototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Map({ vacancies }: { vacancies: Vacancy[] }) {
  return (
    <MapContainer center={[46.48397152646382, 30.74267694714583]} zoom={8} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {vacancies.map((vac) => (
        <Marker key={vac.id} position={vac.coords}>
          <Popup>
            <strong>{vac.title}</strong><br />
            {vac.unit}<br />
            {vac.salary}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
