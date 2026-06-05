import { Clapperboard, PlayCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { videoReel } from "@/content/videos";
import { getExternalVideoEmbed } from "@/lib/media";

export function VideoReelSection() {
  return (
    <section className="bg-neutral-50 px-4 py-20 dark:bg-neutral-950 sm:px-6 lg:px-8" id="videos">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description={videoReel.description}
          eyebrow={videoReel.eyebrow}
          title={videoReel.title}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3 text-neutral-950 dark:text-white">
              <Clapperboard aria-hidden className="text-emerald-700 dark:text-emerald-300" />
              <h3 className="text-xl font-semibold">Work in motion</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {videoReel.points.map((point) => (
                <li className="flex gap-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300" key={point}>
                  <PlayCircle aria-hidden className="mt-0.5 shrink-0 text-emerald-700 dark:text-emerald-300" size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200"
              href={videoReel.playlistUrl}
              rel="noreferrer"
              target="_blank"
            >
              Open playlist on YouTube
              <PlayCircle aria-hidden size={16} />
            </a>
          </div>

          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-black shadow-sm dark:border-white/10">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video w-full"
              src={getExternalVideoEmbed(videoReel.playlistUrl)}
              title="Matheus Saraiva Lima portfolio video playlist"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
