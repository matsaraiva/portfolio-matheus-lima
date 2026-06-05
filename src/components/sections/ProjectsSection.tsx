import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";

export function ProjectsSection() {
  return (
    <section className="bg-white px-4 py-20 dark:bg-neutral-900 sm:px-6 lg:px-8" id="projects">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="Each case study foregrounds the problem, Matheus's role, technical decisions, media, and public-safe impact."
          eyebrow="Projects"
          title="Game systems, integrations, and delivery proof"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
