import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Calendar, ImageIcon } from "lucide-react";
import type { Project } from "@/content/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const cover = project.images[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
      <Link className="relative block aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900" href={`/projects/${project.slug}`}>
        {cover?.src ? (
          <Image
            alt={cover.alt}
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            src={cover.src}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-neutral-500">
            <ImageIcon aria-hidden size={28} />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-md bg-neutral-950 px-3 py-1 text-xs font-semibold uppercase text-white dark:bg-white dark:text-neutral-950">
          {project.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-1.5">
            <Building2 aria-hidden size={14} />
            {project.company}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar aria-hidden size={14} />
            {project.year}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-neutral-950 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
            {project.summary}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-white/8 dark:text-neutral-300"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200"
          href={`/projects/${project.slug}`}
        >
          View case study
          <ArrowRight aria-hidden size={16} />
        </Link>
      </div>
    </article>
  );
}
