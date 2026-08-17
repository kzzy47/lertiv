import Reveal from "@/components/Reveal";

const AREAS = [
  "Tampa",
  "Brandon",
  "Riverview",
  "Valrico",
  "Lithia",
  "FishHawk",
  "Apollo Beach",
  "Wesley Chapel",
  "Lutz",
  "Plant City",
  "South Tampa",
  "Pinellas County",
  "Pasco County",
  "Polk County",
  "Manatee County",
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="font-mono-label text-[11px] text-accent">
            Where We Work
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl uppercase leading-[0.95] text-text-primary md:text-5xl">
            Tampa Bay and Central Florida.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-3">
            {AREAS.map((area) => (
              <span
                key={area}
                className="rounded-sm border border-border px-4 py-2 text-sm text-text-secondary"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
