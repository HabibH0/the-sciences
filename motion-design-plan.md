# Mīzān motion design plan

Status: the revised motion is live locally and the web build passes. The September 10 review covers the course pages, unit/lesson lists and lesson players in Advanced Nahw, Advanced Sarf and Logic. Browser audits run sequentially in one disposable browser, which is closed afterward. Keep the learner's desktop/mobile previews and saved positions intact.

## September 10: connected movement and mobile stability

The first stagger felt unnatural because content began a second movement after its parent was nearly settled. Course titles, statistics, icons and buttons also moved in competing directions. The revised sequence uses meaningful groups:

- Course title and statistics arrive together. The study panel stays intact, followed closely by the outline. No independent book rotation or button entrance.
- During navigation, content groups begin with their parent, travel in the same direction, and have slightly different settling times. There is no delayed restart. Initial page entry uses a small vertical movement with at most 60ms between the first and last visible group.
- Opening a unit animates its height for 300ms, moving its rows and subsequent units together. Closing takes 260ms. Rows no longer slide sideways independently while the section opens.
- Card headers, examples and explanations remain complete groups. Navigation stays anchored. Progress uses a transform rather than changing layout width every frame.
- `patch-study.js` retains unchanged lesson regions. Opening Notes keeps the underlying lesson mounted; answering and receiving feedback keep the question mounted. Other screens and structural changes retain the existing full-render fallback.
- The outgoing surface is temporarily retained instead of deeply cloned. Incoming forms remain real, focusable DOM, and outgoing surfaces are inert, hidden from accessibility tools and removed on completion or interruption.

Verification after the revision:

- All six motion configurations passed: 320, 390 and 430px mobile, 1024 and 1280px desktop, three Arabic fonts and reduced motion. Includes history, resize, rapid reversal, repeated taps, Notes reopening and interrupted diagram changes.
- Logic Sound Definitions passed five corrections/reloads, grading failure recovery and three diagram controls. Nahw 01/l2 passed eight corrections/reloads and quiz retry/completion. Sarf as-01/l1 passed six corrections/reloads and quiz retry/completion. Question and Notes DOM-retention assertions passed.
- Course transition frames were inspected for all three courses on mobile and Logic on desktop, including the title/statistics, study action and outline. Artifacts: `artifacts/study-catalog/sequence-review/`.
- Integration, bidi and build passed: 498 source lessons, all 3,066 Logic graders, saved-progress recovery and 177,239 Arabic-bearing strings.
- The scaled mobile-preview reproduction records zero root replacements for card, diagram and Notes actions, compared with one per action before the patch. Steady frames commonly measured around 17ms, but initial layout and host scheduling still produce spikes. A reduced-motion control also showed a roughly 71ms first-card layout stall; these desktop measurements do not establish physical-phone frame performance. Do not describe this as a guaranteed 60fps result.

Useful reproducible audits: `scripts/inspect-mobile-motion.mjs` (optional `--profile`, `--trace`, `--reduce`), `scripts/verify-spatial-motion.mjs`, and `scripts/review-motion-sequence.mjs`. Browser recording is opt-in through `--video` to keep routine testing light.

## Verification so far

- The motion journey passed six viewport/preference configurations, including 320, 390 and 430px phones, two desktop sizes, three Arabic fonts and reduced motion. Checks cover independent content entrances, fixed lesson navigation, direction, rapid reversal, Notes reopening, resize, reduced-motion changes, browser history and saved position.
- A later run with the added diagram-interruption assertion passed the first four configurations before testing was stopped for laptop responsiveness.
- Real Logic Sound Definitions flow passed five wrong-answer corrections and reloads, a failed grading request, diagram controls and original-score preservation with motion enabled.
- Real Nahw 01/l2 flow passed eight corrections/reloads, quiz retry, grading and completion with motion enabled. Sarf as-01/l1 passed six corrections/reloads, quiz retry and completion; repeat this short flow for the final element-choreography revision.
- All 990 course/module layout cases passed. Actual navigation, locks, resume across modules and completed-lesson revisit passed for all three courses.
- Integration, bidi and build checks passed. The integration check covers 498 source lessons and saved-progress recovery; bidi checks preserve 177,239 Arabic-bearing strings.
- Visual review removed overlapping crossfades and fixed focus scrolling sideways toward an animated heading. A final small fix now holds the outgoing surface offscreen until the inner choreography ends. Verify its late frames in the remaining visual pass and rebuild afterward.

The verification list below describes the earlier rollout. The September 10 section above records the current revision and supersedes its original choreography timings.

## Intended experience

Returning to study should feel easy, welcoming and continuous. Movement should show where a page came from, what an action changed and where the learner can go next. The character is calm with a little playfulness in controls and successful completion.

The learner should notice a smooth slide when navigating, a section physically opening when exploring the course, and a clear acknowledgement when selecting an answer. Once content settles, it stays still for reading.

Use spatial relationships consistently:

- Deeper pages move in from the right; Back reverses that relationship.
- Next and previous lesson cards move horizontally within the card area.
- Supplementary material moves above the lesson as a temporary layer.
- Expanded sections occupy real space and move the following rows with them.
- Small feedback belongs near the control or answer that caused it.

Direction follows the app's current English navigation and actual journey. Arabic text keeps its own reading direction and is never reversed to match an animation.

## Baseline findings

Reviewed `js/motion.js`, `js/main.js`, `styles.css`, the current course renderer and the shared lesson renderer. Also exercised the live Logic course in an isolated Chromium profile at 390 × 844 with motion enabled.

The recording in `artifacts/study-catalog/motion-baseline.json` confirms:

| Interaction | Current observation | Consequence |
| --- | --- | --- |
| Expand a course unit | No animation | The lesson rows and everything below them appear in their new positions immediately. |
| Next lesson card | Parent `m-push-in` (180ms) and child `m-step-in` (200ms) run together | One action produces two movements at different speeds. |
| Open Notes | Only the backdrop runs `m-fade-in` (140ms) | The notes surface has no spatial arrival of its own. |
| Close Notes | No animation | A large temporary surface disappears immediately. |

Relevant causes in the code:

- `rerender()` replaces `root.innerHTML`. A new node cannot continue a normal CSS transition from the replaced node's old value.
- The navigation signature includes lesson step position. Motion currently treats a card turn as a page entrance, while its action also adds a card entrance.
- Older motion selectors cover older page structures. New `.mz-*` surfaces are only partly integrated.
- The current system mostly animates incoming content. It does not coordinate departure and arrival.
- Native course disclosures currently record their state but do not animate their height.

These are the first implementation problems to solve. Changing easing curves alone will not solve them.

## Motion specification

These are starting design targets, to be tuned using the first complete flow. They are Mīzān's proposed values, not measurements copied from Duolingo.

| Interaction | Planned movement | What stays anchored | Initial timing |
| --- | --- | --- | --- |
| Course catalogue → course → module → lesson | Coordinated horizontal departure and arrival. Deeper content arrives from the right, with a small depth offset on the departing surface. | Global navigation; the page's final layout | 320–380ms |
| Back to module or course | Reverse the forward relationship and restore the previous list position and expanded unit. | Global navigation; remembered reading/list position | 300–340ms |
| Next / previous lesson card | A clear horizontal slide confined to the lesson body. Outgoing and incoming cards form one movement. | Lesson heading, card count and bottom actions | 300–340ms |
| Open / close a unit's lesson list | Animate the actual section height; rotate the disclosure chevron with it. Following modules move continuously. | The clicked unit heading | 240–280ms open, 200–240ms close |
| Open / close Notes | A sheet moves up on mobile; the notes surface moves in from the right on desktop. Closing reverses its arrival. Backdrop shading is secondary. | The lesson beneath it and its saved position | 300–340ms open, 240–280ms close |
| Switch explanation / diagram / feedback panels | Slide only the panel that changes, following the order of its controls. | Card heading and navigation | 220–260ms |
| Choose an answer | A brief pressed state and a selection treatment that travels to its new position where the layout permits. | Question text, choices and card geometry | 120–180ms |
| Receive feedback / start a correction | The result or correction area slides into its existing place. Success gets one restrained tick/settle. | The question and navigation where they remain applicable | 220–280ms |
| Update progress | Move from the last shown value to the next value; keep the count readable throughout. | Header and progress track | 260–320ms |
| Finish a lesson | Completion surface arrives, followed by a single small success accent. The next action remains available. | Settled layout and original grading result | 360–450ms total |
| Switch primary navigation tabs | The active indicator slides to the chosen tab. Content follows the tab order. | The tab bar itself | 260–320ms |

The first frame review rejected short travel with an outgoing fade: different sentences overlapped during the transition. The implemented page and card treatment instead uses adjacent, opaque surfaces with full-width travel. Pages take 380ms, cards 340ms, and smaller answer panels 260ms. This keeps a clear shared edge without crossfading reading text. The header, footer and progress track remain anchored during card changes.

Large reading surfaces use a smooth acceleration and a soft stop with no overshoot. A small amount of spring is reserved for compact controls and completion marks. Fades may support a backdrop or a changing label; movement must communicate the transition without depending on them.

There will be no continuous idle animation. Reopening an already completed lesson will not replay a celebration. Large blocks of Arabic or English text will not bounce, rotate or stretch.

## Implementation approach

1. **Separate motion identity from navigation/scroll identity.** Keep existing history and saved-position behavior. Identify page changes, card changes, panel changes and state updates independently for animation.
2. **One controller owns each transition.** Determine the outgoing and incoming scope, direction and destination once. Retire conflicting old effects for surfaces covered by the new controller.
3. **Capture before replacement, settle layout before travel.** Preserve the outgoing visual long enough to animate a coordinated change. Mount and measure the real destination using the existing fixed-type layout logic before moving it. Temporary outgoing visuals must be inert, inaccessible and removed on completion or cancellation.
4. **Reuse the existing browser animation tools.** Web Animations can handle measured transforms and disclosure height. Keep durations and easing in one shared set of tokens rather than distributing numbers among action handlers. No new animation framework is planned.
5. **Keep pinned elements outside moving ancestors.** In a lesson, animate the body region rather than `.main-content`, so the header, navigation and fit measurements stay stable.
6. **Make motion interruptible.** A rapid reversal should settle or replace the active transition from its current visual position. Repeated Next taps during the same transition must not queue unseen card advances. A stale completion callback must never navigate, restore an old screen or overwrite progress.
7. **Keep state authoritative.** Saving and grading happen through the existing handlers. Animation duration does not delay a save or determine whether an answer is correct. Typing, autosave and ordinary rerenders must not restart page motion.
8. **Handle changing conditions.** Resize, font completion, tab switching, route changes and reduced-motion preference changes cancel transient visuals cleanly and leave the current state readable.

Height animation is limited to small disclosures that must move surrounding content. Other movements should primarily use transforms. A slow course load keeps the existing page stable with its existing loading acknowledgement until the destination is ready; it must not leave a blank gap between exit and entry.

## First implementation flow

### Element movement inside pages

The page transition alone does not provide enough response within the page. Following the user's review, use these explicit sequences alongside navigation:

- **Course overview:** title and statistics arrive as one heading, then the complete study panel and visible outline groups. The offsets and settling times are closely spaced, with one direction during navigation.
- **Module page:** heading and progress stay together, followed by visible lesson rows. Opening a module expands the whole list vertically with the surrounding page.
- **Teaching card:** heading, definition, explanation and example begin together and settle in reading order. Move complete semantic groups in their parent's direction, keeping Arabic phrases intact and avoiding a second delayed motion.
- **Exercise:** the question leads into the answer controls. Choices arrive in a short sequence. Changing a choice moves its selection colour and gives its compact letter marker a brief physical response; it does not restart the question.
- **Feedback:** the result heading leads into the explanation and comparison. A correction reintroduces its controls. Changing diagram controls gives the changed diagram a small settling movement.

Use no opacity animation for these reading groups. Only visible groups animate; there is no idle loop or repeated entrance on typing, saving or an unchanged render. Hover-capable devices get a small arrow movement and button lift. Reduced motion disables the choreography. All timings belong to the same controller so cancellation, rapid input and cleanup remain coordinated.

Start with one complete journey in the existing Logic course at 390 × 844 and 1280 × 800:

1. Open the course from My learning.
2. Expand and collapse a unit, including reversing it partway through.
3. Start or resume Sound Definitions.
4. Move forward two cards, then back one.
5. Open and close Notes.
6. Work through an answer and correction.
7. Return to the module, then the course at the prior outline position.

This covers hierarchy, card sequence, disclosure, overlay and feedback. Use it to tune a single coherent rhythm before applying the shared treatments to Advanced Nahw and Advanced Sarf. Then cover Logic's diagram/panel controls, native lesson checks, course completion, practice and primary navigation.

The first review should answer: Can a learner understand the direction of each move? Does opening a section feel physically connected to the surrounding list? Do cards feel like one continuous sequence? Does the app remain ready for the next action?

## Quality gates

### Visual and spatial

- Forward and Back visibly reverse each other, including browser Back/Forward.
- One major transition runs for one navigation; no doubled parent/child page effects.
- Observe start, middle and end frames, plus normal-speed playback. An animation's existence in the DOM is not evidence that it looks good.
- No blank flashes, disappearing text, delayed empty rows or snap at the end of a transition.
- No horizontal scrollbar or new lesson overflow during or after a slide.
- Header/footer geometry remains stable through card changes; fixed typography and Arabic order remain unchanged.
- Opening a disclosure moves following rows continuously; closing removes the space smoothly.

### Interaction and state

- Test rapid Next taps, rapid Back, reversing disclosures, reopening Notes during close and navigating away during animation.
- No duplicate submissions, skipped unseen cards, stale screens or callbacks acting on detached elements.
- A keyboard user can activate every control, retains logical focus and can close Notes with Escape. Outgoing visual copies are excluded from focus and accessibility output.
- Existing session position, original answer, correction, grade and completion evidence survive return and reload.
- Slow or failed grading keeps the existing response and recovery behavior.

### Accessibility and performance

- Exercise both motion-enabled and reduced-motion paths. The latter preserves the same state, focus and navigation with spatial movement disabled.
- Check 320, 390 and 430px phones, a short desktop viewport and 1280px desktop; inspect Arabic fonts and large saved UI preferences.
- Use frame recordings/performance traces on representative course and lesson transitions. Aim for smooth 60Hz playback on the test device and investigate repeated frames above 32ms. Headless/desktop results alone do not establish real-phone performance.
- Check that temporary layers, observers, animation handles and event listeners are released after repeated navigation.
- Run relevant existing navigation, saved-progress, bidi, layout and build checks after the motion-enabled tests pass.

## Scope and review artifacts

All work remains local and uncommitted. Course content, answer identities, grading rules, progress schemas and the approved settled lesson layouts remain intact.

Produce short recordings or frame strips of the first journey on mobile and desktop, plus a compact verification report. Broaden the rollout only once that journey meets the criteria above. This plan is the implementation reference; changes in direction should be explained against it.

## Reference

Duolingo describes motion as a way to reinforce game mechanics and engagement in its [official discussion of design and animation](https://investors.duolingo.com/news-releases/news-release-details/duolingo-doubles-down-design-and-animation-acquisition-hobbes). Mīzān will take inspiration from clear physical feedback and a welcoming character while using the quieter rhythm required for sustained reading. The patterns, timings and test criteria above are specific proposals for this app.
