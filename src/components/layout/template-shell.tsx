import { PreviewBar } from "./preview-bar";
import { ReadingProgress } from "./reading-progress";
import { cn } from "@/lib/utils";

interface TemplateShellProps {
  /** Theme class from globals.css, e.g. "theme-ca". */
  theme: string;
  /** Label shown in the gallery preview strip. */
  preview: string;
  children: React.ReactNode;
}

/**
 * Common wrapper for every template route: applies the palette, mounts the
 * long-page orientation aids, and renders the gallery preview strip.
 *
 * When you copy a template out of the kit, replace this with a plain
 * <div className="theme-x"> and drop <PreviewBar />.
 */
export function TemplateShell({ theme, preview, children }: TemplateShellProps) {
  return (
    <div className={cn(theme, "bg-bg text-ink")}>
      <PreviewBar template={preview} />
      <ReadingProgress />
      {children}
    </div>
  );
}
