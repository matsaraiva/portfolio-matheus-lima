import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { flagshipSlugs } from "@/content/engineering";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { withBasePath } from "@/lib/media";

export function ProjectsSection() {
  const flagship = projects.find((project) => project.slug === flagshipSlugs[0])!;
  const supporting = flagshipSlugs.slice(1).map((slug) => projects.find((project) => project.slug === slug)!);

  return (
    <section className="section-shell bg-white dark:bg-neutral-950" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Selected work / 01—03" title="Games built. Systems connected." description="Three projects that show my work across gameplay, multiplayer infrastructure, and game architecture." />
          <Link className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300" href="/#more-projects">Explore all projects <ArrowUpRight aria-hidden size={16} /></Link>
        </div>
        <article className="mt-10 grid overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-neutral-900 lg:grid-cols-[1.2fr_1fr]">
          <Link aria-label="View Data2073 multiplayer case study" className="relative block min-h-64 lg:min-h-96" href={`/projects/${flagship.slug}/`}>
            <Image alt={flagship.images[0].alt} className="object-cover" fill sizes="(max-width: 1023px) 100vw, 60vw" src={withBasePath(flagship.images[0].src)} />
            <span className="absolute left-5 top-5 rounded-full bg-neutral-950/90 px-3 py-1.5 text-xs font-semibold text-white">{flagship.category}</span>
          </Link>
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-300">01 / Multiplayer & Services</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Data2073 Battle Deck</h3>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Multiplayer & LiveOps · Osten Games · {flagship.year}</p>
            <p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-300">Unity multiplayer engineering across matchmaking, dedicated servers, and live-service integrations for PC and mobile.</p>
            <div className="mt-6 border-l-2 border-emerald-600 pl-4 dark:border-emerald-300">
              <p className="text-xs font-semibold uppercase tracking-wider">My contribution</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">Netcode integration, session flows, backend connections, and production validation.</p>
            </div>
            <Link className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300" href={`/projects/${flagship.slug}/`}>Inside the multiplayer systems <ArrowUpRight aria-hidden size={17} /></Link>
          </div>
        </article>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {supporting.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              eyebrow={idx === 0 ? "02 / Shipped Steam Game" : "03 / Architecture & Bot AI"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function MoreProjectsSection() {
  const remaining = projects.filter((project) => !flagshipSlugs.includes(project.slug));
  return (
    <section className="section-shell bg-white dark:bg-neutral-950" id="more-projects">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Keep exploring" title="More Projects" description="More gameplay, experiments, and integration work. Every project has its own story." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {remaining.map((project) => <ProjectCard key={project.slug} project={project} compact />)}
        </div>
      </div>
    </section>
  );
}
