import Reveal from "@/components/Reveal";

const QUOTES = [
  {
    quote:
      "I don't want to coordinate five different companies. LERTIV took responsibility for the whole thing, start to finish.",
    name: "Riverview Homeowner",
  },
  {
    quote:
      "We've hired LERTIV three times now. Driveway, then the patio, then the outdoor kitchen. They're always our first call.",
    name: "Valrico Homeowner",
  },
  {
    quote:
      "Builders and property managers know the name. Their crews show up, communicate, and the finished work looks expensive.",
    name: "General Contractor, Tampa Bay",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="font-mono-label text-[11px] text-accent">
            What Customers Say
          </p>
          <h2 className="font-display mt-4 max-w-xl text-4xl leading-[1.05] text-text-primary md:text-5xl">
            Word of mouth is <em className="italic">our marketing.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {QUOTES.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <blockquote className="flex h-full flex-col border-t border-border pt-6">
                <p className="font-display text-lg leading-snug text-text-primary italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <cite className="mt-6 text-xs not-italic uppercase tracking-[0.1em] text-text-muted">
                  {item.name}
                </cite>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
