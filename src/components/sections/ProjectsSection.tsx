import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";

export function ProjectsSection() {
  return (
    <section className="bg-white px-4 py-20 dark:bg-neutral-900 sm:px-6 lg:px-8" id="projects">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="From shipped Steam titles and combat state machines to server-authoritative multiplayer and bot AI — each project covers the mechanics, architecture, and playable proof."
          eyebrow="Games &amp; Case Studies"
          title="Shipped Games, Combat Mechanics &amp; Multiplayer Netcode"
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
