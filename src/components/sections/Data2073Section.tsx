import { ArrowUpRight, BadgeCheck, Building2, Clock3 } from "lucide-react";
import { companies, data2073Outcomes, workflow } from "@/content/companies";
import { profile } from "@/content/profile";
import { data2073Stack } from "@/content/tools";
import { SectionHeader } from "@/components/SectionHeader";

export function Data2073Section() {
  return (
    <section
      className="bg-neutral-50 px-4 py-20 dark:bg-neutral-950 sm:px-6 lg:px-8"
      id="data2073"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description={profile.data2073.summary}
          eyebrow={profile.data2073.eyebrow}
          title={profile.data2073.title}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-lg leading-9 text-neutral-700 dark:text-neutral-300">
              {profile.data2073.description}
            </p>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200"
              href={profile.data2073.sourceHref}
              rel="noreferrer"
              target="_blank"
            >
              Public Data2073 reference
              <ArrowUpRight aria-hidden size={16} />
            </a>

            <div className="grid gap-3 sm:grid-cols-2">
              {data2073Stack.map((item) => (
                <article
                  className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  key={item.name}
                >
                  <p className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-300">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-neutral-950 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                    {item.note}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {data2073Outcomes.map((outcome) => (
              <article
                className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                key={outcome.label}
              >
                <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                  <BadgeCheck aria-hidden size={18} />
                  <span className="text-xs font-bold uppercase">
                    {outcome.label}
                  </span>
                </div>
                <p className="mt-5 text-2xl font-semibold text-neutral-950 dark:text-white">
                  {outcome.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {outcome.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <section aria-labelledby="companies-heading">
            <div className="flex items-center gap-3">
              <Building2 aria-hidden className="text-emerald-700 dark:text-emerald-300" />
              <h3
                className="text-2xl font-semibold text-neutral-950 dark:text-white"
                id="companies-heading"
              >
                Companies, clients, and partners
              </h3>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {companies.map((company, index) => (
                <article
                  className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  key={`${company.name}-${index}`}
                >
                  <div className="flex size-12 items-center justify-center rounded-md bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
                    {company.name
                      .split(" ")
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-neutral-950 dark:text-white">
                    {company.name}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                    {company.relationship}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                    {company.note}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="workflow-heading">
            <div className="flex items-center gap-3">
              <Clock3 aria-hidden className="text-emerald-700 dark:text-emerald-300" />
              <h3
                className="text-2xl font-semibold text-neutral-950 dark:text-white"
                id="workflow-heading"
              >
                How the work is framed
              </h3>
            </div>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <article
                  className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  key={step.title}
                >
                  <div className="flex size-10 items-center justify-center rounded-md bg-emerald-200 text-sm font-bold text-neutral-950">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-950 dark:text-white">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

      </div>
    </section>
  );
}
