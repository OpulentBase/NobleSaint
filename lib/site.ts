export const site = {
  name: "Noble Saint",
  legalName: "Noble Saint Group",
  tagline: "Landscapes, hardscapes and pools, built to outlast us.",
  url: "https://noblesaintgroup.com",
  contact: {
    person: "Alfredo Guerrero",
    phone: "714-585-6835",
    phoneHref: "tel:+17145856835",
    email: "noblesaintgroup@gmail.com",
    emailHref: "mailto:noblesaintgroup@gmail.com",
  },
  region: "Orange County & Southern California",
  founded: 2004,
} as const;

export type Service = {
  code: string;
  title: string;
  lede: string;
  scope: string[];
};

export const services: Service[] = [
  {
    code: "A",
    title: "Landscapes",
    lede: "Grading, drainage, irrigation and a planting palette chosen for the way your light actually falls.",
    scope: [
      "Front and rear yard design",
      "Specimen trees & mature planting",
      "Drainage and grading correction",
      "Smart irrigation & low-water palettes",
      "Landscape lighting",
      "Sod, meadow and turf",
    ],
  },
  {
    code: "B",
    title: "Hardscapes",
    lede: "Stone set on a base that was built right. Joints that stay tight through twenty summers.",
    scope: [
      "Travertine, porcelain & natural stone",
      "Poured and stamped concrete",
      "Retaining & seat walls",
      "Driveways and motor courts",
      "Pergolas, pavilions & outdoor kitchens",
      "Fire features and fire pits",
    ],
  },
  {
    code: "C",
    title: "Pools",
    lede: "New gunite builds and full renovations, from the shell and the plumbing up to the coping you touch.",
    scope: [
      "New gunite pools & spas",
      "Full resurface and re-plaster",
      "Tile, coping & waterline detail",
      "Equipment, automation & heating",
      "Baja shelves, spillways, scuppers",
      "Deck resurfacing and surrounds",
    ],
  },
];

export const sequence = [
  {
    n: "01",
    title: "Walk the property",
    body: "We meet on site, at your home. We look at grade, drainage, sun, soil and the way you already use the yard. No charge, no pressure.",
  },
  {
    n: "02",
    title: "Draw the plan",
    body: "You get a plan and a written scope: materials named, dimensions called out, and a line-item price. What is in the plan is what gets built.",
  },
  {
    n: "03",
    title: "Build the base",
    body: "Demo, grading, drainage, footings, plumbing and electrical. The part nobody photographs is the part that decides how the project ages.",
  },
  {
    n: "04",
    title: "Set the finish",
    body: "Stone, plaster, coping, plaster cure, planting and lighting. Alfredo is on site through finish work, not just at the signing.",
  },
  {
    n: "05",
    title: "Hand it over",
    body: "We walk it together, correct anything on the list, and show you how to run the equipment. Then we stay reachable.",
  },
];

export const standards = [
  {
    title: "One crew, one name",
    body: "The people who start your project are the people who finish it. No rotating subs you have never met working behind your house.",
  },
  {
    title: "Base course before beauty",
    body: "Compaction, drainage and footing depth get done to spec even though no one will ever see them. That is the whole difference at year ten.",
  },
  {
    title: "A father's twenty years",
    body: "Two decades of what holds and what fails in this soil and this climate, applied to every detail we draw.",
  },
  {
    title: "The property stays lived in",
    body: "Dust control, protected access, clean site at the end of every day. You should be able to live at home while we work.",
  },
];
