# Design system reference

Everything in `src/components/ui` is theme-agnostic: it reads colour, radius and typography from
CSS variables, so the same component renders as navy-and-gold inside `.theme-ca`, ink-and-brass
inside `.theme-lawyer` and near-black-and-blush inside `.theme-fashion-couture`. Twenty-one
templates share these primitives. This file documents the tokens and the primitive APIs.

## Tokens

Defined in `src/app/globals.css`, consumed through `tailwind.config.ts`.

| Variable | Tailwind class | Role |
| --- | --- | --- |
| `--pk-bg` | `bg-bg`, `text-bg` | Page background |
| `--pk-surface` | `bg-surface` | Raised or alternating section background |
| `--pk-subtle` | `bg-subtle` | Quietest fill — chips, hovers, wells |
| `--pk-line` | `border-line`, `divide-line` | Hairlines and borders |
| `--pk-ink` | `text-ink` | Primary text |
| `--pk-muted` | `text-muted` | Secondary text |
| `--pk-brand` | `bg-brand`, `text-brand` | Institutional colour — headers, footers, dark sections |
| `--pk-brand-soft` | `bg-brand-soft` | Tinted brand fill behind icons |
| `--pk-brand-fg` | `text-brand-fg` | Text on `bg-brand` |
| `--pk-accent` | `bg-accent`, `text-accent` | The action colour — CTAs, eyebrows, active states |
| `--pk-accent-soft` | `bg-accent-soft` | Tinted accent fill |
| `--pk-accent-fg` | `text-accent-fg` | Text on `bg-accent` |
| `--pk-radius` | `rounded-card` | Corner radius, per template |

Values are `R G B` triplets, not hex, so opacity modifiers work: `bg-brand/10`, `text-accent/70`,
`border-brand-fg/15`.

**Contrast rule of thumb:** `--pk-brand-fg` must clear 4.5:1 against `--pk-brand`, and
`--pk-accent-fg` against `--pk-accent`. Check any new palette before committing it.

## Typography

Two font variables set on `<html>` by `next/font` in `src/app/layout.tsx`:

- `--pk-font-sans` → Plus Jakarta Sans → `font-sans` (default on `body`)
- `--pk-font-serif` → Source Serif 4 → `font-serif`

Serif headings read institutional and are used by the CA, law-firm, architecture and couture
templates. Sans throughout reads approachable and is used by the clinic, coaching and startup
templates. Both fall back to system stacks.

Radius carries as much of the personality as colour does: `--pk-radius` runs from `0rem` in the
architecture and couture templates through `0.25rem` for the law firm to `1.25rem` for the dental
and tuition templates.

## Primitives

### `Container`

```tsx
<Container size="narrow" | "default" | "wide">
```

Centres content with responsive gutters. `narrow` = 3xl, `default` = 6xl, `wide` = 7xl.

### `Section`

```tsx
<Section
  id="services"
  tone="default" | "surface" | "subtle" | "brand"
  space="default" | "compact" | "loose"
  divider          // hairline above, for two same-tone sections in a row
  noReveal         // opt out of the scroll entrance
/>
```

Background tone, vertical rhythm and a `Container` inside. `scroll-mt-16` plus
`scroll-padding-top` on `html` means anchor links land below the sticky header.
`tone="brand"` flips text to `text-brand-fg`.

**Pick the right `space`.** `default` (`py-14 sm:py-20`) suits a section with cards or a table.
`compact` (`py-10 sm:py-14`) is for structurally short sections — a chip list, a four-row table —
which look padded-out at full height. `loose` is the old rhythm, for a section that is genuinely
the centrepiece.

Every `Section` also carries the `.reveal` class, which fades it up as it enters the viewport using
a CSS scroll-driven animation. There is no JavaScript and no IntersectionObserver: the default
state is fully visible and the animation only applies where `animation-timeline: view()` is
supported and the viewer has not asked for reduced motion.

### `SectionHeading`

```tsx
<SectionHeading
  eyebrow="What we do"
  title="Six practice lines"
  description="…"
  align="left" | "center"
  inverted   // for use inside tone="brand"
/>
```

Renders `h2`. Pass `inverted` on dark sections so the eyebrow and body text switch to
brand-foreground tints.

### `Button` / `ButtonLink`

```tsx
<Button variant="primary" | "accent" | "outline" | "ghost" | "inverted" size="sm" | "md" | "lg" />
<ButtonLink href="#contact" variant="accent" size="lg" />
```

`ButtonLink` wraps `next/link` and takes the same variants. Use `accent` for the single primary
action on a page and `outline` for the secondary.

### `Card`, `Badge`, `Avatar`

```tsx
<Card interactive />                    // interactive adds hover lift
<Badge tone="accent" | "brand" | "neutral" />
<Avatar label={initials("Dr. Ananya Rao")} />   // → "AR"
```

`Avatar` is deliberately image-free — templates ship with no photography, so initials on a tinted
circle keep the layout honest until a real portrait is dropped in.

### Form controls

```tsx
<Field label="Email" htmlFor="ca-email" hint="Optional helper text">
  <Input id="ca-email" name="email" type="email" required />
</Field>
```

`Field` renders the `<label>` and wires `htmlFor`; always pass a matching `id`. `Input`, `Textarea`
and `Select` share one control style (border, focus ring, placeholder colour). Prefix ids per
template (`ca-`, `dr-`, `law-`) so two forms on one page never collide.

### `Accordion`

```tsx
<Accordion items={faqs} />   // FaqItem[] = { question, answer }
```

Native `<details>` / `<summary>`. No client JS, keyboard-accessible for free, and open by default
when printed.

## Long-page ergonomics

A complete practice site is a tall page. Three shared pieces make that navigable:

- **`ReadingProgress`** (`src/components/layout/reading-progress.tsx`) — a 2px accent rail showing
  scroll position, plus a back-to-top control that appears after the first screen. One
  rAF-throttled scroll listener drives both.
- **Navbar scrollspy** — the header observes every `#section` target and underlines the one you
  are in. On mobile the sheet numbers the sections and says how many there are.
- **`.reveal`** — the scroll-driven section entrance described above.

`TemplateShell` mounts the palette, the preview strip and `ReadingProgress` in one place, so a
route file is just a theme name and a list of sections.

## Utilities

Defined in the `@layer utilities` block of `globals.css`:

- `.grid-lines` — faint square grid, for dark hero backgrounds
- `.dot-grid` — dotted field, for light backgrounds
- `.hairline` — top hairline border in the theme line colour

## Conventions

- **Section order carries meaning.** Lead with the conversion action for that profession: booking
  for a clinic, consultation for a CA, a site visit for a developer, a tender enquiry for a
  contractor, a free demo class for a tuition centre.
- **Publish the number.** Where a profession normally hides pricing, these templates publish it —
  fee tables, treatment costs, package prices, construction budgets. It is the single strongest
  differentiator available to a small practice, and it is baked into the content structure.
- **No JSX edits for copy.** All strings live in `content.ts`. If you are editing a section file to
  change words, the string belongs in content.
- **Icons are decorative.** Anything from `lucide-react` that sits beside a text label gets
  `aria-hidden`, and the label carries the meaning.
- **One `h1` per template**, in the hero. Sections use `h2` via `SectionHeading`.
