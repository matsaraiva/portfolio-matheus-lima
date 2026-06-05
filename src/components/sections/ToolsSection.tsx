import { Wrench } from "lucide-react";
import { toolGroups } from "@/content/tools";
import { SectionHeader } from "@/components/SectionHeader";

export function ToolsSection() {
  return (
    <section className="bg-neutral-50 px-4 py-20 dark:bg-neutral-950 sm:px-6 lg:px-8" id="tools">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="Organized by discipline — from backend services and cloud infrastructure to Unity systems, Web3 tooling, and product delivery."
          eyebrow="Tools & Skills"
          title="A stack organized around outcomes"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {toolGroups.map((group) => (
            <article
              className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
              key={group.title}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-md bg-emerald-200 text-neutral-950">
                  <Wrench aria-hidden size={18} />
                </span>
                <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">
                  {group.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                {group.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-white/8 dark:text-neutral-300"
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
