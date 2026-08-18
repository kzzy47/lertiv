"use client";

import { useEffect, useState } from "react";

const TAMPA_LAT = 27.9506;
const TAMPA_LON = -82.4572;

const CODE_LABEL: Record<number, string> = {
  0: "Clear skies",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  48: "Foggy",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  80: "Rain showers",
  81: "Rain showers",
  82: "Storms",
  95: "Thunderstorms",
};

export default function WeatherStrip({ className }: { className?: string }) {
  const [temp, setTemp] = useState<number | null>(null);
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${TAMPA_LAT}&longitude=${TAMPA_LON}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`
    )
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        const t = data?.current?.temperature_2m;
        const code = data?.current?.weather_code;
        if (typeof t === "number") setTemp(Math.round(t));
        if (typeof code === "number") setLabel(CODE_LABEL[code] ?? "Sunshine");
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (temp === null) return null;

  return (
    <div className={className}>
      Tampa Bay right now, {temp}&deg;F, {label.toLowerCase()}
    </div>
  );
}
