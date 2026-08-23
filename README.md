<div align="center">

# ProWebKit

**21 production-ready website templates for professionals — accountants, doctors, lawyers,
architects, developers, coaching institutes and designers.**

Built with Next.js 15 (App Router), TypeScript and Tailwind CSS. MIT licensed.

[Templates](#templates) · [Quick start](#quick-start) · [Architecture](#architecture) · [Adding a template](#adding-a-template) · [Deploy](#deploy)

</div>

---

## Why this exists

Professional practices need a serious web presence and rarely get one. The usual options are a
drag-and-drop builder that looks like every other drag-and-drop builder, or a bespoke build that
costs more than it should. ProWebKit is the middle path: complete, deployable sites you can fork,
rebrand in one file and ship.

Every template is a **full page** — hero to footer, with real content structure, working navigation,
form markup and per-page SEO metadata. Not a hero section and three cards.

## Templates

### Chartered Accountants

| Template | Demo brand | The angle | Route |
| --- | --- | --- | --- |
| Corporate CA | Aurum & Associates | Institutional firm, compliance-calendar hero | `/templates/ca/corporate` |
| Boutique Tax Chamber | Kothari Tax Chambers | Solo practitioner, letter-style, published fees | `/templates/ca/boutique` |
| Startup CFO Desk | LedgerLab | Productised subscription with pricing tiers | `/templates/ca/startup` |

### Doctors & Clinics

| Template | Demo brand | The angle | Route |
| --- | --- | --- | --- |
| Clinic | Aarogya Clinic | Single practitioner, booking-card hero | `/templates/doctor/clinic` |
| Dental Studio | Smile Studio Dental | Published treatment pricing, nervous patients | `/templates/doctor/dental` |
| Multi-speciality Hospital | Sanjeevani Hospital | Emergency bar, departments, OPD directory | `/templates/doctor/hospital` |

### Lawyers & Law Firms

| Template | Demo brand | The angle | Route |
| --- | --- | --- | --- |
| Law Firm | Mehta & Partners | Editorial litigation practice, reported matters | `/templates/lawyer/firm` |
| Solo Advocate | Adv. Kavita Menon | Family & criminal, written for a client in distress | `/templates/lawyer/advocate` |
| Corporate & Technology | Sterling Legal | Deal sheet, fixed-fee packages, turnaround commitments | `/templates/lawyer/corporate` |

### Architects & Interiors

| Template | Demo brand | The angle | Route |
| --- | --- | --- | --- |
| Architecture Studio | Terrain Studio | Monochrome, works index, practice statement | `/templates/architect/studio` |
| Interior Design | Casa Interiors | Packages by home size, room by room, delay clause | `/templates/architect/interior` |
| Workplace Design | Kernel Workspace | B2B office fit-out, cost per seat, live-office phasing | `/templates/architect/workplace` |

### Real Estate & Construction

| Template | Demo brand | The angle | Route |
| --- | --- | --- | --- |
| Property Developer | Meridian Developers | Inventory cards, RERA numbers, construction progress | `/templates/real-estate/developer` |
| Construction Company | Ironwood Constructions | B2B capability statement, plant register, safety record | `/templates/real-estate/construction` |
| Property Brokerage | Anchor Property Advisors | Verified resale/rental listings, commission published | `/templates/real-estate/brokerage` |

### Education & Coaching

| Template | Demo brand | The angle | Route |
| --- | --- | --- | --- |
| Competitive Coaching | Apex Academy | Results board, batch structure, scholarships | `/templates/education/coaching` |
| Tuition Centre | BrightMinds Tuition | Parent-facing, weekly timetable, one monthly fee | `/templates/education/tuition` |
| Performing Arts Academy | Swaralaya Academy | Disciplines, graded exams, guru lineage, annual recital | `/templates/education/arts` |

### Fashion & Design

| Template | Demo brand | The angle | Route |
| --- | --- | --- | --- |
| Couture Atelier | Atelier Rhea | Editorial, collections, commission process | `/templates/fashion/couture` |
| Boutique Label | Indigo Thread | Lookbook, fabric provenance, made-to-order | `/templates/fashion/boutique` |
| Personal Stylist | Form & Figure | Styling as a service, wardrobe audit, session pricing | `/templates/fashion/stylist` |

> All names, figures, credentials and testimonials in the demos are **fictional**. Replace them
> before publishing anything.

Each template ships with:

- Sticky navigation with a real mobile sheet
- A hero built around that profession's actual conversion action
- Service / practice-area sections with sector-specific copy
- People sections (partners, doctor profile, counsel)
- Social proof, FAQ and a complete contact or booking form
- A profession-appropriate compliance note (ICAI advertising rules, medical emergency notice,
  Bar Council of India solicitation rules)

## Quick start

```bash
git clone https://github.com/HrishikeshAtole-24/ProWebKit.git
cd ProWebKit
npm install
npm run dev
```

Open <http://localhost:3000> for the gallery, then click into any template.

| Script | Does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Next.js lint |
| `npm run typecheck` | `tsc --noEmit` |

## Architecture

One Next.js app holds every template. Shared **primitives** keep the low-level UI consistent;
each template composes its **own** sections so no two look like the same site reskinned.

```
src/
├── app/
│   ├── layout.tsx                 # fonts, global metadata
│   ├── page.tsx                   # the gallery
│   ├── globals.css                # design tokens + theme classes
│   ├── sitemap.ts / robots.ts
│   └── templates/
│       ├── ca/corporate/page.tsx  # route: composes the template
│       ├── doctor/dental/page.tsx
│       ├── architect/studio/page.tsx
│       └── …                      # 21 routes across 7 categories
│
├── components/
│   ├── ui/                        # Button, Card, Section, Field, Accordion…
│   ├── layout/                    # Navbar, SiteFooter, PreviewBar
│   └── gallery/                   # gallery-only components
│
├── templates/                     # one folder per template
│   ├── ca-corporate/
│   │   ├── content.ts             # ALL copy and data
│   │   ├── brand.tsx              # wordmark + header + footer wiring
│   │   └── sections/              # bespoke sections, split when large
│   ├── ca-boutique/
│   │   ├── content.ts
│   │   └── sections.tsx           # smaller templates keep sections in one file
│   └── …                          # 21 template folders
│
├── lib/       # cn(), template registry
└── types/     # shared TypeScript contracts
```

### Theming

A template's entire palette is nine CSS variables on a wrapper class. `src/app/globals.css`
defines one `.theme-*` class per template (plus `.theme-kit` for the gallery); the route wraps the
page in one of them and every shared component re-skins itself.

```css
.theme-ca {
  --pk-radius: 0.75rem;
  --pk-bg: 255 255 255;
  --pk-ink: 15 27 45;
  --pk-brand: 15 37 68;      /* navy */
  --pk-accent: 176 138 60;   /* gold */
  /* … */
}
```

Colours are stored as `R G B` triplets so Tailwind opacity modifiers still work
(`bg-brand/10`, `text-accent/70`). Tailwind maps them in `tailwind.config.ts`:

```ts
brand: { DEFAULT: "rgb(var(--pk-brand) / <alpha-value>)", … }
```

To rebrand a template for a client, change those variables — not forty components.

### Rendering

Templates are React Server Components. The only client component is the navigation (it needs
scroll state and a menu toggle). FAQ accordions use native `<details>`, so they work without
hydration. No images ship with the templates: avatars are initials, and hero visuals are gradients
and CSS grids, so there is nothing to compress and nothing to break.

## Adding a template

1. **Register it** in `src/lib/registry.ts` — slug, category, description, route, theme class,
   swatch. The gallery, sitemap and docs all read from here.
2. **Add a theme** in `src/app/globals.css` if the palette is new (`.theme-<name>`).
3. **Create `src/templates/<slug>/`** with `content.ts` (all copy), `brand.tsx` (wordmark, header,
   footer) and `sections/`.
4. **Add the route** at `src/app/templates/<category>/<name>/page.tsx`: wrap in the theme class,
   export `metadata`, compose the sections.

Reuse `@/components/ui` for anything generic. If you find yourself writing a third variant of a
button, put it in the primitives instead.

## Rebranding for a client

1. Copy the template folder under `src/templates/`.
2. Edit **`content.ts`** — firm name, services, people, testimonials, FAQs, contact details.
3. Edit the theme block in `globals.css` — brand and accent colours, corner radius.
4. Replace the portrait and map placeholders (both are clearly marked in the JSX).
5. Point the forms at a real handler — a Next.js server action, Formspree, Resend, whatever.
   Every form is plain semantic markup with `name` attributes already set.
6. Delete `<PreviewBar />` from the route.

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `footer`) and one `h1` per page
- Every form control has an associated `<label>`; selects have a disabled placeholder option
- Visible focus rings via `:focus-visible`, never `outline: none` alone
- `prefers-reduced-motion` disables animation and smooth scroll
- Decorative icons are `aria-hidden`; tables carry captions and scoped headers

## Deploy

The app is a stock Next.js project and deploys to Vercel with no configuration:

```bash
npm i -g vercel
vercel
```

Set `NEXT_PUBLIC_SITE_URL` to your production URL so `metadataBase`, `sitemap.xml` and `robots.txt`
resolve correctly.

## Roadmap

- [x] Multiple templates per profession — 21 across 7 categories
- [x] Architect, real estate, education and fashion categories
- [ ] Photographer, restaurant, salon and fitness categories
- [ ] Dark mode per template
- [ ] Working form submissions via server actions
- [ ] Screenshot generation for the gallery cards

## Contributing

Issues and pull requests are welcome. If you are adding a template, follow the structure in
[Adding a template](#adding-a-template) and keep the copy specific to the profession — generic
lorem-ipsum templates are the thing this repo exists to replace.

## Legal note

The demo content includes profession-specific compliance notices because advertising by chartered
accountants (ICAI) and advocates (Bar Council of India) is restricted, and medical sites carry
duty-of-care expectations. Those notices are illustrative, **not legal advice** — have a
professional in the relevant jurisdiction review any live site.

## License

[MIT](LICENSE) © Hrishikesh Atole
