import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import ServiceAreaMap from "@/components/ServiceAreaMap";

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
          <SplitReveal
            as="h2"
            text="Tampa Bay and *Central* *Florida.*"
            className="font-display mt-4 max-w-2xl text-4xl leading-[1.05] text-text-primary md:text-5xl"
          />
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {AREAS.map((area) => (
                <span
                  key={area}
                  className="border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ServiceAreaMap />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
