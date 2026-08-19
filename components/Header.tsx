"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MagneticButton from "@/components/MagneticButton";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Service Area", href: "/#service-area" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = solid || open;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        dark
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link href="/#top" className="flex items-center gap-2 overflow-hidden rounded-sm">
          <Image
            src={dark ? "/brand/lertiv-mark-ink.png" : "/brand/lertiv-mark-paper.png"}
            alt="LERTIV"
            width={1201}
            height={318}
            priority
            className="h-7 w-auto object-contain md:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono-label text-[11px] transition-colors ${
                dark
                  ? "text-text-secondary hover:text-text-primary"
                  : "text-[#f7f2e6]/85 hover:text-[#f7f2e6]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MagneticButton
          href="/#contact"
          strength={0.2}
          className={`hidden text-xs font-medium uppercase tracking-[0.1em] transition-colors md:inline-block ${
            dark
              ? "border-b border-accent pb-1 text-text-primary hover:border-text-primary"
              : "border-b border-[#f7f2e6]/60 pb-1 text-[#f7f2e6] hover:border-[#f7f2e6]"
          }`}
        >
          Request an Estimate
        </MagneticButton>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center border md:hidden ${
            dark ? "border-border text-text-primary" : "border-[#f7f2e6]/50 text-[#f7f2e6]"
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[6px] h-px w-4 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[12px] h-px w-4 bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              Request an Estimate
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
