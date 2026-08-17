import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-forest">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-10 md:py-32">
        <Reveal>
          <p className="font-mono-label text-[11px] text-[#d9a877]">
            Start a Project
          </p>
          <h2 className="font-display mt-4 max-w-lg text-4xl leading-[1.05] text-on-forest md:text-5xl">
            Request an <em className="italic">estimate.</em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-on-forest-secondary md:text-base">
            Tell us about your property and what you&rsquo;re looking to
            build. A member of the LERTIV team will follow up to schedule a
            walkthrough.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="flex flex-col gap-5 rounded-2xl border border-on-forest-border bg-surface-elevated p-7 md:p-9">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.1em] text-text-muted">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="text-xs uppercase tracking-[0.1em] text-text-muted">
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                  placeholder="(813) 555-0100"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-email" className="text-xs uppercase tracking-[0.1em] text-text-muted">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label htmlFor="contact-project-type" className="text-xs uppercase tracking-[0.1em] text-text-muted">
                Project Type
              </label>
              <select
                id="contact-project-type"
                name="projectType"
                defaultValue=""
                className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
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
              <label htmlFor="contact-details" className="text-xs uppercase tracking-[0.1em] text-text-muted">
                Project Details
              </label>
              <textarea
                id="contact-details"
                name="details"
                rows={4}
                className="mt-2 w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                placeholder="Tell us about your property and goals"
              />
            </div>

            <button type="submit" className="btn-primary mt-2 w-fit">
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
