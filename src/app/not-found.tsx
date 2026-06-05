import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-svh items-center justify-center bg-white px-4 pt-20 text-center dark:bg-neutral-950">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-300">
            Page not found
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-neutral-950 dark:text-white">
            This case study is not published yet.
          </h1>
          <p className="mt-4 text-base leading-7 text-neutral-700 dark:text-neutral-300">
            The requested project page is unavailable.
          </p>
          <Link
            className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-emerald-300 px-4 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-200"
            href="/"
          >
            <ArrowLeft aria-hidden size={16} />
            Back home
          </Link>
        </div>
      </main>
    </>
  );
}
