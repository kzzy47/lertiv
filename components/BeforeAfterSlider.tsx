"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden border border-border ${className}`}>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage src={beforeSrc} alt={beforeAlt} style={{ objectFit: "cover" }} />
        }
        itemTwo={
          <ReactCompareSliderImage src={afterSrc} alt={afterAlt} style={{ objectFit: "cover" }} />
        }
        handle={
          <div className="flex h-full w-[2px] items-center justify-center bg-white/90">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L2 8L6 13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 3L14 8L10 13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        }
        className="h-full w-full"
      />
      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-white backdrop-blur-sm">
        Before
      </div>
      <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-white backdrop-blur-sm">
        After
      </div>
    </div>
  );
}
