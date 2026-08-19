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
    <footer className="bg-forest">
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
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-on-forest-secondary">
            Premium outdoor construction and property enhancement, built for
            homeowners, builders, and commercial clients across Tampa Bay.
          </p>
        </div>

        <div>
          <p className="font-mono-label text-[10.5px] text-on-forest-secondary/70">
            Services
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {SERVICES.map((service) => (
              <li key={service} className="text-sm text-on-forest-secondary">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-[10.5px] text-on-forest-secondary/70">
            Company
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-on-forest-secondary">
            <li><a href="/#about" className="hover:text-on-forest">About LERTIV</a></li>
            <li><a href="/#work" className="hover:text-on-forest">Our Work</a></li>
            <li><a href="/#service-area" className="hover:text-on-forest">Service Area</a></li>
            <li><a href="/#contact" className="hover:text-on-forest">Request an Estimate</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-[10.5px] text-on-forest-secondary/70">
            Get In Touch
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-on-forest-secondary">
            <li>Hillsborough County, Florida</li>
            <li>Serving Tampa Bay &amp; Central Florida</li>
            <li className="pt-1">
              <a href="/#contact" className="text-on-forest underline underline-offset-4">
                Start a Project
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-on-forest-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-on-forest-secondary/70 md:flex-row md:items-center md:justify-between md:px-10">
          <p>&copy; {new Date().getFullYear()} LERTIV. All rights reserved.</p>
          <p>
            Founded 2011 &middot; Hillsborough County, FL &middot; Built by{" "}
            <a
              href="https://vaylostudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-forest underline underline-offset-4 hover:text-on-forest-secondary"
            >
              Vaylo Studios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
