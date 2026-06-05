import type { Project } from "./types";

export const projects: Project[] = [
  // TODO: Replace placeholder Data2073 copy with confirmed role, year, media, and outcomes.
  {
    slug: "data2073-product-systems",
    title: "Data2073 Product Systems",
    summary:
      "A featured case study entry for Matheus's Data2073 work across product systems, integrations, dashboards, and technical delivery.",
    problem:
      "Problem statement to confirm: describe the concrete product or business problem Matheus solved for Data2073, including the audience, constraint, and decision pressure.",
    solution:
      "Solution details to confirm: document the systems built, dashboards shipped, automations created, integrations connected, or product decisions supported.",
    role:
      "Role to confirm: Matheus's exact responsibilities, ownership level, collaborators, and safe public disclosure scope.",
    tools: ["Data2073", "Unity", "APIs", "Dashboards", "Automation", "Product Analytics"],
    company: "Data2073 / Osten Games",
    year: "Year to add",
    images: [
      {
        type: "image",
        src: "/projects/data2073-dashboard-automation/dashboard-overview.png",
        alt: "Placeholder dashboard overview for a Data2073 case study",
        caption: "Placeholder visual. Replace with an approved Data2073 screenshot.",
        isPlaceholder: true,
      },
      {
        type: "image",
        src: "/projects/data2073-dashboard-automation/workflow-map.png",
        alt: "Placeholder workflow map for Data2073 integrations",
        caption: "Placeholder workflow map for integrations and automation.",
        isPlaceholder: true,
      },
    ],
    videos: [],
    links: [
      {
        label: "Public Data2073 page",
        href: "https://www.immutable.com/play/data2073",
      },
    ],
    results: [
      "Outcome to add: measurable business or product result.",
      "Technical result to add: reliability, speed, reporting quality, or workflow improvement.",
      "Impact to add: stakeholder, team, or user-facing effect.",
    ],
    tags: ["Data2073", "Product", "Data", "Automation"],
    category: "Featured Case Study",
    featured: true,
    isPlaceholder: true,
  },
  // TODO: Replace placeholder automation copy with confirmed workflow, API, and operations details.
  {
    slug: "data2073-api-automation",
    title: "Data2073 API & Automation Workflows",
    summary:
      "A case study slot for API, Postman, backend, workflow, QA, or operations automation around Data2073.",
    problem:
      "Problem statement to confirm: manual updates, unreliable handoffs, missing visibility, slow QA, or fragmented product data.",
    solution:
      "Solution details to confirm: automation architecture, API surfaces, data flow, validation steps, and the resulting operational workflow.",
    role:
      "Role to confirm: designer, developer, analyst, integrator, QA support, product owner, collaborator, or another exact scope.",
    tools: ["Postman", "REST APIs", "Automation", "QA flows", "Documentation"],
    company: "Data2073 / Osten Games",
    year: "Year to add",
    images: [
      {
        type: "image",
        src: "/projects/data2073-battledeck-systems/api-flow.png",
        alt: "Placeholder API flow for a Data2073 automation case study",
        caption: "Placeholder API flow. Replace with approved diagrams or screenshots.",
        isPlaceholder: true,
      },
    ],
    videos: [
      {
        type: "video",
        src: "",
        alt: "Video slot for Data2073 automation walkthrough",
        caption: "Video walkthrough slot. Add an approved link or local MP4 when available.",
        provider: "local",
        isPlaceholder: true,
      },
    ],
    links: [
      {
        label: "Postman workspace reference",
        href: "https://www.postman.com/data2073",
      },
    ],
    results: [
      "Outcome to add: time saved or workflow frequency improved.",
      "Technical result to add: reliability, QA, or handoff improvement.",
      "Impact to add: business owner or product team effect.",
    ],
    tags: ["Data2073", "API", "Automation", "Operations"],
    category: "Workflow Case Study",
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: "portfolio-case-study-platform",
    title: "Portfolio Case Study Platform",
    summary:
      "A static, content-driven Next.js portfolio system designed to help Matheus publish project proof, media, and outcomes quickly.",
    problem:
      "Matheus needed a professional portfolio that could highlight Data2073 and scale into richer case studies without scattering content through component code.",
    solution:
      "The site uses reusable sections, typed case study entries, static project detail pages, media gallery support, theme-aware styling, and deploy-ready static export settings.",
    role:
      "Portfolio architecture, content system, product narrative, frontend implementation, visual system, and deployment documentation.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Static Export", "Content Modeling"],
    company: "Personal portfolio",
    year: "2026",
    images: [
      {
        type: "image",
        src: "/projects/portfolio-platform/portfolio-system.png",
        alt: "Placeholder image of the portfolio content system",
        caption: "Current portfolio architecture placeholder.",
        isPlaceholder: true,
      },
    ],
    videos: [],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/matsaraiva/portfolio-matheus-lima",
      },
    ],
    results: [
      "Ready-to-edit project case study entries.",
      "Static export support for Vercel, Netlify, and GitHub Pages.",
      "Media-ready case study pages for images and videos.",
    ],
    tags: ["Portfolio", "Frontend", "Content System"],
    category: "Platform",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
