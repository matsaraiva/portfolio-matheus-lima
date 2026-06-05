import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  Calendar,
  CheckCircle2,
  Hammer,
  Target,
  UserRound,
} from "lucide-react";
import { MediaGallery } from "@/components/MediaGallery";
import { SiteHeader } from "@/components/SiteHeader";
import { getProjectBySlug, projects } from "@/content/projects";
import { seo } from "@/content/profile";

export const dynamicParams = false;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}/`,
    },
    openGraph: {
      title: `${project.title} | Matheus Saraiva Lima`,
      description: project.summary,
      images: [
        {
          url: project.images[0]?.src ?? seo.ogImage,
          width: 1200,
          height: 630,
          alt: project.images[0]?.alt ?? "Project preview image",
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-28 dark:bg-neutral-950">
        <article className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 transition hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
            href="/#projects"
          >
            <ArrowLeft aria-hidden size={16} />
            Back to projects
          </Link>

          <header className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-300">
                {project.category}
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-neutral-950 dark:text-white sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700 dark:text-neutral-300">
                {project.summary}
              </p>
            </div>

            <aside className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <MetaItem icon={<Building2 aria-hidden size={18} />} label="Company" value={project.company} />
              <MetaItem icon={<Calendar aria-hidden size={18} />} label="Year" value={project.year} />
              <MetaItem icon={<UserRound aria-hidden size={18} />} label="Role" value={project.role} />
            </aside>
          </header>

          <div className="mt-12">
            <MediaGallery images={project.images} title={`${project.title} media`} videos={project.videos} />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="space-y-6" aria-labelledby="project-context-heading">
              <h2
                className="text-2xl font-semibold text-neutral-950 dark:text-white"
                id="project-context-heading"
              >
                Project context
              </h2>
              <InfoBlock icon={<Target aria-hidden />} title="Problem" value={project.problem} />
              <InfoBlock icon={<Hammer aria-hidden />} title="Solution" value={project.solution} />
            </section>

            <section aria-labelledby="project-impact-heading">
              <h2
                className="text-2xl font-semibold text-neutral-950 dark:text-white"
                id="project-impact-heading"
              >
                Results and impact
              </h2>
              <div className="mt-6 grid gap-3">
                {project.results.map((result) => (
                  <div
                    className="flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5"
                    key={result}
                  >
                    <CheckCircle2
                      aria-hidden
                      className="mt-1 shrink-0 text-emerald-700 dark:text-emerald-300"
                      size={18}
                    />
                    <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                      {result}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 text-lg font-semibold text-neutral-950 dark:text-white">
                Tools and technologies
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    className="rounded-md bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:bg-white/8 dark:text-neutral-300"
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {project.links.length > 0 ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 transition hover:border-neutral-950 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white/40"
                      href={link.href}
                      key={link.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden size={16} />
                    </a>
                  ))}
                </div>
              ) : null}
            </section>
          </div>
        </article>
      </main>
    </>
  );
}

function MetaItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
        {icon}
        <span className="text-xs font-bold uppercase">{label}</span>
      </div>
      <p className="mt-3 text-sm font-semibold leading-6 text-neutral-950 dark:text-white">
        {value}
      </p>
    </div>
  );
}

function InfoBlock({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <article className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center gap-3 text-neutral-950 dark:text-white">
        <span className="text-emerald-700 dark:text-emerald-300">{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">{value}</p>
    </article>
  );
}
