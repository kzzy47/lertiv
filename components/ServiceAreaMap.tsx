"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Area = {
  name: string;
  lat: number;
  lng: number;
  hq?: boolean;
};

const TAMPA: [number, number] = [27.9506, -82.4572];
const OVERVIEW_ZOOM = 9;
const FOCUS_ZOOM = 12;

const AREAS: Area[] = [
  { name: "Tampa", lat: 27.9506, lng: -82.4572, hq: true },
  { name: "South Tampa", lat: 27.9161, lng: -82.4907 },
  { name: "Brandon", lat: 27.9378, lng: -82.2859 },
  { name: "Riverview", lat: 27.8663, lng: -82.3254 },
  { name: "Valrico", lat: 27.9378, lng: -82.2359 },
  { name: "Lithia", lat: 27.8747, lng: -82.2081 },
  { name: "FishHawk", lat: 27.8467, lng: -82.2118 },
  { name: "Apollo Beach", lat: 27.7712, lng: -82.4046 },
  { name: "Wesley Chapel", lat: 28.1994, lng: -82.3223 },
  { name: "Lutz", lat: 28.1494, lng: -82.4587 },
  { name: "Plant City", lat: 28.0186, lng: -82.1121 },
  { name: "Pinellas County", lat: 27.9659, lng: -82.8001 },
  { name: "Pasco County", lat: 28.3467, lng: -82.3315 },
  { name: "Polk County", lat: 28.0395, lng: -81.9498 },
  { name: "Manatee County", lat: 27.4989, lng: -82.5748 },
];

function FlyController({ selected }: { selected: string | null }) {
  const map = useMap();

  useEffect(() => {
    const area = selected ? AREAS.find((a) => a.name === selected) : null;
    if (area) {
      map.flyTo([area.lat, area.lng], FOCUS_ZOOM, { duration: 0.8 });
    } else {
      map.flyTo(TAMPA, OVERVIEW_ZOOM, { duration: 0.8 });
    }
  }, [selected, map]);

  return null;
}

function ResetOnBackgroundClick({ onReset }: { onReset: () => void }) {
  useMapEvents({
    click: () => onReset(),
  });
  return null;
}

export default function ServiceAreaMap() {
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="aspect-[4/3] w-full border border-border bg-surface md:aspect-[16/10]" />;
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-border md:aspect-[16/10]">
      <MapContainer
        center={TAMPA}
        zoom={OVERVIEW_ZOOM}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        touchZoom={false}
        keyboard={false}
        zoomControl={false}
        attributionControl={false}
        style={{ height: "100%", width: "100%", background: "var(--surface)" }}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
        <FlyController selected={selected} />
        <ResetOnBackgroundClick onReset={() => setSelected(null)} />

        {AREAS.map((area) => {
          const isSelected = selected === area.name;
          const showLabel = !selected || isSelected;

          return (
            <CircleMarker
              key={area.name}
              center={[area.lat, area.lng]}
              radius={area.hq ? 7 : 5}
              pathOptions={{
                color: "var(--accent)",
                fillColor: "var(--accent)",
                fillOpacity: area.hq || isSelected ? 1 : 0.85,
                weight: area.hq || isSelected ? 2 : 1.5,
              }}
              eventHandlers={{
                click: (e) => {
                  L.DomEvent.stopPropagation(e);
                  setSelected((prev) => (prev === area.name ? null : area.name));
                },
              }}
            >
              {showLabel && (
                <Tooltip
                  permanent
                  direction="right"
                  offset={[8, 0]}
                  className="!rounded-none !border-none !bg-surface/90 !px-2 !py-0.5 !font-mono !text-[10px] !text-text-primary !shadow-none"
                >
                  {area.hq ? "LERTIV / TAMPA" : area.name}
                </Tooltip>
              )}
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}
