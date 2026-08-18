import ParallaxImage from "@/components/ParallaxImage";
import SplitReveal from "@/components/SplitReveal";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <ParallaxImage
        src="/images/florida-modern-home.jpg"
        alt="Modern Florida home with paver driveway and manicured landscaping"
        priority
      />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pt-24 text-center md:px-10">
        <p className="font-mono-label mb-6 text-[11px] text-[#e7c9a6]">
          Tampa Bay &middot; Since 2011
        </p>
        <SplitReveal
          as="h1"
          text="Where *Florida* *life* happens."
          className="font-display max-w-3xl text-[9vw] leading-[1.02] text-[#f7f2e6] drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] md:text-6xl lg:text-[5rem]"
        />
        <p className="mt-7 max-w-xl text-base leading-relaxed text-[#f7f2e6]/85 md:text-lg">
          Paver patios, outdoor kitchens, pergolas, and full exterior
          transformations for homeowners, builders, and commercial clients
          across Tampa Bay.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="#contact" className="btn-primary">
            Request an Estimate
          </MagneticButton>
          <MagneticButton href="#work" className="btn-secondary text-[#f7f2e6]">
            See Our Work
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
