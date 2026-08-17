import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-10 md:py-32">
        <Reveal>
          <p className="font-mono-label text-[11px] text-accent">
            Start a Project
          </p>
          <h2 className="font-display mt-4 max-w-lg text-4xl uppercase leading-[0.95] text-text-primary md:text-5xl">
            Request an estimate.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-text-secondary md:text-base">
            Tell us about your property and what you&rsquo;re looking to
            build. A member of the LERTIV team will follow up to schedule a
            walkthrough.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.1em] text-text-muted">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.1em] text-text-muted">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                  placeholder="(813) 555-0100"
                />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.1em] text-text-muted">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.1em] text-text-muted">
                Project Type
              </label>
              <select
                name="projectType"
                defaultValue=""
                className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Paver Patio / Driveway</option>
                <option>Outdoor Kitchen</option>
                <option>Pergola</option>
                <option>Pool-Deck Renovation</option>
                <option>Commercial Project</option>
                <option>Something Else</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.1em] text-text-muted">
                Project Details
              </label>
              <textarea
                name="details"
                rows={4}
                className="mt-2 w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                placeholder="Tell us about your property and goals"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-fit rounded-sm bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors hover:brightness-110"
            >
              Submit Request
            </button>
            <p className="text-xs text-text-muted">
              Form submission and lead routing will connect to CRM in the
              next phase.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
