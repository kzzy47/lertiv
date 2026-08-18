import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Transformation() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="font-mono-label text-center text-[11px] text-accent">
            Drag To Compare
          </p>
          <SplitReveal
            as="h2"
            text="Same *dirt.* Different *result.*"
            className="font-display mt-4 text-center text-4xl leading-[1.05] text-text-primary md:text-5xl"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <BeforeAfterSlider
            beforeSrc="/images/paver-install-before.jpg"
            afterSrc="/images/patio-pool-kitchen.jpg"
            beforeAlt="Paver installation in progress"
            afterAlt="Finished paver patio and outdoor kitchen"
            className="mt-14 aspect-[4/3] w-full md:aspect-[16/10]"
          />
        </Reveal>
      </div>
    </section>
  );
}
