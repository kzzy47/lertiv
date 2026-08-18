import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import ServiceAreaMap from "@/components/ServiceAreaMapClient";

export default function ServiceArea() {
  return (
    <section id="service-area" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="font-mono-label text-[11px] text-accent">
              Where We Work
            </p>
            <SplitReveal
              as="h2"
              text="Tampa Bay and *Central* *Florida.*"
              className="font-display mt-4 max-w-md text-4xl leading-[1.05] text-text-primary md:text-5xl"
            />
            <p className="mt-6 max-w-sm text-sm text-text-secondary md:text-base">
              Click a city on the map to zoom in on that part of our service
              area.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ServiceAreaMap />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
