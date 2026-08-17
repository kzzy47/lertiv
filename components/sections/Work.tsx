import Reveal from "@/components/Reveal";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";

const PROJECTS = [
  { title: "Riverview Backyard Transformation", tag: "Pavers & Kitchen", src: "/images/pergola-outdoor-kitchen.jpg", wide: true },
  { title: "FishHawk Pool-Deck Rebuild", tag: "Pool Deck", src: "/images/aerial-pool-patio.jpg" },
  { title: "South Tampa Backyard Renovation", tag: "Pavers & Pool Deck", src: "/images/backyard-pool-patio.jpg" },
  { title: "Wesley Chapel New Construction", tag: "Full Exterior", src: "/images/florida-modern-home.jpg" },
  { title: "Brandon Commercial Courtyard", tag: "Commercial", src: "/images/patio-pool-kitchen.jpg" },
  { title: "Lithia Outdoor Kitchen Build", tag: "Outdoor Kitchen", src: "/images/sleek-outdoor-kitchen.jpg" },
];

export default function Work() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono-label text-[11px] text-accent">
                Our Work
              </p>
              <h2 className="font-display mt-4 max-w-xl text-4xl leading-[1.05] text-text-primary md:text-5xl">
                Projects across <em className="italic">Tampa Bay.</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-text-secondary">
              A sample of recent residential and commercial builds. Full
              before-and-after case studies coming soon.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 0.08}
              className={project.wide ? "sm:col-span-2" : undefined}
            >
              <div className="group">
                <PlaceholderPhoto
                  label={project.tag}
                  src={project.src}
                  alt={project.title}
                  className={`w-full transition-colors group-hover:border-border-hover ${project.wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}
                />
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <p className="font-display text-lg text-text-primary">
                    {project.title}
                  </p>
                  <p className="font-mono-label shrink-0 text-[10px] text-text-muted">
                    {project.tag}
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
