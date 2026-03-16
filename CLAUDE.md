# BCDA Static Site — Design System Rules

## Project Overview

- **Stack**: Jekyll static site generator + USWDS 3.13.0 + Sass
- **Site**: Beneficiary Claims Data API (bcda.cms.gov)
- **Styling**: USWDS utility classes + custom Sass in `src/sass/`
- **Templating**: Liquid (Jekyll) with HTML includes in `src/_includes/`
- **Pages**: Markdown + HTML in `src/_pages/`
- **Layouts**: `src/_layouts/` (base.html → default.html)

---

## Figma MCP Integration Rules

These rules define how to translate Figma designs into code for this project. Follow them for every Figma-driven change.

### Required Flow

1. Call `get_design_context` for the target Figma node(s)
2. Call `get_screenshot` for a visual reference
3. Compare the design output against the current page code
4. Translate differences using USWDS utility classes and Jekyll patterns (see token tables below)
5. IMPORTANT: Never paste Figma's React+Tailwind output directly — always convert to USWDS HTML

### Translation Rules

- Replace all Tailwind classes with USWDS utility classes
- Replace React JSX with plain HTML + Liquid templating
- Map Figma pixel values to USWDS spacing tokens (see table below)
- Map Figma hex colors to USWDS color tokens (see table below)
- Map Figma font sizes to USWDS type scale tokens (see table below)
- Reuse existing Jekyll includes from `src/_includes/` instead of duplicating markup
- IMPORTANT: Use `{{ '...' | relative_url }}` for all internal links and asset paths

### Spacing from Figma Auto-Layout

- IMPORTANT: When Figma shows a `gap` value on an auto-layout container (visible as `gap-[Npx]` in the Tailwind output), translate it to USWDS margin utilities on each child element. Figma's `gap` does not have a direct CSS equivalent in USWDS — you must apply `margin-top-{token}` to every child after the first.
- IMPORTANT: When adding ANY new element to a page, always check the Figma design context for the parent container's `gap` value and apply the corresponding USWDS spacing token as `margin-top-{token}` on the new element. Never add an element without checking its spacing relative to siblings.
- Common pattern: Figma `gap-[16px]` on a content column → use `margin-top-2` on each child after the first (16px = USWDS token `2`).
- When Figma shows `py-[Npx]` (vertical padding) on a container, translate to `padding-top-{token}` and `padding-bottom-{token}` on the corresponding HTML element.

### Asset Handling

- Store images in `src/assets/img/`
- Store downloadable files in `src/assets/downloads/`
- Reference USWDS assets via `src/assets/uswds/`
- IMPORTANT: If Figma MCP returns a localhost/remote asset URL, download and place it in `src/assets/img/` before referencing
- IMPORTANT: Do not add new icon packages — use USWDS icons via `{% include sprite.html icon="icon_name" %}`

---

## USWDS Spacing Tokens

When Figma shows a pixel value for margin, padding, or gap, convert to the nearest USWDS spacing token. Use these as utility classes: `margin-top-{token}`, `padding-x-{token}`, etc.

| Figma px | USWDS Token | Utility class example |
|----------|-------------|----------------------|
| 1px | `1px` | `margin-top-1px` |
| 2px | `2px` | `margin-top-2px` |
| 4px | `05` | `margin-top-05` |
| 8px | `1` | `margin-top-1` |
| 12px | `105` | `margin-top-105` |
| 16px | `2` | `margin-top-2` |
| 20px | `205` | `margin-top-205` |
| 24px | `3` | `margin-top-3` |
| 32px | `4` | `margin-top-4` |
| 40px | `5` | `margin-top-5` |
| 48px | `6` | `margin-top-6` |
| 56px | `7` | `margin-top-7` |
| 64px | `8` | `margin-top-8` |
| 72px | `9` | `margin-top-9` |
| 80px | `10` | `margin-top-10` |
| 120px | `15` | `margin-top-15` |

**Rounding rule**: If Figma shows a value between tokens (e.g., 28px), round to the nearest token (3 = 24px or 4 = 32px). Prefer the token that matches the visual spacing in the screenshot.

---

## USWDS Color Tokens

When Figma shows hex colors, map to USWDS theme tokens. IMPORTANT: Never hardcode hex values in HTML — always use USWDS utility classes.

### Theme Colors (used in utility classes like `bg-primary`, `text-base-dark`)

| Figma Hex | USWDS Token | Usage |
|-----------|-------------|-------|
| `#005ea2` | `primary` | Links, buttons, key UI |
| `#1a4480` | `primary-dark` | Hover states |
| `#162e51` | `primary-darker` | Dark backgrounds |
| `#d9e8f6` | `primary-lighter` | Light highlights |
| `#d83933` | `secondary` | Error, destructive |
| `#00bde3` | `accent-cool` | Accent cool buttons/badges |
| `#07648d` | `accent-cool-darker` | Accent cool dark |
| `#fa9441` | `accent-warm` | Accent warm |
| `#1b1b1b` | `ink` / `base-darkest` | Body text |
| `#3d4551` | `base-darker` | Secondary text |
| `#565c65` | `base-dark` | Tertiary text |
| `#71767a` | `base` | Muted text |
| `#a9aeb1` | `base-light` | Borders |
| `#dfe1e2` | `base-lighter` | Light borders, dividers |
| `#f0f0f0` | `base-lightest` | Light backgrounds |
| `#ffffff` | `white` | White backgrounds |

### BCDA Custom Theme Overrides (in `_uswds-theme.scss`)

- `accent-warm` family is remapped to `green-cool` (not default orange)
- `accent-warm` = `green-cool-60v`, `accent-warm-light` = `green-cool-40`
- Primary darker = `blue-90`
- Focus color = `cyan-30v`

---

## USWDS Typography Scale

Map Figma font sizes to USWDS type tokens. Use as utility classes: `font-sans-{token}`, `font-body-{token}`.

| Figma px | USWDS Token | Utility class |
|----------|-------------|---------------|
| ~13px | `3xs` | `font-sans-3xs` |
| ~14px | `2xs` | `font-sans-2xs` |
| ~15px | `xs` | `font-sans-xs` |
| ~16px | `sm` | `font-sans-sm` |
| ~17px | `md` | `font-sans-md` |
| ~22px | `lg` | `font-sans-lg` |
| ~32px | `xl` | `font-sans-xl` |
| ~40px | `2xl` | `font-body-2xl` |
| ~48px | `3xl` | `font-body-3xl` |

- Font family is **Open Sans** (`$theme-font-type-sans: 'open-sans'`)
- All headings use sans-serif
- Body text measure: `measure-5` (readable line length)

---

## Grid & Layout Patterns

This project uses the USWDS grid system consistently. Map Figma layout to these patterns:

```html
<!-- Standard page content container -->
<div class="grid-container">
  <div class="grid-row grid-gap-4">
    <div class="desktop:grid-col-8">Main content</div>
    <div class="desktop:grid-col-4">Sidebar</div>
  </div>
</div>
```

### Responsive Breakpoints

| Figma Width | USWDS Prefix | Breakpoint |
|-------------|-------------|------------|
| < 480px | (default) | Mobile |
| 480px+ | `mobile-lg:` | Mobile large |
| 640px+ | `tablet:` | Tablet |
| 1024px+ | `desktop:` | Desktop |
| 1200px+ | `desktop-lg:` | Desktop large |

- Max-width for all containers is `desktop-lg` (1200px)
- Apply responsive classes as prefixes: `desktop:grid-col-4`, `tablet:padding-x-3`

### Common Layout Patterns in This Project

- **Hero sections**: `grid-row` with image + text columns, `desktop:order-last` for image
- **Card groups**: `usa-card-group` with `tablet:grid-col-6 desktop:grid-col-4` per card
- **Process lists**: `<ol class="usa-process-list">` with `<li class="usa-process-list__item">`
- **Tables**: `usa-table usa-table--borderless usa-table--stacked`
- **Sections with vertical spacing**: `padding-y-7`, `margin-top-8`, `margin-top-10`

---

## USWDS Component Patterns

### Buttons

```html
<!-- Primary (default) -->
<a href="URL" class="usa-button">Button text</a>

<!-- Variants (map from Figma "type" property) -->
<a href="URL" class="usa-button usa-button--secondary">Secondary</a>
<a href="URL" class="usa-button usa-button--accent-cool">Accent Cool</a>
<a href="URL" class="usa-button usa-button--accent-warm">Accent Warm</a>
<a href="URL" class="usa-button usa-button--base">Base</a>
<a href="URL" class="usa-button usa-button--outline">Outline</a>
```

### Cards (with media inset)

```html
<li class="usa-card tablet:grid-col-6 desktop:grid-col-4">
  <div class="usa-card__container">
    <div class="usa-card__header">
      <h3 class="usa-card__heading">Title</h3>
    </div>
    <div class="usa-card__media usa-card__media--inset">
      <div class="usa-card__img text-center">
        <img src="{{ '/assets/img/logo.svg' | relative_url }}" alt="Alt text" class="maxw-15 margin-x-auto" />
      </div>
    </div>
    <div class="usa-card__body"><p>Description</p></div>
    <div class="usa-card__footer">
      <a href="URL" target="_blank" rel="noopener noreferrer" class="usa-button">CTA</a>
    </div>
  </div>
</li>
```

### Process List

```html
<ol class="usa-process-list margin-top-2 about-process-list">
  <li class="usa-process-list__item about-connector">
    <h3 class="usa-process-list__heading">Step heading</h3>
    <p>Step description</p>
  </li>
  <!-- Last item uses about-final-item class -->
  <li class="usa-process-list__item about-final-item">
    <h3 class="usa-process-list__heading">Final step</h3>
  </li>
</ol>
```

Custom process list variants:
- About page: `about-process-list` (blue rail)
- Docs pages: `docs-process-list` (gray rail)
- Production access: `production-access-process-list` (gold rail)

### Tables

```html
<table class="usa-table usa-table--borderless usa-table--stacked margin-bottom-4">
  <caption class="usa-sr-only">Accessible caption</caption>
  <thead>
    <tr>
      <th scope="col">Header</th>
    </tr>
  </thead>
  <tbody>
    <tr scope="row">
      <td data-label="Header">Cell content</td>
    </tr>
  </tbody>
</table>
```

### Alerts

```html
{% include alert.html variant="warning" heading="Alert heading" content="Alert body text." %}
```

---

## File Organization

```
src/
├── _data/              # YAML data files (nav, links, credentials)
├── _figma/             # Figma Code Connect mappings (*.figma.ts)
├── _includes/          # Jekyll partials (header, footer, banner, etc.)
├── _layouts/           # Page layouts (base.html, default.html)
├── _pages/             # Page content (Markdown + HTML)
├── _announcements/     # Announcement posts
├── assets/
│   ├── downloads/      # Downloadable files (data dictionaries, etc.)
│   ├── img/            # Custom images and SVGs
│   ├── js/             # Custom JavaScript
│   ├── meta/           # Favicons, manifest
│   └── uswds/          # USWDS compiled assets (css, js, fonts, img)
└── sass/
    ├── styles.scss                     # Main Sass entry point
    ├── _uswds-theme.scss              # USWDS theme configuration
    └── _uswds-theme-custom-styles.scss # Custom project styles
```

---

## Coding Conventions

- IMPORTANT: Use USWDS utility classes for spacing, color, and typography — not inline styles or custom CSS
- IMPORTANT: All internal links must use `{{ '/path' | relative_url }}`
- External links must include `target="_blank" rel="noopener noreferrer"`
- External links are auto-styled with an icon (exclude `bcda.cms.gov` and `github.com/CMSgov/bcda-app`)
- Accessibility: include `alt` on all images, `usa-sr-only` for screen-reader-only text, `scope` on table headers
- Download links use `data-tealium="download"` attribute for analytics
- Icon sprites: `{% include sprite.html icon="icon_name" class="text-middle" size="2" %}`
- Headings in Markdown sections (##, ###) — HTML headings (`<h2>`, `<h3>`) in HTML sections
- Page front matter requires: `layout`, `page_title`, `description`, `feedback_id`

---

## Figma Code Connect

Code Connect mappings live in `src/_figma/*.figma.ts` and use the HTML parser. These map published USWDS Design Kit components (file `qb6gYgys3iMWhBkxU0w9li`) to Jekyll/HTML code snippets.

- Config: `figma.config.json` (parser: "html", include: `src/**/*.figma.ts`)
- Publish: `npx figma connect publish`
- Mapped components: Button, Card, Header, Footer, Banner, Identifier, Process List (item + counter), Table Cell

---

## Build Commands

```bash
# Install dependencies
bundle install && npm install

# Start dev server (Jekyll + Sass watch)
npm start

# Compile USWDS Sass only
npx gulp compile

# Publish Figma Code Connect
npx figma connect publish
```
