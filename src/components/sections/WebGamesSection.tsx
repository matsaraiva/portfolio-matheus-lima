import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { webGames } from "@/content/web-games";
import { withBasePath } from "@/lib/media";
import { SectionHeader } from "@/components/SectionHeader";
import { WebGameActions } from "@/components/WebGameActions";

export function WebGamesSection() {
  return (
    <section className="section-shell bg-neutral-50 dark:bg-neutral-900" id="web-games" aria-labelledby="web-games-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Playable web games" title="Three stacks. Three ways to play." description="Small, complete browser games built with Three.js, Phaser, and PixiJS. Play immediately, then explore the code and the technical choices behind each project." id="web-games-heading" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {webGames.map((project) => (
            <article className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-950" key={project.slug}>
              <Link aria-label={`Read the ${project.title} case study`} className="relative block aspect-[16/10] overflow-hidden" href={`/projects/${project.slug}/`}>
                <Image alt={project.images[0].alt} src={withBasePath(project.images[0].src)} fill sizes="(max-width: 1023px) 100vw, 33vw" className="object-cover transition duration-300 motion-safe:hover:scale-105" />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{project.summary}</p>
                <ul className="mb-6 mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.tags.slice(0, 3).map((tag) => <li className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-white/10 dark:text-neutral-300" key={tag}>{tag}</li>)}
                </ul>
                <div className="mt-auto"><WebGameActions slug={project.slug} title={project.title} /></div>
                <Link className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300" href={`/projects/${project.slug}/`}>Technical case study <ArrowUpRight aria-hidden size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
