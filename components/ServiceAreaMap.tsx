"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Area = {
  name: string;
  x: number;
  y: number;
};

const AREAS: Area[] = [
  { name: "Tampa", x: 300, y: 210 },
  { name: "South Tampa", x: 268, y: 250 },
  { name: "Brandon", x: 372, y: 218 },
  { name: "Riverview", x: 380, y: 258 },
  { name: "Valrico", x: 400, y: 200 },
  { name: "Lithia", x: 420, y: 250 },
  { name: "FishHawk", x: 402, y: 278 },
  { name: "Apollo Beach", x: 340, y: 320 },
  { name: "Wesley Chapel", x: 320, y: 90 },
  { name: "Lutz", x: 280, y: 140 },
  { name: "Plant City", x: 460, y: 190 },
  { name: "Pinellas County", x: 190, y: 260 },
  { name: "Pasco County", x: 260, y: 60 },
  { name: "Polk County", x: 470, y: 240 },
  { name: "Manatee County", x: 300, y: 380 },
];

/* Stylized Tampa Bay coastline. Not survey-accurate; a legible, brand-appropriate
   abstraction of the peninsula and bay for orientation, not navigation. */
const COASTLINE =
  "M120,20 C160,10 210,30 230,70 C245,100 220,120 235,150 C255,180 210,190 220,220 C230,250 260,260 245,300 C232,335 190,340 200,380 C208,415 170,440 150,470 L60,470 C30,430 40,380 25,340 C10,300 30,260 20,220 C10,180 35,140 30,100 C25,60 80,30 120,20 Z";

const BAY = "M235,150 C255,175 250,215 225,235 C205,250 195,225 210,200 C220,180 225,165 235,150 Z";

export default function ServiceAreaMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 500 500"
        className="h-auto w-full"
        role="img"
        aria-label="Map of LERTIV's Tampa Bay and Central Florida service area"
      >
        <path
          d={COASTLINE}
          fill="var(--surface)"
          stroke="var(--border)"
          strokeWidth="1.5"
        />
        <path d={BAY} fill="var(--background)" stroke="var(--border)" strokeWidth="1" />

        {AREAS.map((area) => {
          const isActive = active === area.name;
          const flip = area.x > 390;
          return (
            <g
              key={area.name}
              onMouseEnter={() => setActive(area.name)}
              onMouseLeave={() => setActive(null)}
              className="cursor-pointer"
            >
              <circle cx={area.x} cy={area.y} r={22} fill="transparent" />
              <motion.circle
                cx={area.x}
                cy={area.y}
                r={isActive ? 6 : 4}
                fill="var(--accent)"
                animate={{ r: isActive ? 6 : 4 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
              {isActive && (
                <motion.circle
                  cx={area.x}
                  cy={area.y}
                  r={4}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1"
                  initial={{ r: 4, opacity: 0.6 }}
                  animate={{ r: 16, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              <motion.text
                x={flip ? area.x - 10 : area.x + 10}
                y={area.y + 4}
                textAnchor={flip ? "end" : "start"}
                fontSize={isActive ? 12 : 10}
                fontFamily="var(--font-mono, monospace)"
                fill={isActive ? "var(--text-primary)" : "var(--text-secondary)"}
                animate={{ fontSize: isActive ? 12 : 10 }}
                transition={{ duration: 0.2 }}
              >
                {area.name}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
