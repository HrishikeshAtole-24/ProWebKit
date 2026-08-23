"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { categoryLabels, categoryOrder, templates, templatesByCategory } from "@/lib/registry";
import type { TemplateCategory } from "@/types/template";
import { TemplateCard } from "./template-card";

type Filter = TemplateCategory | "all";

interface Option {
  value: Filter;
  label: string;
  count: number;
}

/**
 * Category filter for the gallery. With 21 templates across 7 professions,
 * scrolling every group to reach one is the wrong default — pick a practice
 * and the grid narrows to it.
 */
export function TemplateBrowser() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listboxId = useId();

  const options = useMemo<Option[]>(
    () => [
      { value: "all", label: "All templates", count: templates.length },
      ...categoryOrder.map((category) => ({
        value: category as Filter,
        label: categoryLabels[category],
        count: templatesByCategory(category).length,
      })),
    ],
    [],
  );

  const selectedIndex = options.findIndex((option) => option.value === filter);
  const selected = options[selectedIndex] ?? options[0];

  const visible = filter === "all" ? templates : templatesByCategory(filter);

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Move focus into the list when it opens so the keyboard works immediately.
  useEffect(() => {
    if (open) {
      setActiveIndex(selectedIndex === -1 ? 0 : selectedIndex);
      listRef.current?.focus();
    }
  }, [open, selectedIndex]);

  const choose = (value: Filter) => {
    setFilter(value);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const onListKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % options.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((index) => (index - 1 + options.length) % options.length);
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        choose(options[activeIndex].value);
        break;
      case "Escape":
      case "Tab":
        setOpen(false);
        buttonRef.current?.focus();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {/* Filter bar — stays reachable while the grid scrolls underneath */}
      <div className="sticky top-16 z-30 -mx-5 mb-8 border-y border-line bg-bg/90 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <div ref={containerRef} className="relative">
            <label id={`${listboxId}-label`} className="sr-only">
              Filter templates by profession
            </label>
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setOpen(true);
                }
              }}
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-controls={open ? listboxId : undefined}
              aria-labelledby={`${listboxId}-label`}
              className={cn(
                "inline-flex h-11 min-w-[15rem] items-center justify-between gap-3 rounded-card border px-4 text-sm font-semibold transition",
                open ? "border-accent text-ink" : "border-line text-ink hover:border-accent",
              )}
            >
              <span className="flex items-center gap-2.5">
                <span className="text-muted">Profession</span>
                <span>{selected.label}</span>
              </span>
              <ChevronDown
                className={cn("h-4 w-4 shrink-0 text-muted transition-transform", open && "rotate-180")}
                aria-hidden
              />
            </button>

            {open ? (
              <ul
                ref={listRef}
                id={listboxId}
                role="listbox"
                tabIndex={-1}
                aria-labelledby={`${listboxId}-label`}
                aria-activedescendant={`${listboxId}-option-${activeIndex}`}
                onKeyDown={onListKeyDown}
                className="absolute left-0 top-[calc(100%+0.5rem)] z-40 w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden rounded-card border border-line bg-surface p-1.5 shadow-lift focus:outline-none"
              >
                {options.map((option, index) => {
                  const isSelected = option.value === filter;
                  return (
                    <li
                      key={option.value}
                      id={`${listboxId}-option-${index}`}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => choose(option.value)}
                      onPointerEnter={() => setActiveIndex(index)}
                      className={cn(
                        "flex cursor-pointer items-center justify-between gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
                        index === activeIndex ? "bg-subtle text-ink" : "text-muted",
                        option.value === "all" && "border-b border-line/70 mb-1 rounded-b-none pb-3",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <Check
                          className={cn("h-3.5 w-3.5 shrink-0 text-accent", !isSelected && "opacity-0")}
                          aria-hidden
                        />
                        {option.label}
                      </span>
                      <span className="shrink-0 text-xs tabular-nums text-muted">{option.count}</span>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>

          {/* Wide screens get the categories inline as well — one click, no menu */}
          <div className="hidden flex-wrap gap-1.5 xl:flex" role="group" aria-label="Quick filters">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setFilter(option.value)}
                aria-pressed={option.value === filter}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                  option.value === filter
                    ? "border-accent bg-accent text-accent-fg"
                    : "border-line text-muted hover:border-accent hover:text-ink",
                )}
              >
                {option.value === "all" ? "All" : option.label.split(" ")[0]}
              </button>
            ))}
          </div>

          <p aria-live="polite" className="ml-auto text-xs text-muted">
            Showing <span className="font-semibold text-ink">{visible.length}</span> of{" "}
            {templates.length}
          </p>
        </div>
      </div>

      {/* Grouped while unfiltered, flat once a profession is chosen */}
      {filter === "all" ? (
        <div className="space-y-14">
          {categoryOrder.map((category) => {
            const items = templatesByCategory(category);
            return (
              <div key={category}>
                <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                    {categoryLabels[category]}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setFilter(category)}
                    className="text-xs text-muted transition hover:text-accent"
                  >
                    Show only these ({items.length})
                  </button>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((template) => (
                    <TemplateCard key={template.slug} template={template} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-line pb-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
              {selected.label}
            </h3>
            <button
              type="button"
              onClick={() => setFilter("all")}
              className="text-xs text-muted transition hover:text-accent"
            >
              Clear filter
            </button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((template) => (
              <TemplateCard key={template.slug} template={template} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
