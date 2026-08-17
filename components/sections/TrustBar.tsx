import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            <div>
              <p className="font-display text-3xl text-text-primary md:text-4xl">
                <CountUp to={2011} duration={1200} />
              </p>
              <p className="mt-1 text-xs text-text-secondary md:text-sm">
                Founded in Hillsborough County
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-text-primary md:text-4xl">
                <CountUp to={60} suffix="+" />
              </p>
              <p className="mt-1 text-xs text-text-secondary md:text-sm">
                Employees across active crews
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-text-primary md:text-4xl">
                1,000s
              </p>
              <p className="mt-1 text-xs text-text-secondary md:text-sm">
                Completed installations
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-text-primary md:text-4xl">
                $11M&ndash;14M
              </p>
              <p className="mt-1 text-xs text-text-secondary md:text-sm">
                Annual revenue
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
