"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
let sessionTheme: Theme | undefined;

function readTheme(): Theme {
  if (sessionTheme) return sessionTheme;
  try {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribeTheme(update: () => void) {
  const preference = window.matchMedia("(prefers-color-scheme: dark)");
  const syncStorage = () => { sessionTheme = undefined; update(); };
  window.addEventListener("portfolio-theme", update);
  window.addEventListener("storage", syncStorage);
  preference.addEventListener("change", update);
  return () => {
    window.removeEventListener("portfolio-theme", update);
    window.removeEventListener("storage", syncStorage);
    preference.removeEventListener("change", update);
  };
}

export function ThemeToggle() {
  // A stable server snapshot keeps the initial client markup hydration-safe.
  const theme = useSyncExternalStore(subscribeTheme, readTheme, (): Theme => "dark");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  const nextTheme = theme === "dark" ? "light" : "dark";

  function toggleTheme() {
    sessionTheme = nextTheme;
    try { window.localStorage.setItem("theme", nextTheme); } catch { /* Use the in-memory preference. */ }
    window.dispatchEvent(new Event("portfolio-theme"));
  }

  return (
    <button aria-label={`Switch to ${nextTheme} theme`} className="inline-flex size-10 items-center justify-center rounded-md border border-neutral-300 bg-white/80 text-neutral-900 transition hover:border-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 dark:border-white/15 dark:bg-white/8 dark:text-white dark:hover:border-white/40" type="button" onClick={toggleTheme}>
      {theme === "dark" ? <Sun aria-hidden size={18} /> : <Moon aria-hidden size={18} />}
    </button>
  );
}
