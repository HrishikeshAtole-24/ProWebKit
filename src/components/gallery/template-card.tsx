import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { TemplateMeta } from "@/types/template";

/**
 * Miniature of the template, drawn from its two brand stops. No screenshots
 * to keep in sync and no image payload — and because the gallery chrome is
 * near-monochrome, these are the only colour on the page.
 */
function Preview({ swatch }: { swatch: TemplateMeta["swatch"] }) {
  const [brand, accent] = swatch;

  return (
    <div
      className="relative aspect-[16/11] overflow-hidden"
      style={{ background: brand }}
    >
      {/* light falling from the top-left, as it would on a real page */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 90% at 12% -10%, rgb(255 255 255 / 0.16), transparent 60%)`,
        }}
        aria-hidden
      />

      {/* the miniature sits inset, so the card reads as a framed artefact */}
      <div className="absolute inset-x-4 bottom-0 top-4 rounded-t-[3px] bg-white/[0.06] p-3 backdrop-blur-[1px] ring-1 ring-inset ring-white/10">
        {/* nav row */}
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-[2px]" style={{ background: accent }} />
          <span className="h-1 w-9 rounded-full bg-white/45" />
          <span className="ml-auto h-1 w-5 rounded-full bg-white/20" />
          <span className="h-1 w-5 rounded-full bg-white/20" />
          <span className="h-3 w-8 rounded-[2px]" style={{ background: accent }} />
        </div>

        {/* headline block */}
        <div className="mt-4 space-y-1.5">
          <span className="block h-2 w-[70%] rounded-full bg-white/85" />
          <span className="block h-2 w-[48%] rounded-full bg-white/55" />
          <span className="mt-2 block h-1 w-[58%] rounded-full bg-white/25" />
        </div>

        {/* content row */}
        <div className="mt-4 grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="h-9 rounded-[3px] bg-white/[0.07] ring-1 ring-inset ring-white/10"
              style={index === 1 ? { boxShadow: `inset 0 0 0 1px ${accent}55` } : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TemplateCard({ template }: { template: TemplateMeta }) {
  return (
    <Link
      href={template.href}
      className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-200 hover:border-muted/50"
    >
      <Preview swatch={template.swatch} />

      <div className="flex flex-1 flex-col border-t border-line p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-ink">
            {template.demoBrand}
          </h3>
          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
        </div>

        <p className="kit-label mt-1.5 text-muted">{template.name}</p>

        <p className="mt-3 flex-1 text-[13px] leading-[1.6] text-muted">{template.description}</p>

        <p className="mt-4 border-t border-line pt-3 text-[12px] tabular-nums text-muted">
          {template.sections.length} sections
        </p>
      </div>
    </Link>
  );
}
