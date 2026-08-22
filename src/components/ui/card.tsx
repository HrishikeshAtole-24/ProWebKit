import { cn } from "@/lib/utils";

export function Card({
  className,
  interactive = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-bg p-6",
        interactive &&
          "transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift",
        className,
      )}
      {...props}
    />
  );
}

export function Badge({
  className,
  tone = "accent",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: "accent" | "brand" | "neutral" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        tone === "accent" && "bg-accent-soft text-accent",
        tone === "brand" && "bg-brand-soft text-brand",
        tone === "neutral" && "bg-subtle text-muted",
        className,
      )}
      {...props}
    />
  );
}

export function Avatar({ label, className }: { label: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-soft text-sm font-semibold text-brand",
        className,
      )}
    >
      {label}
    </span>
  );
}
