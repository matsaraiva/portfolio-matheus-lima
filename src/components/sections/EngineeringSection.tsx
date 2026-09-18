"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { engineeringCategories, engineeringStories, serviceCapabilities, type EngineeringCategory } from "@/content/engineering";
import { withBasePath } from "@/lib/media";
import { SectionHeader } from "@/components/SectionHeader";

export function EngineeringSection() {
  const [category, setCategory] = useState<EngineeringCategory>("All");
  const stories = engineeringStories.filter((story) => category === "All" || story.category === category);

  return (
    <section className="section-shell border-y border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-neutral-900/50" id="engineering">
      {/* Preserve incoming links to the three consolidated sections. */}
      <span id="work-map" className="anchor-alias" />
      <span id="technical-proof" className="anchor-alias" />
      <span id="tools" className="anchor-alias" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="From gameplay to connected systems" title="Engineering Behind the Games" description="Gameplay, multiplayer, wallets, commerce, and live services—connected through real implementations across my games." />
        <div className="mt-8 grid gap-4 lg:grid-cols-3" aria-label="Service capabilities">
          {serviceCapabilities.map((capability) => (
            <article className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-white/10 dark:bg-neutral-950" key={capability.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">{capability.context}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{capability.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{capability.description}</p>
              <ul aria-label={`${capability.title} technologies`} className="mt-4 flex flex-wrap gap-2">
                {capability.tags.map((tag) => <li className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-white/5 dark:text-neutral-300" key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div aria-label="Filter engineering stories" className="mt-8 flex flex-wrap gap-2" role="group">
          {engineeringCategories.map((item) => (
            <button aria-pressed={category === item} aria-controls="engineering-stories" className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition ${category === item ? "border-emerald-700 bg-emerald-700 text-white dark:border-emerald-300 dark:bg-emerald-300 dark:text-neutral-950" : "border-neutral-300 text-neutral-600 hover:border-emerald-600 dark:border-white/15 dark:text-neutral-300 dark:hover:border-emerald-300"}`} key={item} onClick={() => setCategory(item)} type="button">{item}</button>
          ))}
        </div>
        <p aria-live="polite" className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">{stories.length} system stories · {category === "All" ? "All disciplines" : category}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3" id="engineering-stories">
          {stories.map((story) => (
            <article className="group overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-950" key={story.id}>
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <Image alt={`${story.project} — game imagery`} className="object-cover transition duration-300 group-hover:scale-[1.025]" fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" src={withBasePath(story.image)} />
                <span className="absolute bottom-4 left-4 rounded-full bg-neutral-950/95 px-3 py-1.5 text-xs font-medium text-white">{story.category}</span>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{story.project} <span aria-hidden> / </span> {story.studio}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{story.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{story.contribution}</p>
                <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">{story.tags.map((tag) => <li className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-white/5 dark:text-neutral-300" key={tag}>{tag}</li>)}</ul>
                <Link className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300" href={story.href}>{story.action}<ArrowUpRight aria-hidden size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
