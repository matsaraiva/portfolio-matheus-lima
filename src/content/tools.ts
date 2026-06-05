import type { ToolGroup } from "./types";

export const toolGroups: ToolGroup[] = [
  {
    title: "Data & BI",
    summary: "Modeling, analysis, reporting, and decision dashboards.",
    tools: ["SQL", "Power BI", "Tableau", "Excel", "Data modeling", "KPI design"],
  },
  {
    title: "Automation",
    summary: "Operational workflows, repetitive-process reduction, and integrations.",
    tools: ["API workflows", "Postman", "ETL routines", "Process mapping", "Scripting"],
  },
  {
    title: "AI / ML",
    summary: "Applied AI workflows and machine-assisted product or data operations.",
    tools: ["Prompt workflows", "AI-assisted analysis", "Classification", "Experiment design"],
  },
  {
    title: "Backend",
    summary: "Service logic, data exchange, and integration surfaces.",
    tools: ["REST APIs", "Node.js", "C#", "Python", "Authentication flows"],
  },
  {
    title: "Frontend",
    summary: "Interfaces for product, dashboards, tools, and portfolio storytelling.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Cloud / DevOps",
    summary: "Deployable systems, delivery workflows, and production awareness.",
    tools: ["GitHub", "Vercel", "Netlify", "Static hosting", "CI-ready builds"],
  },
  {
    title: "Business / Product",
    summary: "Problem framing, product decisions, and cross-functional communication.",
    tools: ["Product discovery", "Roadmapping", "Stakeholder communication", "Lean startup"],
  },
];

export const data2073Stack = [
  {
    name: "Unity / Game Client",
    category: "Product",
    note: "Product and client-side systems slot. Final scope and versions should be confirmed.",
  },
  {
    name: "API Workflows",
    category: "Integration",
    note: "Postman collections, backend services, integrations, and data exchange workflows.",
  },
  {
    name: "Dashboards",
    category: "Data",
    note: "Power BI, Tableau, custom dashboards, or internal reporting tools can be documented here.",
  },
  {
    name: "Automation",
    category: "Operations",
    note: "Pipelines, scripts, QA workflows, and process automation for repeatable operations.",
  },
  {
    name: "Web3 Ecosystem",
    category: "Platform",
    note: "Public Data2073 materials mention a Web3 ecosystem. Matheus's exact role should be confirmed before adding deeper claims.",
  },
  {
    name: "Product Analytics",
    category: "Decision Systems",
    note: "Telemetry, retention, monetization, support, or operations metrics can be added when available.",
  },
];
