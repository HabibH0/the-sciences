# Handoff: Nahw Trainer — Home & Settings

## Overview

Nahw Trainer is a personal study app for classical Arabic grammar (naḥw and ṣarf). This handoff covers two screens — a Home dashboard and a Settings screen — and the customisation layer they share: five colour themes and three Arabic typefaces, switchable at runtime.

The visual language is editorial and book-like: a soft paper ground, serif type, hairline rules carrying the structure, and colour applied as stroke rather than fill.

## About the design files

The files in this bundle are **design references created in HTML** — prototypes showing intended look and behaviour, not production code to copy directly. The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, SwiftUI, native, whatever is in use) using its established patterns and libraries. If no environment exists yet, choose the most appropriate framework and implement there.

- `Nahw Trainer.html` — self-contained, offline. Open in a browser to see the real thing. **This is the source of truth.**
- `Nahw Trainer.dc.html` — the authoring source, for reading the markup structure.

## Fidelity

**High-fidelity.** Final colours, typography, spacing, and interactions. Recreate pixel-perfectly using the codebase's own libraries and patterns.

---

## Design tokens

### Themes

Six variables per theme, set on one root element. Everything else reads `var(--color-*)`.

| Theme | `--color-bg` | `--color-surface` | `--color-text` | `--color-accent` | `--color-accent-600` |
|---|---|---|---|---|---|
| `manuscript` (default) | `#f3f2f2` | `#eae9e9` | `#201f1d` | `#b68235` | `#a06f24` |
| `mushaf` | `#f7f1e1` | `#efe7d2` | `#22271f` | `#2f6b4f` | `#24573f` |
| `lamp` | `#16130f` | `#211d16` | `#ece3d1` | `#c9a04a` | `#d8b25c` |
| `ink` | `#eceef1` | `#e0e4ea` | `#1b2028` | `#3d4d80` | `#2f3d68` |
| `sepia` | `#ece0ca` | `#e2d4b9` | `#2d2115` | `#7d5029` | `#653f1e` |

Seventh variable, derived per theme:

```css
--color-divider: color-mix(in srgb, <that theme's --color-text> 18%, transparent);
```

`lamp` is the only dark theme. Its `--color-accent-600` is *lighter* than its base accent, because hover on a dark ground goes up in value, not down. Do not "fix" this.

### Muted text

There is no separate muted-text token. Muted text is a mix of the theme ink, at these exact percentages:

| Use | Value |
|---|---|
| Body copy inside cards / hero | `color-mix(in srgb, var(--color-text) 78-82%, transparent)` |
| Secondary labels, metadata | `color-mix(in srgb, var(--color-text) 55-62%, transparent)` |
| Kickers, inactive nav items | `color-mix(in srgb, var(--color-text) 48-52%, transparent)` |

### Typography

Latin, loaded from Google Fonts:

| Role | Family | Notes |
|---|---|---|
| Headings | `Cormorant Garamond`, serif | Weight 400 at display sizes (36px+), 500 at 20-30px, 600 below that. **Never bold.** |
| Body | `Lora`, serif | Weight 400. |

Arabic, user-selectable — one of three:

| Key | Body face | Heading face | Label shown |
|---|---|---|---|
| `naskh` (default) | `"Noto Naskh Arabic", serif` | same | Naskh — *textbook* |
| `uthmani` | `Amiri, serif` | same | Uthmani — *mushaf* |
| `kufi` | `"Noto Naskh Arabic", serif` | `"Reem Kufi", serif` | Kufi headings — *Naskh body* |

Google Fonts request used by the prototype:

```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Amiri:ital,wght@0,400;0,700;1,400&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Reem+Kufi:wght@400;500;600&display=swap
```

Arabic line-height is **1.9** everywhere — the vowel marks need the room. Do not tighten it.

### Type scale in use

| Element | Size / weight / family |
|---|---|
| Hero h1 | 52px / 400 / heading, line-height 1.06 |
| Settings h1 | 46px / 400 / heading, line-height 1.08 |
| Section h2 | 30px / 400 / heading |
| Settings group h2 | 22px / 500 / heading |
| Chapter card h3 | 23px / 500 / heading |
| Body paragraph | 16px / 400 / body, line-height 1.7 |
| Card body | 14.5px / 400 / body, line-height 1.65 |
| Nav item | 14.5px / heading |
| Ledger value | 17px / heading, tabular |
| Ledger label, kicker | 12-13px, `letter-spacing: 0.06-0.12em`, `text-transform: uppercase` |
| Footer, fine print | 12.5px |
| Hero Arabic in drop panel | 19px / Arabic heading face |
| Chapter card Arabic | 20px / Arabic heading face |
| Specimen Arabic word | 26px / Arabic body face |
| Typeface sample line | 23px / that option's own face |
| Calligraphy watermark (Home) | 132px / Amiri, line-height 1.5 |
| Calligraphy watermark (Settings) | 92px / Amiri, line-height 1.5 |

### Radius, shadow, ornament

- Border radius: **2px** on cards, swatches, and segmented controls. That is the only radius in the design apart from the circular radio dots and toggle.
- Shadow: one only, on the selected theme card — `0 1px 2px color-mix(in srgb, #2d2b2b 14%, transparent)`. No other shadows.
- Calligraphy watermark opacity: **0.072**. Colour: `var(--color-accent)`. `pointer-events: none`, `aria-hidden`, `white-space: nowrap`, `direction: rtl`.

---

## Shared chrome

### Header

`display: flex; align-items: baseline; justify-content: space-between; gap: 32px; padding: 22px 56px 18px; border-bottom: 1px solid var(--color-divider);`

**Left — brand:** flex, `gap: 14px`, baseline-aligned.
1. `نحو` — Reem Kufi, 26px, `var(--color-accent)`, line-height 1.
2. A 1px × 22px `var(--color-divider)` vertical rule.
3. "Nahw Trainer" — heading face, 21px, `letter-spacing: 0.01em`.

**Right — nav:** flex, `gap: 26px`, baseline-aligned, heading face 14.5px.
Items in order: Home · Lessons · Iʿrāb · Ṣarf · Reader · Review · Settings.

- Active item: `var(--color-accent)`, `padding-bottom: 3px`, `border-bottom: 1px solid var(--color-accent)`.
- Inactive but navigable (Home / Settings): same but `border-bottom: 1px solid transparent` and `color-mix(in srgb, var(--color-text) 48%, transparent)`.
- Inert (Lessons, Iʿrāb, Ṣarf, Reader, Review): `color-mix(in srgb, var(--color-text) 48%, transparent)`, `cursor: default`, no hover, not focusable.

### Footer

`padding: 22px 56px 30px; border-top: 1px solid var(--color-divider); display: flex; justify-content: space-between; gap: 24px;` — 12.5px, `color-mix(in srgb, var(--color-text) 50%, transparent)`.

- Left: "Nahw Trainer — a private study desk"
- Right, tabular: the live state, formatted `<Theme name> · <Face name> · 100%` — e.g. `Manuscript · Naskh · 100%`.

---

## Screen 1 — Home

`padding: 0 56px 72px` on the main region.

### 1a. Hero panel

`position: relative; overflow: hidden; border: 1px solid var(--color-divider); border-top: 0; padding: 54px 48px 46px;`

Border-top is zero because the header's bottom rule serves as its top edge. Keep that.

**Four corner brackets** — absolutely positioned 14px × 14px `<span>`s, inset 10px from each corner, each drawing only its two adjacent sides at `1px solid var(--color-accent)`. Top-left draws top+left, top-right draws top+right, and so on.

**Calligraphy watermark** — `وَالْعِلْمُ نُورٌ`, absolutely positioned `right: 20px; bottom: -6px`, Amiri 132px, opacity 0.072, accent colour, clipped by the panel's `overflow: hidden`.

**Contents** — one flex row, `align-items: flex-end; justify-content: space-between; gap: 48px; flex-wrap: wrap`, above the watermark on the z-axis.

*Left column, `max-width: 620px`:*

1. **Illuminated drop panel** — inline-flex, `gap: 12px`, `padding: 7px 18px 8px`, `border: 1px solid var(--color-accent)`, `border-radius: 2px`, `margin-bottom: 26px`. Contains: a 5px accent square rotated 45°, the Arabic `بابُ المرفوعات` at 19px in the Arabic heading face and accent colour, then another 5px diamond.
2. **h1** — "The chapter of the nominatives", 52px / 400, line-height 1.06, `margin: 0 0 16px`.
3. **Paragraph** — 16px, line-height 1.7, justified, `hyphens: auto`, `text-wrap: pretty`, `max-width: 54ch`, `margin: 0 0 28px`, ink at 82%. Copy:
   > You left off in the third section: the governors of the mubtadaʾ, and why the khabar follows it in raise. Six lessons remain in this chapter before the manṣūbāt open.
4. **Two buttons**, flex `gap: 12px`:
   - Primary — "Continue lesson 7" — 1px `var(--color-accent)` border, accent text, transparent background. Hover: `color-mix(in srgb, var(--color-accent) 12%, transparent)`. Active: 22%.
   - Secondary — "Review 42 cards" — 1px `var(--color-divider)` border, ink text.
   - Both: heading face 14px, `padding: 9px 17px`, `border-radius: 2px`.

*Right column — the ledger.* A `<dl>`, `min-width: 232px`, tabular figures. Four rows, each `display: flex; justify-content: space-between; gap: 20px; padding: 10px 0`, with `border-bottom: 1px solid var(--color-divider)` on all but the last.

| Label (13px, uppercase, 0.06em, ink 60%) | Value (17px, heading face) |
|---|---|
| Lessons done | 16 / 56 |
| Iʿrāb drills | 96 |
| Cards due | 42 |
| Parse accuracy | 87% |

### 1b. Arabesque separator

`display: flex; align-items: center; gap: 20px; padding: 40px 0 34px`. A 1px divider line flexes to fill on each side of a centred 188 × 26 SVG: `fill: none; stroke: var(--color-accent); stroke-width: 1`.

```svg
<svg width="188" height="26" viewBox="0 0 188 26" fill="none" stroke="currentColor" stroke-width="1">
  <path d="M94 13 L102 5 L110 13 L102 21 Z"/>
  <path d="M86 13 C 74 13, 74 3, 62 3 C 50 3, 50 13, 38 13"/>
  <path d="M86 13 C 74 13, 74 23, 62 23 C 50 23, 50 13, 38 13"/>
  <path d="M118 13 C 130 13, 130 3, 142 3 C 154 3, 154 13, 166 13"/>
  <path d="M118 13 C 130 13, 130 23, 142 23 C 154 23, 154 13, 166 13"/>
  <path d="M38 13 L4 13 M166 13 L184 13"/>
  <circle cx="4" cy="13" r="2"/><circle cx="184" cy="13" r="2"/>
</svg>
```

### 1c. Chapters

h2 "Chapters", 30px / 400, `margin: 0 0 20px`.

The grid uses a **1px gap over a divider-coloured background** to draw its own rules — do not give the cards borders:

```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(268px, 1fr));
gap: 1px;
background: var(--color-divider);
border: 1px solid var(--color-divider);
```

Each card: `background: var(--color-bg); padding: 28px 26px 24px; display: flex; flex-direction: column; gap: 10px; min-height: 210px`. Hover: `background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg))`.

Card structure, top to bottom:
1. Row, baseline, space-between: kicker (12px, uppercase, 0.1em, ink 52%, tabular) and the Arabic chapter name (20px, Arabic heading face, accent).
2. h3 — 23px / 500, `margin: 4px 0 0`.
3. Body paragraph — 14.5px, line-height 1.65, justified, `flex: 1`, ink 78%.
4. Footer row — `padding-top: 12px; border-top: 1px solid var(--color-divider)`, flex, `gap: 12px`, tabular. A 2px progress track (`flex: 1`, `color-mix(in srgb, var(--color-text) 14%, transparent)`) with a solid accent fill at `round(done / of × 100)%`, then the count at 12.5px, ink 58%.

The four cards:

| Kicker | Arabic | Title | Body | Progress |
|---|---|---|---|---|
| Bāb I | المرفوعات | Al-Marfūʿāt | The nominatives: fāʿil, mubtadaʾ and khabar, and the governors that raise them. | 8 of 12 |
| Bāb II | المنصوبات | Al-Manṣūbāt | The accusatives: mafʿūl bihi, the ẓurūf of time and place, ḥāl and tamyīz. | 3 of 15 |
| Bāb III | المجرورات | Al-Majrūrāt | Genitive by preposition and by iḍāfa, and the ḥarf standing as governor. | 0 of 9 |
| Bāb IV | الصرف | Al-Ṣarf | The ten forms, the sound and defective root, and the awzān of the maṣdar. | 5 of 20 |

---

## Screen 2 — Settings

Two columns separated by a 1px rule, drawn the same way as the chapter grid:

```css
padding: 0 56px 80px;
display: grid;
grid-template-columns: minmax(0, 1fr) 384px;
gap: 1px;
background: var(--color-divider);
```

Both columns take `background: var(--color-bg)`.

### Left column — `padding: 46px 44px 56px`

**Masthead:** kicker "Preferences" (12px, uppercase, 0.12em, ink 52%); h1 "The page, set to your hand" (46px / 400, line-height 1.08, `margin: 10px 0 0`); paragraph (16px, line-height 1.7, justified, `max-width: 56ch`, ink 78%):
> Everything here changes only how the text is set. Nothing changes what is taught.

Then a hairline rule, `margin: 38px 0 30px`.

**Group 1 — "Paper & ink"** (h2 22px / 500) with sub-line "Five grounds. The structure of the page does not change with them." (14px, ink 60%, `margin: 0 0 22px`).

Grid: `repeat(auto-fit, minmax(196px, 1fr))`, `gap: 14px`. One card per theme, in the table order above.

Each card: `border-radius: 2px`, `overflow: hidden`, border `1px solid var(--color-divider)` — or `1px solid <the current theme's accent>` plus the small shadow when selected.

- **Swatch** — 84px tall, `background: <that theme's bg>`, `border-bottom: 1px solid var(--color-divider)`, `padding: 16px 16px 0`, `position: relative`. Inside, three 1px "lines of text" in *that theme's* ink: 70% wide at 0.75 opacity, 86% at 0.4, 52% at 0.4, each 9px apart. Plus a 16px square in *that theme's* accent, 1px border, rotated 45°, at `top: 16px; right: 14px`.
- **Caption row** — `padding: 12px 14px 13px`, baseline space-between: the name (heading face 17px) and the note (11.5px, uppercase, 0.07em, ink 52%) — `default`, `ivory`, `night`, `sober`, `aged` respectively.

The swatch previews each theme in **its own** colours, while the card chrome follows the **currently active** theme. Both are correct.

**Group 2 — "Arabic typeface"**, sub-line "Each specimen is set in the face it names."

Three rows in a `gap: 12px` column. Each row: `display: flex; gap: 16px; align-items: flex-start; padding: 16px 18px`, `border-radius: 2px`, border `1px solid var(--color-divider)` or `1px solid <accent>` when selected.

- **Radio** — 15px circle, `margin-top: 4px`, 1px border (accent when selected, divider when not), containing a 7px dot filled with the accent only when selected.
- **Right side** — a baseline row of the name (heading face 17px) and the note (12.5px, ink 55%); beneath it, `dir="rtl"`, the sample line at 23px in **that option's own face**, line-height 1.9, `margin-top: 6px`, ink 88%:
  > وَالصَّابِرِينَ عَلَى مَا أَصَابَهُم

There is no third group. Arabic size, grammar-term language, ḥarakāt, and ornament were all removed from the UI and are fixed at 100%, Arabic terms, marks on, and restrained.

### Right column — the specimen rail — `padding: 46px 34px 56px`, `position: relative; overflow: hidden`

**Calligraphy watermark** — `خَطٌّ وَقَلَمٌ`, absolute at `left: -30px; bottom: 18px`, Amiri 92px, opacity 0.072, accent.

Above it: kicker "Specimen"; a 14px / ink 68% line "A parsed line, set with your current choices."; then the specimen box — `border: 1px solid var(--color-divider); padding: 30px 24px 24px`, a column with `gap: 20px`, `dir="rtl"`.

1. **The parsed words** — flex-wrap, `gap: 18px 22px`, centred. Each word is a column, centred, `gap: 10px`, `padding: 0 8px 4px`, with `border-bottom: 1px solid var(--color-accent)`. Above: the Arabic at 26px in the Arabic body face, line-height 1.9. Below: its label, heading face 12.5px, `letter-spacing: 0.04em`, ink 60%, `white-space: nowrap`.

   Reading right to left — إِنَّ اللهَ مَعَ الصَّابِرِينَ (Qurʾān 2:153):

   | Word | Label |
   |---|---|
   | إِنَّ | حرف توكيد ونصب |
   | اللهَ | اسم إنّ منصوب |
   | مَعَ | ظرف مكان منصوب |
   | الصَّابِرِينَ | مضاف إليه مجرور |

   Grammatical roles are **not** colour-coded. That is deliberate — the design is monochrome apart from the accent, and adding role colours would break it.

2. **A small divider**, `dir="ltr"` — two flexing 1px lines with a 5px accent-outlined diamond (rotated 45°) between them, `gap: 12px`.
3. **A gloss**, `dir="ltr"`, 13.5px, line-height 1.7, justified, ink 72%:
   > Indeed Allah is with the patient. The ḥarf inna governs naṣb in the noun that follows it.

Below the box, `margin-top: 26px`, two buttons at `gap: 10px`: "Save" (primary outline) and "Reset to Manuscript" (ghost — no border, accent text, hover tint).

---

## Interactions & behaviour

| Trigger | Result |
|---|---|
| Click "Home" / "Settings" in nav | Switch screen. Active underline moves. No transition. |
| Click a theme card | Theme applies **immediately** across the whole app — header, footer, both screens. Selected card takes the accent border and small shadow. |
| Click a typeface row | Face applies immediately to every Arabic run: hero drop panel, chapter names, specimen. Selected row takes the accent border and filled dot. |
| Click "Reset to Manuscript" | Back to `manuscript` + `naskh`. |
| Hover a chapter card | `background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg))` |
| Hover a primary button | `color-mix(in srgb, var(--color-accent) 12%, transparent)`; active 22% |
| Keyboard focus | `outline: 2px solid var(--color-accent); outline-offset: 2px` — never the browser default |
| Text selection | `background: color-mix(in srgb, var(--color-accent) 30%, transparent)` |

Theme switching is instantaneous — no crossfade. The layout must not shift when it happens.

Inert nav items do nothing, take no hover, and are not focusable.

## State

Two persisted values. Nothing else.

```
theme: 'manuscript' | 'mushaf' | 'lamp' | 'ink' | 'sepia'   // default 'manuscript'
face:  'naskh' | 'uthmani' | 'kufi'                          // default 'naskh'
```

Persist both (localStorage or the codebase's preference store) and restore on load. Screen routing is normal app navigation, not persisted state.

No data fetching. Every number and string in this design is fixed content — wire them to real data when the backing store exists.

## Accessibility

- The header nav is a `<nav>`; the ledger is a `<dl>`; chapters are `<article>`s.
- Theme cards and typeface rows are **radio groups**, not buttons — they select, they do not act. Give them proper roles and keyboard arrow navigation.
- Every decorative element — corner brackets, diamonds, calligraphy watermarks, the arabesque — is `aria-hidden="true"`.
- Arabic runs carry `lang="ar"` alongside `dir="rtl"`.
- `lamp` is the dark theme; check its contrast holds after implementation.

## Assets

None. Everything is type, CSS, or inline SVG. Icons, if you add any, should be Lucide.

## Files in this bundle

- `Nahw Trainer.html` — standalone reference prototype (open this first)
- `Nahw Trainer.dc.html` — authoring source, for reading structure
- `PROMPT.md` — the paste-into-Claude-Code brief
- `README.md` — this document
