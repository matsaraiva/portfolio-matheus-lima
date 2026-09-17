"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Gamepad2, Play } from "lucide-react";
import { showcaseVideos, videoReel } from "@/content/videos";
import { SectionHeader } from "@/components/SectionHeader";
import { withBasePath } from "@/lib/media";

export function VideoReelSection() {
  const [selectedId, setSelectedId] = useState(showcaseVideos[0].id);

  const activeVideo =
    showcaseVideos.find((v) => v.id === selectedId) ?? showcaseVideos[0];

  return (
    <section className="bg-neutral-900 px-4 py-20 text-white sm:px-6 lg:px-8" id="video-reel">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description={videoReel.description}
          eyebrow={videoReel.eyebrow}
          title={videoReel.title}
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Main Active Video Player */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-950 shadow-2xl">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
                key={activeVideo.id}
                src={`https://www.youtube.com/embed/${activeVideo.id}`}
                title={activeVideo.title}
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-md bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 border border-emerald-400/20">
                  {activeVideo.genre}
                </span>
                <a
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 transition hover:text-emerald-300"
                  href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  Watch on YouTube
                  <ExternalLink aria-hidden size={14} />
                </a>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white">
                {activeVideo.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                {activeVideo.description}
              </p>
            </div>
          </div>

          {/* Interactive Video Selector */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
                <Gamepad2 aria-hidden size={16} className="text-emerald-400" />
                Select Game Demo ({showcaseVideos.length})
              </p>
              <a
                className="text-xs font-semibold text-emerald-400 transition hover:underline"
                href={videoReel.playlistUrl}
                rel="noreferrer"
                target="_blank"
              >
                Full YouTube Reel
              </a>
            </div>

            <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1">
              {showcaseVideos.map((video) => {
                const isSelected = video.id === selectedId;

                return (
                  <button
                    className={`group flex w-full items-center gap-3.5 rounded-lg border p-3 text-left transition ${
                      isSelected
                        ? "border-emerald-400/80 bg-emerald-400/10 shadow-lg"
                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                    }`}
                    key={video.id}
                    onClick={() => setSelectedId(video.id)}
                    type="button"
                  >
                    <div className="relative aspect-video w-24 shrink-0 overflow-hidden rounded-md bg-neutral-950">
                      <Image
                        alt={video.title}
                        className="object-cover transition duration-300 group-hover:scale-105"
                        fill
                        sizes="96px"
                        src={withBasePath(video.thumbnail)}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition group-hover:bg-black/20">
                        <Play
                          aria-hidden
                          className={`size-5 ${
                            isSelected ? "text-emerald-300 fill-emerald-300" : "text-white fill-white/80"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        {video.genre}
                      </span>
                      <p className="truncate text-sm font-semibold text-white group-hover:text-emerald-200">
                        {video.title}
                      </p>
                      <p className="line-clamp-1 text-xs text-neutral-400">
                        {video.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
