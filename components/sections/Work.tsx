import Link from "next/link";
import Reveal from "@/components/Reveal";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import CursorLabel from "@/components/CursorLabel";
import { PROJECTS } from "@/lib/projects";

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
              A sample of recent residential and commercial builds across
              Tampa Bay.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={(i % 3) * 0.08}
              className={project.wide ? "sm:col-span-2" : undefined}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <CursorLabel label="View Project">
                  <PlaceholderPhoto
                    label={project.tag}
                    src={project.src}
                    alt={project.title}
                    className={`w-full transition-colors group-hover:border-border-hover ${project.wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}
                  />
                </CursorLabel>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <p className="font-display text-lg text-text-primary">
                    {project.title}
                  </p>
                  <p className="font-mono-label shrink-0 text-[10px] text-text-muted">
                    {project.tag}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
