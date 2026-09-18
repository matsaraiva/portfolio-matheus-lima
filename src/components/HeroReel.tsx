"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pause, Play, SkipForward } from "lucide-react";
import { withBasePath } from "@/lib/media";

const clips = [
  { title: "Data2073 Battle Deck", studio: "Osten Games", video: "eh6fCOBHs3A", poster: "/projects/data2073-official/playstore-2.png", href: "/projects/data2073-multiplayer-liveops/", contribution: "Multiplayer, backend integrations, and live-service systems." },
  { title: "Invaders Tower Defense Online", studio: "Sagui Games", video: "YscTtrmhC30", poster: "/projects/invaders-tower-defense-online/official-cover.png", href: "/projects/invaders-tower-defense-online/", contribution: "Gameplay systems, online features, and Steam release delivery." },
];

type Player = { playVideo(): void; pauseVideo(): void; mute(): void; destroy(): void; getCurrentTime(): number; getPlayerState(): number };
type YouTubeAPI = { Player: new (element: HTMLElement, options: { host: string; videoId: string; playerVars: Record<string, string | number>; events: { onReady(event: { target: Player }): void; onStateChange(event: { data: number }): void; onError(): void; onAutoplayBlocked(): void } }) => Player };
declare global { interface Window { YT?: YouTubeAPI; onYouTubeIframeAPIReady?: () => void } }
let apiPromise: Promise<YouTubeAPI> | undefined;

function loadYouTube() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!apiPromise) {
    apiPromise = new Promise<YouTubeAPI>((resolve, reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      const timeout = window.setTimeout(() => reject(new Error("Video player unavailable")), 15000);
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        window.clearTimeout(timeout);
        if (window.YT) resolve(window.YT);
      };
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.onerror = () => { window.clearTimeout(timeout); reject(new Error("Video player unavailable")); };
      document.head.appendChild(script);
    }).catch((error) => { apiPromise = undefined; throw error; });
  }
  return apiPromise;
}

export function HeroReel() {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const host = useRef<HTMLDivElement>(null);
  const player = useRef<Player | null>(null);
  const pauseIntent = useRef(false);
  const clip = clips[index];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setStarted(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started || !clip.video || !host.current) return;
    let cancelled = false;
    let instance: Player | undefined;
    let segmentStart = 0;
    const container = host.current;
    const element = document.createElement("div");
    container.appendChild(element);
    const readyTimeout = window.setTimeout(() => { if (!cancelled) setFailed(true); }, 15000);
    loadYouTube().then((api) => {
      if (cancelled) return;
      instance = new api.Player(element, {
        host: "https://www.youtube-nocookie.com",
        videoId: clip.video,
        playerVars: { autoplay: 1, mute: 1, playsinline: 1, controls: 1, rel: 0, origin: window.location.origin },
        events: {
          onReady: ({ target }) => { window.clearTimeout(readyTimeout); if (cancelled) return; player.current = target; target.mute(); if (pauseIntent.current) target.pauseVideo(); else target.playVideo(); },
          onStateChange: ({ data }) => {
            if (cancelled) return;
            if (data === 0) { setIndex((current) => (current + 1) % clips.length); }
            if (data === 1) { pauseIntent.current = false; setPaused(false); segmentStart = instance?.getCurrentTime() ?? 0; }
            if (data === 2) { pauseIntent.current = true; setPaused(true); }
          },
          onError: () => { if (!cancelled) setFailed(true); },
          onAutoplayBlocked: () => { if (!cancelled) { pauseIntent.current = true; setPaused(true); } },
        },
      });
    }).catch(() => { if (!cancelled) setFailed(true); });
    const progress = window.setInterval(() => {
      if (instance?.getPlayerState?.() === 1 && instance.getCurrentTime() - segmentStart >= 20) setIndex((current) => (current + 1) % clips.length);
    }, 500);
    const visibility = () => { if (document.hidden) { pauseIntent.current = true; setPaused(true); instance?.pauseVideo?.(); } };
    document.addEventListener("visibilitychange", visibility);
    return () => { cancelled = true; window.clearTimeout(readyTimeout); window.clearInterval(progress); document.removeEventListener("visibilitychange", visibility); instance?.destroy(); player.current = null; container.replaceChildren(); };
  }, [started, clip.video]);

  // Advance reel if video playback fails to load.
  useEffect(() => {
    if (!started || paused || (clip.video && !failed)) return;
    const timer = window.setTimeout(() => { setFailed(false); setIndex((current) => (current + 1) % clips.length); }, 8000);
    return () => window.clearTimeout(timer);
  }, [started, paused, clip.video, failed]);

  function selectClip(next: number) {
    if (next === index) {
      if (paused) {
        pauseIntent.current = false;
        setPaused(false);
        player.current?.playVideo();
      }
      return;
    }
    pauseIntent.current = false;
    setPaused(false);
    setFailed(false);
    setStarted(true);
    setIndex(next);
  }

  function togglePlayback() {
    if (!started) { setStarted(true); return; }
    pauseIntent.current = !paused;
    setPaused(!paused);
    if (paused) player.current?.playVideo(); else player.current?.pauseVideo();
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/15 bg-neutral-950 shadow-2xl">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 text-xs">
        <span className="font-semibold uppercase tracking-widest text-emerald-300">
          {!started ? "Featured" : paused ? "Paused" : "Now playing"}
        </span>
        <span className="text-neutral-400">{clip.studio} / Unity</span>
      </div>
      <div className="relative aspect-video min-h-[200px] bg-black">
        <Image alt={`${clip.title} — project preview`} className="object-contain" fill priority sizes="(max-width: 1023px) 100vw, 50vw" src={withBasePath(clip.poster)} />
        {started && clip.video ? <div className={`absolute inset-0 [&_iframe]:h-full [&_iframe]:w-full ${failed ? "invisible" : ""}`} ref={host} /> : null}
        {!started ? (
          <button aria-label="Play featured games" className="group absolute inset-0 flex items-center justify-center bg-black/20" onClick={togglePlayback} type="button">
            <span className="rounded-full bg-black/80 p-5 text-white shadow-xl transition group-hover:scale-105">
              <Play aria-hidden className="ml-0.5" fill="currentColor" size={24} />
            </span>
          </button>
        ) : null}
        {failed ? <a className="absolute inset-x-4 bottom-4 rounded-md bg-black/90 p-3 text-center text-sm text-white underline" href={`https://www.youtube.com/watch?v=${clip.video}`} target="_blank" rel="noreferrer">Watch {clip.title} on YouTube</a> : null}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <Link className="text-lg font-semibold hover:text-emerald-300" href={clip.href}>{clip.title}</Link>
          <div className="flex shrink-0 gap-1">
            <button className="flex size-11 items-center justify-center rounded-md border border-white/15 hover:bg-white/10" type="button" onClick={togglePlayback} aria-label={!started || paused ? "Play showcase" : "Pause showcase"}>
              {!started || paused ? <Play aria-hidden fill="currentColor" size={16} /> : <Pause aria-hidden fill="currentColor" size={16} />}
            </button>
            <button className="flex size-11 items-center justify-center rounded-md border border-white/15 hover:bg-white/10" type="button" onClick={() => selectClip((index + 1) % clips.length)} aria-label="Next featured game">
              <SkipForward aria-hidden size={16} />
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm leading-6 text-neutral-400">My work: {clip.contribution}</p>
      </div>
    </div>
  );
}
