import type { CompanySlot } from "./types";

export const companies: CompanySlot[] = [
  {
    name: "Data2073",
    relationship: "Featured product",
    note: "Publicly listed as a strategy trading card game ecosystem. Logo pending approval.",
    status: "public",
  },
  {
    name: "Osten Games",
    relationship: "Public LinkedIn association",
    note: "LinkedIn public snippet lists Osten Games. Exact role, dates, and display copy are pending confirmation.",
    status: "public",
  },
  {
    name: "Client / partner slot",
    relationship: "To be added",
    note: "Reserved for an approved client, partner, or company name and logo.",
    status: "placeholder",
  },
  {
    name: "Client / partner slot",
    relationship: "To be added",
    note: "Reserved until Matheus confirms it is safe to publish.",
    status: "placeholder",
  },
];

export const data2073Outcomes = [
  {
    label: "Product scope",
    value: "Add scope",
    detail: "Use this for systems, features, dashboards, integrations, or releases.",
    isPlaceholder: true,
  },
  {
    label: "Operational impact",
    value: "Add metric",
    detail: "Example: time saved, defects reduced, reporting cadence improved.",
    isPlaceholder: true,
  },
  {
    label: "Business signal",
    value: "Add result",
    detail: "Example: users, revenue signal, partner milestone, adoption, retention.",
    isPlaceholder: true,
  },
  {
    label: "Technical depth",
    value: "Add stack",
    detail: "Use confirmed tools and architecture details only.",
    isPlaceholder: true,
  },
];

export const workflow = [
  {
    title: "Map the product problem",
    description:
      "Define the gameplay, business, reporting, or operational question before selecting tools.",
  },
  {
    title: "Connect the systems",
    description:
      "Tie together product data, APIs, dashboards, internal tools, and delivery workflows.",
  },
  {
    title: "Build measurable outputs",
    description:
      "Turn raw work into usable dashboards, automations, QA flows, case studies, and decision artifacts.",
  },
  {
    title: "Document proof",
    description:
      "Capture screenshots, videos, before-and-after context, outcomes, and lessons for each case study.",
  },
];
