import Link from "next/link";
import { DatabaseZap } from "lucide-react";
import { navigation, profile } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/78 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/72">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 dark:text-white"
          href="/"
        >
          <span className="inline-flex size-9 items-center justify-center rounded-md bg-neutral-950 text-emerald-300 dark:bg-white dark:text-neutral-950">
            <DatabaseZap aria-hidden size={18} />
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">{profile.shortName}</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 dark:text-neutral-300 dark:hover:bg-white/8 dark:hover:text-white"
              href={`/${item.href}`}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
