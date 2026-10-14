import type { Project } from "./types";

export const webGameLinks: Record<string, { demo: string; source: string }> = {
  "sunspire-threejs": {
    demo: "https://matsaraiva.github.io/sunspire-threejs/",
    source: "https://github.com/matsaraiva/sunspire-threejs",
  },
  "beacon-shift-phaser": {
    demo: "https://matsaraiva.github.io/beacon-shift-phaser/",
    source: "https://github.com/matsaraiva/beacon-shift-phaser",
  },
  "circuit-bloom-pixijs": {
    demo: "https://matsaraiva.github.io/circuit-bloom-pixijs/",
    source: "https://github.com/matsaraiva/circuit-bloom-pixijs",
  },
};

export const webGames: Project[] = [
  {
    slug: "sunspire-threejs",
    title: "Sunspire",
    summary:
      "A 3D stacking game: align moving slabs across twelve floors, where each imperfect cut narrows the next target.",
    problem:
      "A stacking game needs readable placements and consistent outcomes, even when an animation is still playing.",
    solution:
      "Built a procedural Three.js scene around analytic interval overlap. Each placement keeps only the intersection of two slabs, alternates between X and Z, and advances toward a twelve-floor win.",
    role:
      "Independent project · AI-assisted development",
    tools: ["Three.js", "TypeScript", "Vite", "Analytic geometry"],
    company: "Independent project",
    year: "2026",
    images: [
      {
        type: "image",
        src: "/projects/sunspire-threejs/cover.webp",
        alt: "Sunspire browser game cover",
        caption: "Sunspire, a procedural 3D stacking game.",
        provider: "local",
      },
    ],
    videos: [],
    links: [
      { label: "Play demo", href: webGameLinks["sunspire-threejs"].demo },
      { label: "Source code", href: webGameLinks["sunspire-threejs"].source },
      { label: "QA report", href: "https://github.com/matsaraiva/sunspire-threejs/blob/main/QA.md" },
    ],
    results: [
      "Published a complete twelve-floor run with win, miss, and restart states.",
      "Computed each cut from interval intersections before updating the scene animation.",
      "Passed 26 tests and desktop and touch-emulated Chromium runs covering placement, pause, replay, and a full win.",
    ],
    tags: ["Three.js", "3D", "Stacking", "Browser Game"],
    category: "Browser Game",
    status: "Released",
    caseStudy: {
      implementation: [
        "Intersected the current and moving slab intervals analytically; alternate X and Z cuts update the next slab's center and dimensions.",
        "Separated placement math from time-based animation, with a capped simulation step and reusable scene resources.",
        "Added mouse, touch, button, and Space placement, plus pause/resume, restart, reduced-motion behavior, and a local-best fallback.",
      ],
      ownership: [
        "Matheus supplied the portfolio direction and approved the scope; Codex assisted with implementation and verification.",
      ],
      constraints: [
        "Requires WebGL 2. Physical Safari/iPhone compatibility and hardware performance have not been verified; no frame-rate claim is made.",
      ],
    },
    featured: false,
  },
  {
    slug: "beacon-shift-phaser",
    title: "Beacon Shift",
    summary:
      "A sixty-second lighthouse survival game: aim the light at approaching mist creatures and keep three lives through the night.",
    problem:
      "A short survival game needs precise aiming and predictable enemy resolution as creatures approach from every direction.",
    solution:
      "Built a Phaser game around a deterministic simulation. Creatures must remain inside the lighthouse's light cone for a continuous exposure period to be repelled before reaching the shore.",
    role:
      "Independent project · AI-assisted development",
    tools: ["Phaser", "TypeScript", "Vite", "Deterministic simulation"],
    company: "Independent project",
    year: "2026",
    images: [
      {
        type: "image",
        src: "/projects/beacon-shift-phaser/cover.webp",
        alt: "Beacon Shift browser game cover",
        caption: "Beacon Shift, a lighthouse survival game.",
        provider: "local",
      },
    ],
    videos: [],
    links: [
      { label: "Play demo", href: webGameLinks["beacon-shift-phaser"].demo },
      { label: "Source code", href: webGameLinks["beacon-shift-phaser"].source },
      { label: "QA report", href: "https://github.com/matsaraiva/beacon-shift-phaser/blob/main/QA.md" },
    ],
    results: [
      "Published a playable sixty-second survival run with three lives, scoring, pause, and restart.",
      "Used continuous light-cone exposure and stable event ordering to resolve repels, arrivals, and end states.",
      "Passed 12 simulation tests and Chromium checks for a real-time survival run, mouse and touch aiming, and keyboard rotation.",
    ],
    tags: ["Phaser", "Survival", "Input Systems", "Browser Game"],
    category: "Browser Game",
    status: "Released",
    caseStudy: {
      implementation: [
        "Advanced game state in fixed 1/60-second steps, capped long frame input, and resolved exposure, arrivals, damage, and survival in a defined order.",
        "Built the Phaser scene with procedural lighthouse, sea, and creature graphics in a square arena; angle wrapping keeps aim stable across the -π/π boundary.",
        "Mapped mouse and touch aiming to the canvas and added keyboard rotation, pause/resume, restart, and local-score storage with a failure fallback.",
      ],
      ownership: [
        "Matheus supplied the portfolio direction and approved the scope; Codex assisted with implementation and verification.",
      ],
      constraints: [
        "Physical Safari/iPhone compatibility and hardware performance have not been verified; the recorded callback intervals are not a frame-rate benchmark.",
      ],
    },
    featured: false,
  },
  {
    slug: "circuit-bloom-pixijs",
    title: "Circuit Bloom",
    summary:
      "A botanical Lights Out puzzle with three fixed 4×4 gardens: flip a flower to toggle it and its orthogonal neighbors, then light every cell.",
    problem:
      "A small puzzle rule should stay clear as players switch between mouse, keyboard, and touch input.",
    solution:
      "Built three reproducible boards with PixiJS graphics and an immediate state model. Each move flips one flower and its up, down, left, and right neighbors; the player solves each garden before moving on.",
    role:
      "Independent project · AI-assisted development",
    tools: ["PixiJS", "TypeScript", "Vite", "Lights Out puzzles"],
    company: "Independent project",
    year: "2026",
    images: [
      {
        type: "image",
        src: "/projects/circuit-bloom-pixijs/cover.webp",
        alt: "Circuit Bloom browser game cover",
        caption: "Circuit Bloom, a three-garden Lights Out puzzle.",
        provider: "local",
      },
    ],
    videos: [],
    links: [
      { label: "Play demo", href: webGameLinks["circuit-bloom-pixijs"].demo },
      { label: "Source code", href: webGameLinks["circuit-bloom-pixijs"].source },
      { label: "QA report", href: "https://github.com/matsaraiva/circuit-bloom-pixijs/blob/main/QA.md" },
    ],
    results: [
      "Published three fixed 4×4 gardens; verified known solutions in two, three, and four moves.",
      "Made each move update the puzzle immediately, with a deliberate next-garden action after a win.",
      "Passed 11 rules and state tests; browser checks solved all gardens with mouse, keyboard, and touch.",
    ],
    tags: ["PixiJS", "Puzzle", "Lights Out", "Browser Game"],
    category: "Browser Game",
    status: "Released",
    caseStudy: {
      implementation: [
        "Used immutable 4×4 board operations and three fixed levels; each cell toggles itself and its in-bounds orthogonal neighbors.",
        "Rendered prebuilt flower graphics in PixiJS and scaled a fixed board coordinate space as the canvas resizes.",
        "Kept controls and announcements in the DOM, with keyboard cell selection, mouse and touch activation, reset/replay, and reduced-motion support.",
      ],
      ownership: [
        "Matheus supplied the portfolio direction and approved the scope; Codex assisted with implementation and verification.",
      ],
      constraints: [
        "Requires WebGL. Physical Safari/iPhone compatibility and hardware performance have not been verified; no frame-rate claim is made.",
      ],
    },
    featured: false,
  },
];
