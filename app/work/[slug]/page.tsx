import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import ParallaxImage from "@/components/ParallaxImage";
import MagneticButton from "@/components/MagneticButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { PROJECTS, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} | LERTIV`,
    description: project.overview,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
          <ParallaxImage src={project.src} alt={project.title} priority kenBurns={false} />

          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-14 md:px-10 md:pb-20">
            <p className="font-mono-label mb-4 text-[11px] text-[#e7c9a6]">
              {project.location} &middot; {project.tag}
            </p>
            <SplitReveal
              as="h1"
              text={project.title}
              className="font-display max-w-3xl text-4xl leading-[1.05] text-[#f7f2e6] drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] md:text-6xl"
            />
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-16">
              <Reveal>
                <p className="font-mono-label text-[11px] text-accent">Overview</p>
                <p className="font-display mt-4 text-2xl leading-snug text-text-primary md:text-3xl">
                  {project.overview}
                </p>

                <p className="font-mono-label mt-12 text-[11px] text-accent">
                  Project Highlights
                </p>
                <ul className="mt-5 flex flex-col gap-4">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 border-t border-border pt-4 text-sm leading-relaxed text-text-secondary md:text-base"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border border-border p-7 md:p-8">
                  <p className="font-mono-label text-[11px] text-accent">
                    Project Details
                  </p>
                  <dl className="mt-6 flex flex-col gap-5">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.1em] text-text-muted">
                        Location
                      </dt>
                      <dd className="mt-1 text-sm text-text-primary md:text-base">
                        {project.location}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.1em] text-text-muted">
                        Scope
                      </dt>
                      <dd className="mt-1 text-sm text-text-primary md:text-base">
                        {project.scope.join(", ")}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.1em] text-text-muted">
                        Timeline
                      </dt>
                      <dd className="mt-1 text-sm text-text-primary md:text-base">
                        {project.timeline}
                      </dd>
                    </div>
                  </dl>

                  <MagneticButton
                    href="/#contact"
                    strength={0.25}
                    className="btn-primary mt-8 w-full justify-center"
                  >
                    Start a Similar Project
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            {project.beforeAfter && (
              <Reveal delay={0.15} className="mt-20">
                <p className="font-mono-label text-center text-[11px] text-accent">
                  Drag To Compare
                </p>
                <SplitReveal
                  as="h2"
                  text="Before and *after.*"
                  className="font-display mt-4 text-center text-3xl leading-[1.05] text-text-primary md:text-4xl"
                />
                <BeforeAfterSlider
                  beforeSrc={project.beforeAfter.before}
                  afterSrc={project.beforeAfter.after}
                  beforeAlt={`${project.title} before`}
                  afterAlt={`${project.title} after`}
                  className="mt-10 aspect-[4/3] w-full md:aspect-[16/9]"
                />
              </Reveal>
            )}
          </div>
        </section>

        <section className="bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <p className="font-mono-label text-[11px] text-accent">
                More Work
              </p>
              <h2 className="font-display mt-4 max-w-xl text-3xl leading-[1.05] text-text-primary md:text-4xl">
                Other <em className="italic">recent builds.</em>
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.08}>
                  <Link href={`/work/${item.slug}`} className="group block">
                    <div className="relative aspect-[4/3] w-full overflow-hidden border border-border transition-colors group-hover:border-border-hover">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    </div>
                    <p className="font-display mt-4 text-base text-text-primary">
                      {item.title}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-12">
              <Link
                href="/#work"
                className="font-mono-label text-[11px] text-accent underline underline-offset-4"
              >
                View All Projects
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
