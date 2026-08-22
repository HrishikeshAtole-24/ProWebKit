import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categoryLabels } from "@/lib/registry";
import type { TemplateMeta } from "@/types/template";

/**
 * Abstract wireframe preview rendered from the template's two brand stops —
 * no screenshots to keep in sync, no image payload.
 */
function Preview({ swatch }: { swatch: TemplateMeta["swatch"] }) {
  const [brand, accent] = swatch;
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-t-card"
      style={{ background: `linear-gradient(140deg, ${brand} 0%, ${brand}e6 55%, ${accent} 190%)` }}
    >
      <div className="absolute inset-x-5 top-5 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: accent }} />
        <span className="h-1.5 w-16 rounded-full bg-white/45" />
        <span className="ml-auto h-1.5 w-8 rounded-full bg-white/25" />
        <span className="h-1.5 w-8 rounded-full bg-white/25" />
        <span className="h-4 w-12 rounded-sm" style={{ background: accent }} />
      </div>

      <div className="absolute inset-x-5 top-16 space-y-2">
        <span className="block h-2.5 w-4/5 rounded-full bg-white/80" />
        <span className="block h-2.5 w-3/5 rounded-full bg-white/55" />
        <span className="mt-3 block h-1.5 w-2/3 rounded-full bg-white/25" />
      </div>

      <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="h-12 rounded-md border border-white/15 bg-white/10"
            style={index === 1 ? { borderColor: `${accent}80` } : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export function TemplateCard({ template }: { template: TemplateMeta }) {
  return (
    <Link
      href={template.href}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
    >
      <Preview swatch={template.swatch} />

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {categoryLabels[template.category]}
        </p>
        <h3 className="mt-2 flex items-center gap-1.5 text-lg font-semibold text-ink">
          {template.demoBrand}
          <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{template.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {template.sections.slice(0, 3).map((section) => (
            <span
              key={section}
              className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-muted"
            >
              {section}
            </span>
          ))}
          <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-muted">
            +{template.sections.length - 3} more
          </span>
        </div>
      </div>
    </Link>
  );
}
