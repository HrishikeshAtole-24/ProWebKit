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
 * The gallery is a dropdown and a grid, nothing else. Twenty-one templates
 * stacked in seven groups meant scrolling past six professions to reach the
 * one you came for, so only the selected profession is rendered.
 */
export function TemplateBrowser() {
  const [filter, setFilter] = useState<Filter>(categoryOrder[0]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listboxId = useId();

  const options = useMemo<Option[]>(
    () => [
      ...categoryOrder.map((category) => ({
        value: category as Filter,
        label: categoryLabels[category],
        count: templatesByCategory(category).length,
      })),
      { value: "all", label: "All professions", count: templates.length },
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
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div ref={containerRef} className="relative">
          <label id={`${listboxId}-label`} className="sr-only">
            Choose a profession
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
              "inline-flex h-11 min-w-[15rem] items-center justify-between gap-4 rounded-md border bg-surface px-3.5 text-left transition-colors",
              open ? "border-muted/60" : "border-line hover:border-muted/50",
            )}
          >
            <span className="flex min-w-0 items-baseline gap-2.5">
              <span className="kit-label shrink-0 text-muted">Profession</span>
              <span className="truncate text-sm font-medium tracking-[-0.01em] text-ink">
                {selected.label}
              </span>
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-muted transition-transform duration-200",
                open && "rotate-180",
              )}
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
              className="absolute left-0 top-[calc(100%+0.375rem)] z-40 w-[min(21rem,calc(100vw-2.5rem))] rounded-md border border-line bg-surface p-1 shadow-[0_16px_40px_-12px_rgb(0_0_0_/_0.8)] focus:outline-none"
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
                      "flex cursor-pointer items-center justify-between gap-3 rounded-[5px] px-2.5 py-2 text-sm transition-colors",
                      index === activeIndex ? "bg-subtle text-ink" : "text-muted",
                      option.value === "all" && "mt-1 border-t border-line pt-2.5",
                    )}
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <Check
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 text-accent",
                          !isSelected && "opacity-0",
                        )}
                        aria-hidden
                      />
                      <span className="truncate">{option.label}</span>
                    </span>
                    <span className="shrink-0 text-xs tabular-nums text-muted">{option.count}</span>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>

        <p aria-live="polite" className="kit-label text-muted">
          <span className="tabular-nums text-ink">{visible.length}</span>{" "}
          {visible.length === 1 ? "template" : "templates"}
        </p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((template) => (
          <TemplateCard key={template.slug} template={template} />
        ))}
      </div>
    </div>
  );
}
