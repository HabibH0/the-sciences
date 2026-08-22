# Second-Pass Product Polish Audit

Audited at 1440×900 desktop and 390×844 mobile across the course overview, modules, lesson exercises, practice mode, Schedule, Library reader, Account, and appearance settings.

## Highest-Leverage Polish Improvements

1. **Enlarge lesson progress-dot hit areas** without enlarging the dots visually. The current mobile targets measure only 8–11px. `POLISH-018`
2. **Increase translation-control tap areas** in the reader. Phrase controls measure roughly 17×24px; the paragraph “EN” control is approximately 15×22px. `POLISH-019`
3. **Deep-link “Set a target date” directly into the open date picker**, rather than landing at the top of Schedule with the control below the fold. `POLISH-004`
4. **Make practice-session setup explicit:** preselect 10 cards and provide a clearly labelled start action instead of launching when a length pill is tapped. `POLISH-005`
5. **Protect against accidental early session endings** and label partial results accurately. `POLISH-007`
6. **Collapse the large desktop course hero while browsing deep modules**, retaining only a compact resume strip. `POLISH-013`
7. **Simplify course-search results** with match highlighting, a result count, and concise module breadcrumbs. `POLISH-001`
8. **Add restrained transitions and desktop shortcuts** to make repeated lesson/practice interactions feel faster and more deliberate. `POLISH-010`, `POLISH-015`

## UI Refinement

### Clarify course-search result hierarchy

**ID:** POLISH-001  
**Area:** UI  
**Impact:** High Polish  
**Location:** Advanced Sarf → Your modules → lesson search results

**Observation**

Searching for “مصدر” returns five useful results, but each row repeats a long module description beneath the lesson description. The module name sits separately at the far edge, no result count is shown, and matching text is not highlighted.

**Why it matters**

The results technically work, but visually require too much interpretation. Repeated descriptions make scanning bilingual results unnecessarily slow.

**Recommended refinement**

Show “5 lessons found,” highlight the matching term, and replace the repeated module description with a compact breadcrumb such as `Module 11 · الجامد والمشتق`. Keep the lesson title and its one-line description as the dominant content.

**Expected effect**

Results will feel purpose-built for search rather than like repurposed module rows.

**Acceptance criteria**

- A result count appears once filtering begins.
- Matching text is visibly highlighted in titles or descriptions.
- Each row contains one lesson description and one concise module breadcrumb.
- Long results remain no more than two text lines plus metadata on desktop.

### Make the current course unmistakable in the selector

**ID:** POLISH-002  
**Area:** UI  
**Impact:** Medium Polish  
**Location:** Course overview → “Switch course” menu, desktop and mobile

**Observation**

The current course receives a faint tinted background but has no checkmark or explicit “Current” label. On mobile it appears as the fourth item, so recognition relies heavily on remembering the trigger text.

**Why it matters**

Course switching is consequential enough that the selected state should be understood immediately, especially when Arabic and English names are both present.

**Recommended refinement**

Retain the stable course order, but add a trailing checkmark and a quiet `Current` label to the active course. On opening, place keyboard focus on that item.

**Expected effect**

The menu will communicate state instantly without requiring stronger borders or heavier color.

**Acceptance criteria**

- Exactly one course has a visible checkmark and `Current` label.
- The current item remains recognizable without relying on background color.
- Opening the menu focuses the current item.
- The selector still closes with Escape and returns focus to its trigger.

### Separate answer feedback from focus styling

**ID:** POLISH-003  
**Area:** UI  
**Impact:** High Polish  
**Location:** Lesson exercises and practice questions after “Check”

**Observation**

“Correct.” and “Not quite…” appear inside a thin, full-width gold rectangle that resembles the application’s keyboard focus and selected-answer treatment. Correct answers also use the same gold border, so selection, focus, and outcome compete visually.

**Why it matters**

The result is announced correctly, but its visual language is ambiguous. Users should identify success or correction without wondering whether a new control has received focus.

**Recommended refinement**

Style outcome messages as compact status blocks: a check/cross icon, a subtle tinted background or 3px leading rule, and 8–12px separation from the answers. Preserve the live-region announcement and programmatic focus without drawing a focus-like rectangle around the entire message.

**Expected effect**

Answer outcomes will feel calmer, clearer, and more intentional.

**Acceptance criteria**

- Selection, keyboard focus, correct state, and incorrect state remain visually distinct.
- Feedback retains an accessible live announcement.
- Corrective text does not resemble an input or selected answer.
- Meaning remains clear without color alone.

## UX Refinement

### Complete the target-date handoff

**ID:** POLISH-004  
**Area:** UX  
**Impact:** High Polish  
**Location:** Course overview → Today rail → “Set a target date”

**Observation**

The CTA navigates to Schedule, but lands at the top of the page. The relevant “Plan” section and target-date control remain below the fold and closed.

**Why it matters**

The destination is technically correct, but the handoff feels unfinished. The user must rediscover the control they explicitly asked to use.

**Recommended refinement**

Deep-link to the Plan section, scroll it into comfortable view, open the date picker, and focus today—or the earliest valid date—after navigation. Retain a visible Schedule heading so the context change remains clear.

**Expected effect**

The CTA will feel like one continuous interaction rather than navigation followed by another search task.

**Acceptance criteria**

- Activating “Set a target date” reveals the date grid immediately.
- The target-date label remains visible above the picker.
- Keyboard focus enters the picker at an appropriate date.
- Back navigation returns to the previous course position.

### Make practice-session setup explicit

**ID:** POLISH-005  
**Area:** UX  
**Impact:** High Polish  
**Location:** Module → Practice Mode → Session length

**Observation**

No session length is visibly selected initially. Tapping `10`, `20`, `40`, or `All` immediately starts practice, even though the pills look like ordinary configuration controls.

**Why it matters**

The transition is surprising and leaves the user uncertain whether they selected a preference or committed to a session.

**Recommended refinement**

Preselect the sensible 10-card default and add a primary action labelled `Start 10-card practice`. Update its label as the length changes. This keeps the total interaction count unchanged: open Practice Mode, then start.

**Expected effect**

The panel will communicate a complete configuration state and provide a deliberate launch moment.

**Acceptance criteria**

- Ten cards is visibly selected by default.
- Length controls expose `aria-pressed` or equivalent selected semantics.
- Changing the length does not navigate.
- The primary action accurately states the selected length.

### Do not offer an unusable practice pool

**ID:** POLISH-006  
**Area:** UX  
**Impact:** Medium Polish  
**Location:** Module → Practice Mode → `Vocab · 0 cards`

**Observation**

The zero-card Vocab option remains selectable. Selecting it replaces the useful session controls with an empty-state panel. Meanwhile, MCQ copy says questions come from material “you have cleared,” although the surrounding copy says course locks are off and unseen lessons are included.

**Why it matters**

A dead choice creates avoidable work, while contradictory copy weakens confidence about what will be practised.

**Recommended refinement**

Disable the Vocab tile when its count is zero and show `No vocabulary cards in this module` directly inside it. Update the MCQ description to accurately describe whether the pool includes cleared lessons, the whole module, or both.

**Expected effect**

Every enabled option will lead somewhere useful and the pool’s scope will be predictable.

**Acceptance criteria**

- Zero-card pools cannot be selected.
- Their unavailable reason is visible without opening an empty state.
- The MCQ description agrees with the actual lock configuration.
- Disabled styling retains readable contrast.

### Protect and accurately summarize early session exits

**ID:** POLISH-007  
**Area:** UX  
**Impact:** High Polish  
**Location:** Practice session → “End session” and results screen

**Observation**

Tapping “End session” immediately exits. Ending during question 2 of 10 produced a screen labelled `Session complete` and summarized only the one answered card, without explaining that nine were skipped.

**Why it matters**

The bottom action is easy to tap accidentally, and the resulting summary misrepresents an interrupted session as completed.

**Recommended refinement**

When unanswered cards remain, change the action to `Finish early` and require a lightweight inline confirmation: `Finish with 9 questions remaining?` Offer `Keep practising` and `Finish`. Label the result `Session ended early · 1 of 10 answered`.

**Expected effect**

Accidental exits become recoverable and partial results remain trustworthy.

**Acceptance criteria**

- No confirmation appears after the final question.
- Early exit clearly states how many questions remain.
- Cancelling keeps the current question and selection intact.
- Partial summaries show answered and planned totals.

### Replace hidden double-tap marking with an explicit action

**ID:** POLISH-008  
**Area:** UX  
**Impact:** High Polish  
**Location:** Library reader → word lookup

**Observation**

The reader instructs users to tap a word twice to mark it, while the opened definition panel also offers `I don’t know this`. These are two different models for the same action, and the latter describes the user rather than the action.

**Why it matters**

Double-tap is undiscoverable and can conflict with rapid word lookup. The label also makes it less clear where the word will go.

**Recommended refinement**

Use a single tap only for lookup. Rename the explicit action to `Mark for practice` or `Add to weak words`, paired with a bookmark/star icon. Once marked, change it to `Marked for practice` with an undo affordance.

**Expected effect**

Word lookup remains fast while marking becomes deliberate and self-explanatory.

**Acceptance criteria**

- One tap always opens or changes the lookup.
- Marking never depends on timing two taps correctly.
- The marked state is visible both in the panel and on the word.
- Unmarking is available without leaving the paragraph.

### Explain free reading versus progression locks

**ID:** POLISH-009  
**Area:** UX  
**Impact:** Medium Polish  
**Location:** Library volume contents and chapter-opening dialog

**Observation**

The volume footer says chapters “unlock in order,” yet selecting a later chapter offers `Free read` and `Practice`. The row itself appears enabled and does not explain which mode is locked.

**Why it matters**

The distinction between curricular progression and freely accessible reading is valuable, but it is only revealed after tapping.

**Recommended refinement**

Label later chapters with a compact state such as `Free read available · progression locked`. Rewrite the footer to `Practice progression unlocks in order; every chapter remains available for free reading.`

**Expected effect**

The Library’s generous access model becomes a clear benefit rather than an apparent contradiction.

**Acceptance criteria**

- Chapter rows communicate whether reading and practice are available.
- The volume footer accurately describes both modes.
- The dialog uses the same terminology as the row.
- State is not conveyed solely by muted color.

## Motion & Micro-Interactions

### Connect concept and question transitions to direction

**ID:** POLISH-010  
**Area:** Motion  
**Impact:** High Polish  
**Location:** Lesson → Next/Back concept; Practice → Next question

**Observation**

Content is replaced immediately when moving between concepts or practice questions. Scroll resets correctly, but there is no visual continuity connecting the new content to the action.

**Why it matters**

These are among the most repeated transitions in the product. Even a very small directional cue would make progression feel more coherent.

**Recommended refinement**

Animate only the changing content region with a 120–160ms opacity transition and 4px horizontal movement in the navigation direction. Keep the header, progress indicator, and sticky actions stationary. Make transitions interruptible and honor reduced motion.

**Expected effect**

Progression will feel immediate but no longer abrupt.

**Acceptance criteria**

- Forward and backward movement use opposing 4px directions.
- Total transition duration does not exceed 160ms.
- Rapid navigation never queues animations.
- Reduced-motion mode swaps content immediately.

### Animate progress only after the action that earns it

**ID:** POLISH-011  
**Area:** Motion  
**Impact:** Medium Polish  
**Location:** Lesson concept dots and practice progress strip

**Observation**

The next concept dot changes to gold immediately after a correct answer, and practice progress segments jump between states. The change is visible but lacks a sense of cause and completion.

**Why it matters**

Progress feedback is a small reward. Timing it to the successful action makes the interface feel more responsive without becoming celebratory or distracting.

**Recommended refinement**

Fill the next dot or progress segment over 160–200ms after feedback appears, with one subtle opacity/scale settle. Avoid bounce and do not animate already-completed indicators on revisit.

**Expected effect**

Successful actions will produce a restrained but satisfying response.

**Acceptance criteria**

- Progress animation begins after answer feedback is established.
- Each indicator animates once per newly completed state.
- Revisited concepts render immediately.
- Motion remains subtle and disabled under reduced motion.

### Add tactile press feedback to repeated controls

**ID:** POLISH-012  
**Area:** Motion  
**Impact:** Medium Polish  
**Location:** Answer options, lesson rows, practice-length controls, icon buttons

**Observation**

Controls have a consistent 140ms color transition, but mouse/touch press feedback is almost entirely visual-color based. On mobile, answer and row taps feel flatter than their strong card styling suggests.

**Why it matters**

Immediate down-state feedback reassures users before the resulting state change, especially during rapid practice.

**Recommended refinement**

Add a short active state—approximately `scale(.985)` or a 1px inset movement for 70–90ms—to large tappable cards and answers. Icon buttons should use a small background flash rather than scaling the icon itself.

**Expected effect**

Repeated taps will feel more tactile while preserving the restrained visual character.

**Acceptance criteria**

- Feedback begins on pointer/touch down, not after activation.
- Controls return to rest without overshoot.
- Layout does not shift.
- Disabled controls do not animate.

## Navigation & State Continuity

### Collapse the desktop course hero intelligently

**ID:** POLISH-013  
**Area:** Navigation  
**Impact:** High Polish  
**Location:** Advanced Sarf course overview while scrolling the module list

**Observation**

When returning from Module 10, the application correctly restores the module-list position. However, the complete dark hero remains fixed above it, consuming roughly 280px and leaving the restored module close to the lower half of the viewport.

**Why it matters**

The state is preserved, but the preserved content is harder to use. Frequent users repeatedly pay for information they already passed.

**Recommended refinement**

After 32–48px of downward scrolling, collapse the hero into a 56–64px resume strip containing the current lesson, progress, and Start/Continue action. Expand it when the user scrolls back to the top or deliberately invokes the strip.

**Expected effect**

Scroll restoration will feel genuinely useful and long course lists will become much faster to traverse.

**Acceptance criteria**

- The full hero is visible at the top of the course.
- It collapses without moving the module currently under the pointer.
- The compact strip retains the primary resume action.
- Returning from a module keeps the relevant module comfortably visible.

### Keep word lookup from moving the reading surface

**ID:** POLISH-014  
**Area:** Navigation  
**Impact:** High Polish  
**Location:** Library reader → tapping different Arabic words

**Observation**

Opening word details inserts a sizeable panel above the paragraph, pushing the reading text downward. Repeatedly inspecting words causes the reading line to move.

**Why it matters**

Word lookup is a high-frequency reading interaction. Spatial instability forces the eye to reacquire the sentence after every lookup.

**Recommended refinement**

On desktop, temporarily use the existing right rail for word details, with “Marked words” remaining as a secondary tab. On mobile, use a compact anchored sheet below the reader header or at the bottom, preserving the selected word’s line position.

**Expected effect**

Users can move quickly through unfamiliar words without losing their place.

**Acceptance criteria**

- Selecting another word does not move the paragraph.
- The selected word remains visibly highlighted.
- The details surface updates in place.
- Closing it restores focus to the selected word.

## Desktop-Specific Polish

### Add shortcuts for repeated learning actions

**ID:** POLISH-015  
**Area:** Desktop  
**Impact:** High Polish  
**Location:** Course search, lesson exercises, and practice sessions

**Observation**

Frequent interactions remain pointer-driven even though the interface is highly sequential.

**Why it matters**

Keyboard support can materially increase practice speed without changing the visible mobile experience.

**Recommended refinement**

Support `/` to focus course or Library search, `1–4` and `A–D` to select answers, `Enter` to check or advance when valid, and left/right arrows for unlocked concepts. Show quiet shortcut hints only after keyboard use or in tooltips.

**Expected effect**

Experienced users will be able to complete repeated sessions with much less movement.

**Acceptance criteria**

- Shortcuts do not fire while typing in an input.
- Keys activate the same validation and feedback as pointer actions.
- Disabled actions remain disabled.
- Shortcut hints appear only on desktop/keyboard interaction.

### Reveal direction on interactive rows

**ID:** POLISH-016  
**Area:** Desktop  
**Impact:** Medium Polish  
**Location:** Course module rows, module lesson rows, Library volume/chapter rows

**Observation**

Desktop rows respond to hover with a 140ms gray background, but otherwise resemble static content. Most do not reveal a directional icon or change in text emphasis.

**Why it matters**

The hover is visible but does not explain what will happen—open a module, start a lesson, or show a modal.

**Recommended refinement**

Fade in a trailing chevron over 100–140ms and shift it 2–3px toward the navigation direction. Slightly strengthen the title color on hover while leaving non-interactive rows unchanged.

**Expected effect**

Clickability and direction become obvious without adding permanent visual noise.

**Acceptance criteria**

- The chevron appears only for interactive rows.
- It does not change row dimensions.
- Hover and keyboard focus expose the same affordance.
- RTL text does not reverse the application’s navigation meaning accidentally.

### Give Library search desktop-appropriate presence

**ID:** POLISH-017  
**Area:** Desktop  
**Impact:** Medium Polish  
**Location:** Library index → search field

**Observation**

The Library search field is approximately 196px wide despite extensive available space and potentially long Arabic chapter titles.

**Why it matters**

The control feels like a mobile-sized input placed on desktop and makes longer queries harder to review.

**Recommended refinement**

Increase its default width to approximately 320–360px, retain a sensible maximum, add a search icon, and expose the `/` shortcut hint when the field is empty.

**Expected effect**

Search will feel like a first-class Library tool while remaining visually restrained.

**Acceptance criteria**

- The field is at least 320px wide at the audited desktop viewport.
- It contracts cleanly at narrower breakpoints.
- Long queries remain readable.
- Search focus and clear controls retain the existing strong focus treatment.

## Mobile-Specific Polish

### Enlarge concept-dot hit areas

**ID:** POLISH-018  
**Area:** Mobile  
**Impact:** High Polish  
**Location:** Mobile lesson header → concept progress dots

**Observation**

At 390px width, the concept buttons measure only 8×8px, 8×8px, and 11×11px. Their accessible labels are good, but their actual tap areas appear to match the tiny visible circles.

**Why it matters**

These are far below comfortable touch dimensions and are difficult to revisit intentionally.

**Recommended refinement**

Keep the visual dots at 8–11px but wrap each in a 40–44px transparent hit area. Add a tooltip on desktop and an accessible status label such as `Concept 2, complete` or `Concept 3, current`.

**Expected effect**

Concept navigation becomes comfortable without visually enlarging the progress indicator.

**Acceptance criteria**

- Every dot has at least a 44×44px mobile hit area.
- Visual spacing between dots remains essentially unchanged.
- Current, complete, unlocked, and locked states have distinct labels.
- Tapping adjacent targets does not produce accidental selection.

### Expand translation-control tap targets

**ID:** POLISH-019  
**Area:** Mobile  
**Impact:** High Polish  
**Location:** Library reader → paragraph `EN` and phrase-end translation icons

**Observation**

Measured phrase-translation controls are roughly 17×24px; the paragraph `EN` control is approximately 15×22px. Their tiny glyphs sit among dense Arabic word buttons.

**Why it matters**

They are difficult to tap precisely and invite accidental word lookups—the most likely repeated mobile-reader frustration.

**Recommended refinement**

Preserve the small glyphs but provide at least a 36×36px inline hit area, preferably 44×44px where line layout permits. Use transparent padding or a pseudo-element so Arabic line spacing changes minimally.

**Expected effect**

Translations become reliably accessible without making the prose look tool-heavy.

**Acceptance criteria**

- No translation action has a hit target smaller than 36×36px.
- The paragraph-level control reaches 44×44px.
- Enlarged targets do not overlap adjacent word targets.
- Activating translation never selects the neighboring word.

### Preserve the Account save-status message

**ID:** POLISH-020  
**Area:** Mobile  
**Impact:** Medium Polish  
**Location:** Account → level summary card

**Observation**

The message `Not signed in — progress is saved on this device` is truncated to `Not signed in — progress is saved on this de…` at 390px.

**Why it matters**

This is one of the Account page’s most confidence-critical messages. Truncating it removes the exact storage location users need to understand.

**Recommended refinement**

Shorten it to `Saved on this device · Not signed in`, or allow a deliberate two-line wrap beneath the level. Keep the progress bar aligned independently.

**Expected effect**

The summary card will communicate save safety clearly at a glance.

**Acceptance criteria**

- The complete storage status is visible at 320–390px widths.
- It uses no ellipsis.
- The progress bar and XP labels retain their alignment.
- The signed-in equivalent fits the same hierarchy.

## Final pass

The changes most likely to make the application feel as though it received another month of careful refinement are:

- Make every tiny progress or translation control physically comfortable to tap.
- Remove implicit commits: practice length should configure; a labelled action should launch.
- Preserve spatial context while scrolling modules and inspecting words.
- Time progress feedback to the action that earned it.
- Replace ambiguous states with precise copy: `Finish early`, `Mark for practice`, and `Free read available`.
- Let desktop users become faster through restrained hover direction and keyboard shortcuts.

These refinements preserve the product’s existing visual identity and structure. Their value comes from making the application’s strongest repeated interactions feel more predictable, tactile, and composed.

## Motion Polish Addendum

The application already has a strong motion foundation. The highest-value improvement is not to increase motion globally, but to strengthen a few underpowered effects and add transitions to components that currently bypass the system.

### Existing motion worth preserving

- Dropdowns already use an effective 140ms fade, 3px vertical offset, and subtle `scale(.985)` entrance.
- Dialogs enter over 240ms from 6px below at `scale(.98)`, with faster 120ms exits.
- Answer controls compress to `scale(.97)`; cards use `scale(.985)`; standard buttons move down 1px.
- Selected cards already settle from `scale(.975)` over 140ms.
- Correct marks scale in; incorrect answers receive a restrained 3px nudge.
- Route content moves by 3px, tab indicators slide over 200ms, and initial meters animate over 460ms.
- Reduced-motion behavior is already implemented.

These values should not be increased indiscriminately. The following targeted changes will be more noticeable and useful.

### Animate the Practice Mode panel as a short accordion

**ID:** MOTION-001  
**Area:** Motion  
**Impact:** High Polish  
**Location:** Module → Practice Mode

**Observation**

The roughly 426px inline Practice Mode panel currently appears at full height. It is the clearest accordion-like component missing component-level motion.

**Recommended refinement**

- Expand the container over 160–180ms using `grid-template-rows: 0fr → 1fr` or a measured-height transition.
- Fade and raise the inner content by 2–3px, beginning 35–45ms after the container starts moving.
- Close over 110–130ms, fading the content before collapsing the height.
- Keep the Practice Mode trigger visibly selected while the panel is open.

**Expected effect**

The panel will feel connected to its trigger without a large region slowly unrolling.

**Acceptance criteria**

- Opening and closing never causes a one-frame height jump.
- The complete entrance stays below 180ms.
- Inner controls do not become interactive until visible.
- Reduced-motion mode reveals the panel immediately.

### Smooth the module-description expansion

**ID:** MOTION-002  
**Area:** Motion  
**Impact:** Medium Polish  
**Location:** Mobile module hero → “Read the full description” / “Less”

**Observation**

The hero height and toggle label currently change abruptly.

**Recommended refinement**

- Animate height over 150–170ms.
- Fade the description over 100–120ms.
- Add a small chevron that rotates 180° over 140ms.
- Keep the hero’s title and top edge stationary.
- On collapse, retain the toggle in approximately the same viewport position.

**Expected effect**

Progressive disclosure will feel deliberate without animating text line by line.

**Acceptance criteria**

- The description does not clip during expansion.
- The title remains stationary.
- The label and chevron communicate the same state.
- Closing is slightly faster than opening.

### Turn mobile date and time pickers into bottom-attached sheets

**ID:** MOTION-003  
**Area:** Mobile / Motion  
**Impact:** High Polish  
**Location:** Schedule → target date and daily reset time, mobile

**Observation**

Desktop pickers are correctly anchored to their triggers. On mobile they become centered fixed panels that only fade, making their spatial origin unclear.

**Recommended refinement**

- Fade the backdrop over 120–140ms.
- Move the sheet in from 12–16px below over 180–200ms.
- Use top-corner rounding and bottom safe-area padding.
- Fade the header and controls in 35–50ms after the sheet begins moving.
- Exit toward the bottom edge over 130–150ms.

**Expected effect**

The controls will behave like panels attached to the mobile viewport rather than floating desktop popovers.

**Acceptance criteria**

- The sheet remains visually attached to the bottom edge.
- Content never appears before the sheet surface.
- Focus enters after the panel is visible.
- Desktop pickers retain their anchored dropdown treatment.

### Give mobile hierarchy transitions stronger direction

**ID:** MOTION-004  
**Area:** Mobile / Motion  
**Impact:** High Polish  
**Location:** Course → module → lesson → concept; Library → book → reader

**Observation**

The current route transition is a subtle vertical 3px movement on both desktop and mobile. It is coherent, but too weak to communicate stacked mobile hierarchy.

**Recommended refinement**

- When navigating deeper, enter new mobile content from 10–14px to the right.
- When returning, enter from 10–14px to the left.
- Keep persistent headers and bottom actions stationary.
- Use 160–190ms movement with only a light opacity change, approximately `0.92 → 1`.
- Retain the current restrained vertical transition on desktop.

**Expected effect**

Mobile navigation will communicate push and pop direction without becoming a full-page carousel.

**Acceptance criteria**

- Forward and back directions are consistently opposed.
- Rapid navigation does not queue transitions.
- Persistent controls do not move with page content.
- Reduced-motion mode swaps immediately.

### Make tab-indicator travel easier to perceive

**ID:** MOTION-005  
**Area:** Desktop / Mobile / Motion  
**Impact:** Medium Polish  
**Location:** Desktop primary navigation and mobile bottom navigation

**Observation**

The active indicator already moves over 200ms, but its ease-out is highly front-loaded; most visible travel is effectively finished within roughly the first 80ms.

**Recommended refinement**

- Keep the duration near 180–210ms.
- Use a slightly less aggressive ease-out so travel remains perceptible through the middle of the animation.
- Crossfade active label/icon color over 120–140ms.
- Give the destination label or icon one `scale(.98) → 1` settle.
- Do not slide the full desktop page with the tab.

**Expected effect**

The indicator will remain restrained but feel intentionally animated rather than almost instantaneous.

**Acceptance criteria**

- The indicator can be followed visually between adjacent tabs.
- It still settles within approximately 210ms.
- Text does not move or reflow.
- Rapid tab changes resolve to the latest destination.

### Animate icons whose meaning changes

**ID:** MOTION-006  
**Area:** Motion  
**Impact:** Medium Polish  
**Location:** Course selector, expandable descriptions, Practice Mode, mobile sections menu

**Observation**

The course-selector chevron receives `rotate(-180deg)` when expanded, but the chevron itself has no transform transition and can snap. Several other reversible triggers swap meaning without an icon response.

**Recommended refinement**

- Rotate the course chevron over 140ms.
- Rotate the description chevron 180° over 140ms.
- Let the Practice Mode trailing chevron rotate or morph into a minimize/close symbol while its panel is open.
- Crossfade/rotate the mobile sections grid icon into a close icon over 150–170ms.
- Only morph icons when the same trigger reverses the same state.

**Expected effect**

Open and closed states will feel mechanically connected to their controls.

**Acceptance criteria**

- Icon and panel motion begin together.
- No icon changes meaning after the panel has already appeared.
- Icon animation never changes the button’s dimensions.
- Decorative animation is removed under reduced motion.

### Strengthen selected-card resting states

**ID:** MOTION-007  
**Area:** UI / Motion  
**Impact:** Medium Polish  
**Location:** Practice type, appearance themes, accent choices, course/path cards

**Observation**

Selected cards already receive a good 140ms settle animation, but after it finishes their resting state is primarily a tint and border-color change.

**Recommended refinement**

- Retain the existing settle animation.
- Add a persistent `translateY(-1px)` or very small elevation to the selected state.
- Strengthen the accent border by one contrast step.
- Fill the radio/check indicator over 100–120ms.
- Use a brief background-brightness transition rather than another bounce.

**Expected effect**

Selection will remain more legible after motion ends, without increasing movement significantly.

**Acceptance criteria**

- Selected and hover states remain distinct.
- Persistent elevation is no greater than 1px.
- Selection remains clear without relying on motion.
- Cards do not shift surrounding layout.

### Add restrained insertion motion to search results

**ID:** MOTION-008  
**Area:** Motion  
**Impact:** Medium Polish  
**Location:** Course search and Library search

**Observation**

Filtered rows currently appear immediately. In the Library, new chapter matches materialize above the existing volume list with no visual continuity.

**Recommended refinement**

- Transition the result group with opacity and a 3px rise over 100–130ms.
- Animate the result count with the group.
- Avoid per-row staggering while the user is typing.
- If results are asynchronous, preserve the previous set until the new set is ready, then crossfade.
- Reverse the transition over 90–110ms when clearing search.

**Expected effect**

Filtering will feel like a smooth state replacement rather than content materializing abruptly.

**Acceptance criteria**

- Animation does not delay typing or result calculation.
- Repeated keystrokes interrupt the previous transition cleanly.
- Results never flash blank between states.
- Reduced-motion mode replaces the group immediately.

### Make verdict animation slightly clearer

**ID:** MOTION-009  
**Area:** Motion  
**Impact:** Medium Polish  
**Location:** Lesson exercise and Practice answer results

**Observation**

Correct checkmarks already scale from `0.72`; incorrect choices already nudge. The movement is appropriate but visually easy to miss beside the strong answer borders.

**Recommended refinement**

- Reveal the check/cross over 110–140ms.
- Add a brief border-brightness or tinted-background pulse that fades over 220–280ms.
- Fade and raise feedback text by 2px after the answer-state animation begins.
- Begin progress animation only after the verdict is visually established.
- Avoid confetti, large card jumps, or shaking the exercise container.

**Expected effect**

Correctness will feel acknowledged without becoming celebratory or distracting.

**Acceptance criteria**

- The result is still immediately understandable without motion.
- Feedback sequencing completes within approximately 280ms.
- Incorrect nudge never moves neighboring answers.
- Progress does not update before the verdict.

### Animate in-session progress changes

**ID:** MOTION-010  
**Area:** Motion  
**Impact:** High Polish  
**Location:** Lesson concept dots and Practice question progress

**Observation**

Initial dashboard meters animate over 460ms, but concept dots and in-session progress segments can jump when their values change.

**Recommended refinement**

- Fill a newly completed Practice segment over 180–240ms using `scaleX(0 → 1)`.
- Settle a newly unlocked concept dot over 120–160ms with opacity and scale.
- Briefly brighten a completed dot before it reaches its resting state.
- Do not replay animations when revisiting completed content.
- Sequence verdict → progress → enabled Next action over roughly 250ms total.

**Expected effect**

Progress will feel earned and causally connected to the action that changed it.

**Acceptance criteria**

- Each new completion animates once.
- Revisited state renders immediately.
- Progress changes remain interruptible.
- Reduced-motion mode updates values without transition.

### Use numeric animation only for earned changes

**ID:** MOTION-011  
**Area:** Motion  
**Impact:** Low Polish  
**Location:** XP, combo, lessons cleared, and streak changes

**Observation**

The existing `m-bump` animation scales counters to `1.08`, providing a good foundation. Static dashboard values do not need additional motion.

**Recommended refinement**

Use a short digit crossfade or vertical clip only when a value changes because of the user’s current action, such as `+5 XP`, combo `2 → 3`, lessons cleared `4 → 5`, or streak `6 → 7`. Keep the duration between 180 and 220ms.

**Expected effect**

Earned values will feel responsive while static data remains calm and trustworthy.

**Acceptance criteria**

- Account dashboard numbers do not animate on initial load.
- Only the changed digit/value moves.
- Frequently changing data does not roll continuously.
- Screen-reader announcements remain concise.

### Preserve card-to-detail continuity

**ID:** MOTION-012  
**Area:** Navigation / Motion  
**Impact:** High Polish  
**Location:** Module row → module detail; lesson row → lesson; book/chapter → reader

**Observation**

The clicked row highlights on press, but the detail view then enters using the generic route transition.

**Recommended refinement**

1. Keep the pressed row’s accent state visible through the outgoing frame.
2. Let the destination hero/title enter from 6px below over 170–200ms.
3. Reuse the row’s accent border or tint in the destination’s first frame.
4. On Back, restore scroll and briefly flash the originating row for 180–220ms.

**Expected effect**

The detail view will feel like the result of opening the selected object without requiring a fragile shared-element transition.

**Acceptance criteria**

- Navigation is never delayed waiting for the row animation.
- Back navigation restores and identifies the originating row.
- The destination hero remains stable after entrance.
- Continuity works for keyboard activation as well as pointer input.

### Let valid drag targets expand softly

**ID:** MOTION-013  
**Area:** Motion  
**Impact:** Medium Polish  
**Location:** Tarkeeb and Library drag/drop exercises

**Observation**

Valid targets already change border, tint, and shadow on `drag-over`, but retain the same size.

**Recommended refinement**

- Apply `scale(1.01–1.015)` over 80–100ms to valid targets.
- Strengthen border/tint only for valid targets.
- Add a subtle placeholder settle inside the target.
- Reverse over approximately 90ms when the item leaves.
- Leave invalid targets static.

**Expected effect**

Drop affordances will feel magnetic and confident without moving surrounding layout.

**Acceptance criteria**

- Expansion uses transforms rather than layout dimensions.
- Adjacent targets do not move.
- Invalid regions never mimic a valid response.
- Dropping transitions cleanly into the filled state.

### Reuse the existing scroll-context motion

**ID:** MOTION-014  
**Area:** Navigation / Motion  
**Impact:** Medium Polish  
**Location:** Course hero and mobile contextual header

**Observation**

The mobile contextual bar already fades and moves down from 6px over 140ms. This is a strong existing pattern that can support the proposed compact desktop course hero.

**Recommended refinement**

- Fade/collapse the full hero content.
- Enter the compact resume strip from 6px above.
- Keep the complete transition between 160 and 190ms.
- Trigger only after clear downward-scroll intent.
- Reverse promptly when the user scrolls toward the top.

**Expected effect**

Scroll-dependent chrome will feel consistent across the application without introducing a new floating-action-button pattern.

**Acceptance criteria**

- The content beneath the hero does not jump.
- Downward and upward transitions are interruptible.
- The resume action stays reachable throughout.
- No floating button is introduced solely for motion.

### Motion patterns not recommended here

- **Floating action button behavior:** the product has no persistent FAB, and adding one solely to animate it would introduce unnecessary hierarchy.
- **Traditional switch-thumb motion:** most settings use selectable rows rather than physical toggle switches; selected-card treatment is more appropriate.
- **Staggering every result on each keystroke:** this would make search feel delayed.
- **Large springs:** the current `ease-pop` is already sufficient for checks and small selections.
- **Full-page desktop slides:** stronger spatial direction should remain a mobile hierarchy treatment.
- **Animating dashboard numbers on initial load:** that implies values changed when they merely loaded.

### Motion implementation priority

If only five motion refinements are scheduled, implement them in this order:

1. Practice Mode accordion.
2. Mobile date/time bottom sheets.
3. Mobile push/pop route direction.
4. In-session progress animation.
5. Card-to-detail continuity.

Together, these changes would make the product feel materially more crafted without substantially increasing the total amount of animation.
