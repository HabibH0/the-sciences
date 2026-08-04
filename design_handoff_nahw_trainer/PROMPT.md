# Task

Implement the Nahw Trainer UI in this codebase, matching the attached design reference exactly.

Design reference: `Nahw Trainer.html` in this folder — a standalone, self-contained HTML prototype. Open it in a browser. It is a **reference**, not code to copy: recreate it using this codebase's existing framework, component patterns, and conventions. Do not paste its markup in.

Read `README.md` in this folder first. It carries every exact colour, font, size, and spacing value. Use those values verbatim — do not approximate, do not substitute "close enough" tokens, do not round pixel values.

## What to build

Two screens — **Home** and **Settings** — plus the shared header and footer, and a theming layer that drives both.

## Non-negotiables

1. **Theming is CSS custom properties, not conditional styles.** Five themes each define six variables (`--color-bg`, `--color-surface`, `--color-text`, `--color-accent`, `--color-accent-600`, `--color-divider`). Set them on one root element. Every other rule in the app references `var(--color-*)`. No component may branch on the active theme.
2. **`--color-divider` is derived, not authored:** `color-mix(in srgb, <theme text hex> 18%, transparent)`. Keep it derived so it follows the ink of whichever theme is active.
3. **Colour is stroke, never fill.** Buttons are 1px outlines on transparent. Cards are bordered and unfilled. There are no solid accent blocks anywhere in this design. If you find yourself writing `background: var(--color-accent)` on anything larger than a 5px diamond mark, it is wrong.
4. **Arabic and Latin type are separate stacks.** Latin: Cormorant Garamond (headings) over Lora (body). Arabic: whichever face the user has chosen. Never render Arabic in the Latin stack or vice versa.
5. **Arabic text is `dir="rtl"`, in an LTR page.** Only the Arabic runs flip. The chrome, the layout, and the Latin copy stay LTR.
6. **Numbers that stand as figures are tabular** (`font-variant-numeric: tabular-nums`): the hero ledger, the chapter progress counts. Running prose is not.
7. **Justified body copy** (`text-align: justify; hyphens: auto`) on the paragraph-length text, at the measures given in the README.
8. **Ornament is restrained and fixed.** Four hairline corner brackets on the hero, one arabesque separator SVG, one pale calligraphic line per screen. There is no background pattern. There is no user control for this.
9. **Theme and typeface persist** across reloads.
10. **Focus rings are themed**, never the browser default: `outline: 2px solid var(--color-accent); outline-offset: 2px` on `:focus-visible`.

## Order of work

1. The theme layer and font loading, with a way to switch themes, before any screen work.
2. The header, footer, and page shell.
3. Settings — it is the simpler screen and it proves the theme layer works.
4. Home.
5. Persistence.

## Definition of done

Open the reference HTML side by side with your build. Step through all five themes and all three typefaces in both. Every colour, rule position, type size, and gap should match. Then check: keyboard focus visible on every control, the Arabic renders with its vowel marks intact, and nothing in the layout shifts when the theme changes.

## Out of scope

Lessons, Iʿrāb, Ṣarf, Reader, and Review are inert nav labels in this design. Leave them as non-interactive labels — do not invent those screens.
