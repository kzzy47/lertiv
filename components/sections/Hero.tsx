import ParallaxImage from "@/components/ParallaxImage";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <ParallaxImage
        src="/images/night-pool-modern.jpg"
        alt="Modern pool and patio lit at night"
        priority
      />

      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <p className="font-mono-label mb-5 text-[11px] text-accent">
          Tampa Bay, Since 2011
        </p>
        <h1 className="font-display max-w-3xl text-[13vw] uppercase leading-[0.95] text-text-primary md:text-6xl lg:text-7xl">
          LERTIV builds the spaces where Florida life happens.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
          Paver patios, outdoor kitchens, pergolas, and full exterior
          transformations for homeowners, builders, and commercial clients
          across Tampa Bay.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-sm bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors hover:brightness-110"
          >
            Request an Estimate
          </a>
          <a
            href="#work"
            className="rounded-sm border border-border-hover px-7 py-3.5 text-sm font-medium text-text-primary transition-colors hover:border-text-secondary"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
