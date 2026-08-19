export type Project = {
  slug: string;
  title: string;
  tag: string;
  location: string;
  scope: string[];
  timeline: string;
  src: string;
  wide?: boolean;
  overview: string;
  highlights: string[];
  beforeAfter?: { before: string; after: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "riverview-backyard-transformation",
    title: "Riverview Backyard Transformation",
    tag: "Pavers & Kitchen",
    location: "Riverview, FL",
    scope: ["Paver Deck", "Outdoor Kitchen", "Pool Refinish", "Lighting"],
    timeline: "9 Weeks",
    src: "/images/pergola-outdoor-kitchen.jpg",
    wide: true,
    overview:
      "A dated, cracked pool deck and an unused side yard were holding this property back. LERTIV tore the old concrete deck out to the shell, rebuilt the pool cage, and laid a full travertine-look paver deck around a resurfaced pool. A built-in outdoor kitchen and covered lounge now anchor the space.",
    highlights: [
      "Full demo and haul-off of the original concrete deck and damaged screen enclosure",
      "Pool resurfacing and new waterline tile",
      "Travertine-pattern paver deck with integrated drainage",
      "Built-in stainless outdoor kitchen with bar seating",
      "Low-voltage landscape and step lighting",
    ],
    beforeAfter: {
      before: "/images/riverview-before.jpg",
      after: "/images/riverview-after.jpg",
    },
  },
  {
    slug: "fishhawk-pool-deck-rebuild",
    title: "FishHawk Pool-Deck Rebuild",
    tag: "Pool Deck",
    location: "FishHawk, FL",
    scope: ["Pool Deck", "Paver Patio", "Drainage"],
    timeline: "5 Weeks",
    src: "/images/aerial-pool-patio.jpg",
    overview:
      "Standing water and settling pavers around the pool were creating a safety issue for this FishHawk family. LERTIV pulled the deck, corrected the base grade and drainage, and reset the entire pool surround in a tighter, more contemporary paver pattern.",
    highlights: [
      "Full excavation and regrade for positive drainage away from the pool",
      "New compacted base and edge restraint system",
      "Reset paver deck in a large-format contemporary pattern",
      "Expanded lounge patio along the rear of the home",
    ],
  },
  {
    slug: "south-tampa-backyard-renovation",
    title: "South Tampa Backyard Renovation",
    tag: "Pavers & Pool Deck",
    location: "South Tampa, FL",
    scope: ["Pool Deck", "Paver Patio", "Landscaping"],
    timeline: "7 Weeks",
    src: "/images/backyard-pool-patio.jpg",
    overview:
      "A narrow South Tampa lot meant every square foot of the backyard had to work harder. LERTIV redesigned the pool deck footprint, added a dedicated lounge patio, and tied the whole space together with new landscaping and edging.",
    highlights: [
      "Redesigned pool deck footprint to open up usable yard space",
      "Paver patio extension with a dedicated lounge zone",
      "New planting beds and steel landscape edging",
      "Coordinated with the homeowner's pool contractor on timing",
    ],
  },
  {
    slug: "wesley-chapel-new-construction",
    title: "Wesley Chapel New Construction",
    tag: "Full Exterior",
    location: "Wesley Chapel, FL",
    scope: ["Driveway", "Walkways", "Landscaping", "Lighting"],
    timeline: "8 Weeks",
    src: "/images/florida-modern-home.jpg",
    overview:
      "Brought in during the final phase of a new-construction build, LERTIV handled the full exterior hardscape package: paver driveway, entry walkway, foundation planting, and landscape lighting, all coordinated directly with the builder's schedule.",
    highlights: [
      "Paver driveway and motor court",
      "Front entry walkway tied into the driveway pattern",
      "Foundation planting and sod installation",
      "Landscape and architectural lighting package",
    ],
  },
  {
    slug: "brandon-commercial-courtyard",
    title: "Brandon Commercial Courtyard",
    tag: "Commercial",
    location: "Brandon, FL",
    scope: ["Commercial Hardscape", "Outdoor Kitchen", "Seating"],
    timeline: "10 Weeks",
    src: "/images/patio-pool-kitchen.jpg",
    overview:
      "A commercial property owner wanted a shared courtyard that tenants would actually use. LERTIV built out a paver courtyard with a full outdoor kitchen and covered seating, sized and permitted for regular gatherings.",
    highlights: [
      "Commercial-grade paver base engineered for heavier foot traffic",
      "Full outdoor kitchen with commercial-spec appliances",
      "Covered seating structure and communal tables",
      "Permitting and inspections handled end to end",
    ],
  },
  {
    slug: "lithia-outdoor-kitchen-build",
    title: "Lithia Outdoor Kitchen Build",
    tag: "Outdoor Kitchen",
    location: "Lithia, FL",
    scope: ["Outdoor Kitchen", "Paver Patio"],
    timeline: "4 Weeks",
    src: "/images/sleek-outdoor-kitchen.jpg",
    overview:
      "This Lithia homeowner wanted a serious cooking setup, not an afterthought grill station. LERTIV built a full outdoor kitchen with a sleek, low-profile design into a new paver patio extension off the back of the house.",
    highlights: [
      "Built-in grill, side burner, and refrigeration",
      "Poured concrete counters with a custom finish",
      "Paver patio extension sized for a full dining set",
      "Gas and electrical rough-in coordinated with licensed trades",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
