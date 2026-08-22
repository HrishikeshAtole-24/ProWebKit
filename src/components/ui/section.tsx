import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  size?: "default" | "wide" | "narrow";
  tone?: "default" | "surface" | "subtle" | "brand";
}

export function Section({
  className,
  containerClassName,
  size,
  tone = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-20 py-16 sm:py-24",
        tone === "surface" && "bg-surface",
        tone === "subtle" && "bg-subtle",
        tone === "brand" && "bg-brand text-brand-fg",
        className,
      )}
      {...props}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
            inverted ? "text-brand-fg/70" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-semibold leading-tight sm:text-4xl",
          inverted ? "text-brand-fg" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            inverted ? "text-brand-fg/75" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
