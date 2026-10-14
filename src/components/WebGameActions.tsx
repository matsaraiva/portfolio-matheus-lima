import { ArrowUpRight, Code2, Play } from "lucide-react";
import { webGameLinks } from "@/content/web-games";

export function WebGameActions({ slug, title }: { slug: string; title: string }) {
  const links = webGameLinks[slug];
  if (!links) return null;

  return (
    <div className="flex flex-wrap gap-3">
      <a aria-label={`Play ${title} in a new tab`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:bg-emerald-300 dark:text-neutral-950 dark:hover:bg-emerald-200" href={links.demo} target="_blank" rel="noreferrer">
        <Play aria-hidden size={16} /> Play now <ArrowUpRight aria-hidden size={15} />
      </a>
      <a aria-label={`View ${title} source on GitHub in a new tab`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-neutral-300 px-4 py-2.5 text-sm font-semibold text-neutral-900 transition hover:border-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:border-white/20 dark:text-white dark:hover:border-white/50" href={links.source} target="_blank" rel="noreferrer">
        <Code2 aria-hidden size={16} /> Source
      </a>
    </div>
  );
}
