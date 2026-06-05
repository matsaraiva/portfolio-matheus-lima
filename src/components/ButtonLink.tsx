import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-emerald-300 text-neutral-950 shadow-[0_18px_60px_rgba(16,185,129,0.24)] hover:bg-emerald-200",
  secondary:
    "border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/18 dark:border-white/20",
  ghost:
    "border border-neutral-300 bg-white/70 text-neutral-900 hover:border-neutral-900 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white/40",
};

export function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {variant !== "primary" ? <ArrowUpRight aria-hidden size={16} /> : null}
    </>
  );
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${variants[variant]} ${className}`;

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
