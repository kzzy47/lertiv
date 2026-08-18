import Reveal from "@/components/Reveal";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import SplitReveal from "@/components/SplitReveal";

export default function About() {
  return (
    <section id="about" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-10 md:py-32">
        <Reveal>
          <div className="relative">
            <PlaceholderPhoto
              label="Founder / Crew Photography"
              src="/images/founder-adrian-veltri.png"
              alt="Adrian Veltri, founder of LERTIV, on a completed outdoor kitchen and pool project"
              className="aspect-[4/5] w-full"
              objectPosition="75% center"
            />
            <div className="absolute -bottom-6 left-6 border border-border bg-surface-elevated px-5 py-4">
              <p className="font-display text-2xl text-text-primary">Est. 2011</p>
              <p className="mt-0.5 text-xs text-text-muted">Hillsborough County, FL</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono-label text-[11px] text-accent">
            Our Story
          </p>
          <SplitReveal
            as="h2"
            text="Founded on a pickup truck. *Built* *on* *referrals.*"
            className="font-display mt-4 text-4xl leading-[1.05] text-text-primary md:text-5xl"
          />
          <div className="mt-8 flex flex-col gap-4 text-sm leading-relaxed text-text-secondary md:text-base">
            <p>
              LERTIV was founded in 2011 by Adrian Veltri, a Hillsborough
              County tradesman who started out loading pavers and digging
              drainage trenches. The name is an intentional rearrangement of
              his last name, VELTRI, built to become bigger than one person.
            </p>
            <p>
              The first job came from a neighbor in Riverview. It led to
              another, then another. Fifteen years later, LERTIV operates
              multiple crews across Tampa Bay, handling everything from
              $15,000 residential upgrades to six-figure commercial
              transformations, almost entirely on word of mouth.
            </p>
            <p>
              We&rsquo;re known for three things: we show up, we solve
              problems instead of just selling installs, and the finished
              work looks expensive.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
