# Handoff: The Sciences — UI Redesign (Classical theme)

## Overview
A full visual redesign of The Sciences (Arabic grammar learning app, repo `HabibH0/the-sciences`) in an editorial "Classical" style: near-white paper ground, hairline borders, gold accent used as stroke (never fill), serif headings, Scheherazade New for Arabic. Two design references are included: a phone layout (390×844) and a desktop webapp layout. All screens of the existing app are covered — Home/dashboard, module page with Practice Mode, lesson, quiz, practice sessions (MCQ + تركيب), session review, lesson-complete, Schedule, Account, Achievements, Library, book page, reader (read → patterns → build), and weak-word practice.

## About the Design Files
The two `.dc.html` files in this bundle are **design references created in HTML** — interactive prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate these designs inside the existing codebase** (vanilla JS, `js/render.js` template-string screens, hash-free state routing in `js/state.js`/`js/main.js`) using its established patterns. Keep the app's existing logic, content, and state handling; this handoff changes only markup and CSS. `source-map.md` maps each designed screen to the repo functions it re-skins.

Note on reading the files: styles are inline on each element. Ignore the `{{ ... }}` placeholders, `<sc-if>`/`<sc-for>` tags, and the `<script>` blocks — they are prototype plumbing. The rendered look (open either file in a browser) plus this README are the specification.

## Fidelity
**High-fidelity.** Colors, type, spacing, radii, and copy are final. Recreate pixel-perfectly, expressing values through CSS variables (tokens below) rather than hard-coded literals.

## Design Tokens
Define once in `:root`:
- `--color-bg: #f3f2f2` (paper ground); `--color-text: #201f1d` (ink)
- Accent (gold): base `#b68235`; darker steps for text on light ground: 700 ≈ `#8a5f22`, 900 ≈ `#5c3d12`. Tinted fills are always mixes: `color-mix(in srgb, var(--color-accent) 5–8%, var(--color-bg))` for selected/current cards, 18% for tapped-word highlight.
- Neutrals: 100 `#e9e8e7`, 200 `#dbd9d7`, 300 `#c4c1be`, 400 `#a29e9a`, 500 `#807c77`, 600 `#6b6762`, 700 `#55524e` — 600 for secondary text, 700 for secondary body copy. Divider: `color-mix(in srgb, var(--color-text) 14%, transparent)`.
- Ink panels (hero, book covers, section plates): `color-mix(in srgb, #201f1d 92%, black)`; text on ink: `color-mix(in srgb, var(--color-bg) 75–90%, transparent)`; ghost numerals ~7% bg-mix.
- Radii: `--radius-md: 4px` (tags, chips, inputs), `--radius-lg: 7px` (cards, plates), `18px` phone frame, `999px` pill chips (drill word-chips), `50%` status rings.
- Shadows: whisper-soft ink-tinted — sm `0 1px 2px rgba(32,31,29,.06)`, md `0 2px 6px rgba(32,31,29,.08)`, lg `0 8px 24px rgba(32,31,29,.14)`.
- Type: headings **Cormorant Garamond** (weight ≤ 600; larger = lighter), body **Lora**, Arabic **Scheherazade New** (Google Fonts). Tabular numerals (`font-variant-numeric: tabular-nums`) wherever figures align (counters, ledgers, stats).
- Kickers: 10px, uppercase, letter-spacing 0.08–0.1em, accent-700.
- Scrollbars hidden globally (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`), scrolling preserved.

## Recurring Components
- **Card**: 1px divider border, radius-lg, transparent/paper fill, shadow-sm. Never solid accent fill.
- **Current/selected card**: 1px accent border, 5–8% accent tint, shadow-md; list items may add a 3px accent left border.
- **Locked row**: divider border, opacity .5, lock icon.
- **Status ring**: 27–32px circle, 1px border — check (done, accent), number (current, accent bold), lock (neutral).
- **Tag**: 10px text, 1px border, radius-md, 2px 8px padding; accent for active ("Next", "Resume"), neutral for "Locked".
- **Stats ledger**: row of value-over-label pairs separated by hairline top/bottom rules; value 16px semibold tabular, label 10px uppercase neutral-600.
- **Ink plate**: dark panel, radius-lg, overflowing ghost Arabic numeral/letter bottom-right, gold kicker, paper-toned text; used for home hero, module cover, book covers, completion screens.
- **Buttons**: outlined, never filled — primary = 1px accent border + accent-700 text; secondary = divider border; ghost = borderless neutral. Hover = accent tint mix; focus-visible = 2px accent outline offset 2.
- **Answer option states** (quiz/checks/MCQ): resting = 1px divider; selected-correct = 2px accent + 8% tint + ✓; selected-wrong = 1px neutral-700 + ✗ with correct row highlighted.
- **Drill chips** (workshop/build): Scheherazade 17px, pill radius, used chips drop to .35 opacity; slots are dashed-border boxes that fill with accent border + tint.
- **Icons**: Lucide, stroke ~2.

## Screens (both layouts; see files for exact copy)
- **Home**: ink hero (greeting, streak/level cluster, resume-lesson card with progress ring), course switcher dropdown next to "Your modules", module list grouped by chapter headings (Arabic heading + hairline) with status rings; Explore cards; bottom tab bar (phone) / top nav with accent-underline active tab (desktop). Desktop wraps the module list in its own bordered container, max-height 560px, internal scroll.
- **Module page**: ink plate cover (ghost numeral, chapter path, Arabic title, gold rule, description, lesson progress), lesson list with status rings, Practice Mode entry; desktop puts practice config + module stats in a right rail.
- **Lesson**: concept slides with dot pagination, inline exercises.
- **Quiz / practice**: question header with counter + combo, option cards per answer-state spec; تركيب places role-chips onto sentence slots; End session → review.
- **Session review**: ink plate with ghost score numeral, score + accuracy/XP/combo ledger, "Worth another look" missed-card corrections first, full hairline log with result dots, "Drill the N you missed" primary.
- **Lesson complete**: centered plate, أحسنت!, XP tag, next-lesson primary.
- **Schedule**: Up Next queue, deadline ledger (lessons left / days left / today's target) + date/reset rows + today's checklist bar, Revision module-quiz picker (pick/random segmented + module rows).
- **Account**: level/XP bar card, streak calendar (7-col grid, filled squares, today outlined), course progress rows, achievements entry row, text-size sliders with live previews, cloud sync actions.
- **Achievements**: level bar + all 34 badges grouped by section; earned = accent border + award icon, locked = .7 opacity + lock + progress counter.
- **Library**: series shelves (Arabic series heading + hairline + count) of book cards with colored spines and progress bars; desktop = 3-column grid per shelf.
- **Book page**: ink cover (volume kicker, Arabic title, author, blurb, chapters-read/weak-words ledger, Practice-weak-words button), chapter contents list in the lesson-list idiom (rings, blurb second line, "Continue · p. 9, then the drills" on the open chapter), chapter modal (Free read / Resume practice).
- **Reader**: header with 3-step rail (Read → Patterns → Build) + thin progress bar; page/paragraph strip with EN toggle; Arabic text as tappable words (dashed underline = marked unknown, tint = selected); word card (meaning, dictionary form, root, word class, mark button — margin aside on desktop); paragraph checks; pattern-workshop cloze drills with chips + rationale; sentence-build drills with slots/chips/distractor notes; chapter-complete plate with ledger + still-marked words.

## Interactions & State
All flows are wired in the prototypes — click through them for expected behavior. Navigation, drill state, answer grading, word-marking, and text-size scaling all exist in the real app already; re-skin, don't re-architect. Transitions are instant (no animation added); hover tints per the button/card specs.

## Assets
No image assets. Fonts from Google Fonts (Cormorant Garamond, Lora, Scheherazade New). Icons: Lucide (inline SVG in the prototypes — copy paths as needed).

## Files
- `The Sciences - App.dc.html` — phone layout, all screens
- `The Sciences - Desktop.dc.html` — desktop layout, all screens
- `source-map.md` — screen → repo-source mapping (which `js/render.js` functions each screen re-skins)
- `screens/mobile/` — 01 home · 02 module · 03 lesson (concept 1) · 04 lesson (last concept) · 05 quiz · 06 lesson complete · 07 practice setup · 08 practice MCQ · 09 practice تركيب · 10 session review · 11 schedule · 12 account · 13 achievements · 14 library · 15 book · 16 chapter modal · 17 reader (read) · 18 reader (word card) · 19 pattern workshop · 20 sentence build · 21 chapter complete · 22 weak-word practice
- `screens/desktop/` — 01 home · 02 module · 03 lesson · 04 quiz · 05 practice · 06 schedule · 07 account · 08 library · 09 book · 10 chapter modal · 11 reader (read) · 12 reader (word card) · 13 pattern workshop · 14 sentence build · 15 chapter complete
