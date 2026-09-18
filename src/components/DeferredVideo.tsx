"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { withBasePath } from "@/lib/media";

export function DeferredVideo({ id, title, poster, priority = false }: { id: string; title: string; poster: string; priority?: boolean }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden bg-neutral-950">
      {playing ? (
        <iframe allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`} title={title} />
      ) : (
        <button aria-label={`Play ${title}`} className="group absolute inset-0 block h-full w-full text-white" onClick={() => setPlaying(true)} type="button">
          <Image alt="" className="object-cover transition duration-300 group-hover:scale-[1.025]" fill priority={priority} sizes="(max-width: 1023px) 100vw, 50vw" src={withBasePath(poster)} />
          <span className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />
          <span className="absolute inset-0 flex items-center justify-center"><span className="flex size-16 items-center justify-center rounded-full border border-white/50 bg-neutral-950/80 shadow-xl"><Play aria-hidden className="ml-1" fill="currentColor" size={22} /></span></span>
          <span className="absolute bottom-4 left-4 rounded-full bg-neutral-950/90 px-3 py-1.5 text-xs font-medium">Watch gameplay</span>
        </button>
      )}
    </div>
  );
}
