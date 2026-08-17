import Image from "next/image";

const SERVICES = [
  "Paver Patios",
  "Outdoor Kitchens",
  "Pergolas",
  "Pool-Deck Renovations",
  "Hardscape Construction",
  "Landscape Lighting",
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:px-10">
        <div>
          <div className="w-fit overflow-hidden rounded-sm">
            <Image
              src="/brand/lertiv-mark-paper.png"
              alt="LERTIV"
              width={1201}
              height={318}
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-secondary">
            Premium outdoor construction and property enhancement, built for
            homeowners, builders, and commercial clients across Tampa Bay.
          </p>
        </div>

        <div>
          <p className="font-mono-label text-[10.5px] text-text-muted">
            Services
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {SERVICES.map((service) => (
              <li key={service} className="text-sm text-text-secondary">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-[10.5px] text-text-muted">
            Company
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-text-secondary">
            <li><a href="#about" className="hover:text-text-primary">About LERTIV</a></li>
            <li><a href="#work" className="hover:text-text-primary">Our Work</a></li>
            <li><a href="#service-area" className="hover:text-text-primary">Service Area</a></li>
            <li><a href="#contact" className="hover:text-text-primary">Request an Estimate</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-[10.5px] text-text-muted">
            Get In Touch
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-text-secondary">
            <li>Hillsborough County, Florida</li>
            <li>Serving Tampa Bay &amp; Central Florida</li>
            <li className="pt-1">
              <a href="#contact" className="text-text-primary underline underline-offset-4">
                Start a Project
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-text-muted md:flex-row md:items-center md:justify-between md:px-10">
          <p>&copy; {new Date().getFullYear()} LERTIV. All rights reserved.</p>
          <p>Founded 2011 &middot; Hillsborough County, FL</p>
        </div>
      </div>
    </footer>
  );
}
