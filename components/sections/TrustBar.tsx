import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <Reveal>
          <div className="grid grid-cols-2 divide-y divide-border md:grid-cols-4 md:divide-y-0 md:divide-x">
            <div className="pb-6 pr-6 md:pb-0 md:px-8 md:first:pl-0 md:last:pr-0">
              <CountUp
                value={2011}
                format={false}
                className="font-display text-3xl text-text-primary md:text-4xl"
              />
              <p className="mt-1 text-xs text-text-secondary md:text-sm">
                Founded in Hillsborough County
              </p>
            </div>
            <div className="pb-6 pl-6 md:pb-0 md:px-8">
              <CountUp
                value={60}
                suffix="+"
                className="font-display text-3xl text-text-primary md:text-4xl"
              />
              <p className="mt-1 text-xs text-text-secondary md:text-sm">
                Employees across active crews
              </p>
            </div>
            <div className="pt-6 pr-6 md:pt-0 md:px-8">
              <p className="font-display text-3xl text-text-primary md:text-4xl">
                1,000s
              </p>
              <p className="mt-1 text-xs text-text-secondary md:text-sm">
                Completed installations
              </p>
            </div>
            <div className="pt-6 pl-6 md:pt-0 md:px-8 md:last:pr-0">
              <CountUp
                value={10}
                suffix="+"
                className="font-display text-3xl text-text-primary md:text-4xl"
              />
              <p className="mt-1 text-xs text-text-secondary md:text-sm">
                Communities served across Tampa Bay
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
