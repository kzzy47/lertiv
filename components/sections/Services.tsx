import Image from "next/image";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

const SERVICES = [
  {
    name: "Paver Patios & Driveways",
    description: "Foundational hardscape built to handle Florida weather and daily life.",
  },
  {
    name: "Outdoor Kitchens",
    description: "Full cook, prep, and gathering spaces designed around how your family entertains.",
  },
  {
    name: "Custom Pergolas",
    description: "Shade structures that extend living space and frame the yard.",
  },
  {
    name: "Pool-Deck Renovations",
    description: "Resurfacing and rebuilding decks that hold up to sun, chemicals, and time.",
  },
  {
    name: "Hardscape Construction",
    description: "Retaining walls, decorative walls, and structural stonework.",
  },
  {
    name: "Landscape Lighting",
    description: "Lighting design that makes outdoor spaces work after sunset.",
    image: "/images/firepit-poolside.jpg",
  },
  {
    name: "Artificial Turf",
    description: "Low-maintenance, year-round green for yards, pet areas, and commercial sites.",
  },
  {
    name: "Drainage Solutions",
    description: "Grading and drainage systems that solve Florida's hardest yard problem.",
  },
  {
    name: "Commercial & Fire Features",
    description: "Courtyards, entertainment spaces, and fire features for commercial properties.",
    image: "/images/golden-hour-water.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="font-mono-label text-[11px] text-accent">
            What We Build
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl uppercase leading-[0.95] text-text-primary md:text-5xl">
            Complete outdoor environments, not just installations.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={(i % 3) * 0.06}>
              <TiltCard className="h-full">
                <div className="group relative h-full overflow-hidden bg-background p-7 transition-colors hover:bg-surface">
                  {service.image && (
                    <>
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-25"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </>
                  )}
                  <div className="relative" style={{ transform: "translateZ(24px)" }}>
                    <p className="text-lg font-medium text-text-primary">
                      {service.name}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                      {service.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
