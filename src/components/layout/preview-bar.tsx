import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Thin strip shown above every template so a visitor browsing the gallery
 * can always get back. Delete this component when you copy a template out.
 */
export function PreviewBar({ template }: { template: string }) {
  return (
    <div className="bg-neutral-950 text-neutral-300 print:hidden">
      <div className="mx-auto flex h-10 max-w-6xl items-center justify-between gap-4 px-5 text-xs sm:px-8">
        <Link href="/" className="inline-flex items-center gap-1.5 font-medium transition hover:text-white">
          <ArrowLeft className="h-3.5 w-3.5" />
          ProWebKit
        </Link>
        <p className="truncate">
          <span className="hidden sm:inline text-neutral-500">Previewing template · </span>
          <span className="font-medium text-white">{template}</span>
        </p>
      </div>
    </div>
  );
}
