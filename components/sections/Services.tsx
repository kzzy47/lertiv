import Image from "next/image";
import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    name: "Paver Patios & Driveways",
    description: "Foundational hardscape built to handle Florida weather and daily life.",
    image: "/images/aerial-pool-patio.jpg",
  },
  {
    name: "Outdoor Kitchens",
    description: "Full cook, prep, and gathering spaces designed around how your family entertains.",
    image: "/images/sleek-outdoor-kitchen.jpg",
  },
  {
    name: "Custom Pergolas",
    description: "Shade structures that extend living space and frame the yard.",
    image: "/images/pergola-outdoor-kitchen.jpg",
  },
  {
    name: "Pool-Deck Renovations",
    description: "Resurfacing and rebuilding decks that hold up to sun, chemicals, and time.",
    image: "/images/backyard-pool-patio.jpg",
  },
  {
    name: "Outdoor Living Spaces",
    description: "Patios, courtyards, and gathering areas designed around how your family lives outside.",
    image: "/images/patio-pool-kitchen.jpg",
  },
  {
    name: "Commercial & Fire Features",
    description: "Courtyards, entertainment spaces, and fire features for commercial properties.",
    image: "/images/florida-modern-home.jpg",
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
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-[1.05] text-text-primary md:text-5xl">
            Complete outdoor environments, not just <em className="italic">installations.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={(i % 3) * 0.06}>
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 border-t border-border pt-5">
                  <p className="font-display text-lg text-text-primary">
                    {service.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
