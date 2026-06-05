import Image from "next/image";
import { ImageIcon, Video } from "lucide-react";
import type { MediaAsset } from "@/content/types";
import { getExternalVideoEmbed, isExternalUrl, withBasePath } from "@/lib/media";

type MediaGalleryProps = {
  title?: string;
  images: MediaAsset[];
  videos: MediaAsset[];
};

export function MediaGallery({ title = "Media gallery", images, videos }: MediaGalleryProps) {
  const media = [...images, ...videos];

  return (
    <section aria-labelledby="media-gallery-title" className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <h2
          className="text-xl font-semibold text-neutral-950 dark:text-white"
          id="media-gallery-title"
        >
          {title}
        </h2>
        <span className="rounded-md border border-neutral-300 px-3 py-1 text-xs font-semibold uppercase text-neutral-600 dark:border-white/15 dark:text-neutral-400">
          {media.length} slots
        </span>
      </div>

      {media.length === 0 ? (
        <EmptyMediaState />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {media.map((item, index) => (
            <article
              className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              key={`${item.src}-${index}`}
            >
              <div className="relative aspect-video bg-neutral-100 dark:bg-neutral-900">
                {item.type === "image" && item.src ? (
                  <Image
                    alt={item.alt}
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={withBasePath(item.src)}
                  />
                ) : item.type === "video" && item.src ? (
                  <VideoFrame item={item} />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 text-neutral-500 dark:text-neutral-400">
                    <Video aria-hidden size={28} />
                    <p className="text-sm font-medium">Video slot ready</p>
                  </div>
                )}
                {item.isPlaceholder ? (
                  <span className="absolute left-3 top-3 rounded-md bg-amber-300 px-2.5 py-1 text-xs font-bold text-neutral-950">
                    Placeholder
                  </span>
                ) : null}
              </div>
              {item.caption ? (
                <p className="px-4 py-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                  {item.caption}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function VideoFrame({ item }: { item: MediaAsset }) {
  if (isExternalUrl(item.src)) {
    return (
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full"
        src={getExternalVideoEmbed(item.src)}
        title={item.alt}
      />
    );
  }

  return (
    <video
      className="h-full w-full object-cover"
      controls
      poster={item.poster ? withBasePath(item.poster) : undefined}
      preload="metadata"
      src={withBasePath(item.src)}
    >
      <track kind="captions" />
    </video>
  );
}

function EmptyMediaState() {
  return (
    <div className="flex min-h-56 flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-neutral-300 bg-neutral-50 px-6 text-center dark:border-white/15 dark:bg-white/5">
      <ImageIcon aria-hidden className="text-neutral-500 dark:text-neutral-400" size={30} />
      <p className="max-w-md text-sm leading-6 text-neutral-600 dark:text-neutral-300">
        No images or videos are published for this project yet.
      </p>
    </div>
  );
}
