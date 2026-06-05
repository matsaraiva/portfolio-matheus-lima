type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`animate-fade-up ${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      <p className="mb-3 text-xs font-bold uppercase text-emerald-600 dark:text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold text-neutral-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-8 text-neutral-700 dark:text-neutral-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
