# Course navigation redesign, local preview

Scope: Advanced Nahw, Advanced Sarf and Logic. This is a first local design for review, following the preference that returning to study should feel effortless and unintimidating. All previous lesson redesigns remain intact. Nothing has been committed or published.

## Presentation

- Compact English course heading with the original Arabic course name.
- One prominent start/continue panel. Continue chooses the most recently updated unfinished, accessible study session in this course; otherwise it offers the next available lesson in curriculum order.
- A compact statistics box beside the course title, stacking below it on mobile. It shows lesson completion, its progress line, concepts introduced, competent concepts and mastered concepts without a dropdown.
- Modules expand into compact lesson rows on the course page. The current module opens initially. Open/closed choices are retained in memory when returning from a lesson, without writing learning progress.
- Lesson rows start, resume or revisit directly through the existing lesson entry handler. They preserve the existing prerequisite rules.
- Separate module pages remain available for module practice and neighbouring modules. Reset is a quiet secondary action with its existing confirmation.
- The course-about, unit/module-about and module-options dropdowns have been removed following review. Original descriptions remain in the source; lesson content is unchanged.
- Mobile uses the same hierarchy, with a full-width Continue button, wrapping Arabic titles and compact status labels. Course outlines remain naturally scrollable.

## Implementation

- `js/learning/catalog-study.js`: scoped course/module presentation and current-session selection.
- `js/learning/catalog.js`: delegates these three courses to the new presentation. Introductory course views are unchanged.
- `js/main.js`: ephemeral native-disclosure state; no new persistence or grading fields.
- `js/render.js`: neighbouring-module navigation uses “unit” and English language semantics for Logic; shared pager exported for its layout audit.
- `mizan.css`: styles scoped to `.mz-hub`, including mobile and dark-theme support.
- `scripts/preview-mobile.html`: accepts `?course=adv-sarf`, `adv-nahw` or `mantiq`; existing lesson preview URLs still work.

## Verification

The isolated-browser checks use disposable profiles, without accessing or changing the learner's saved progress.

- `node scripts/verify-study-catalog.mjs`: 990 layout cases across all 49 module pages and three course pages; 320, 390, 430, 768 and 1280px widths; Naskh, Amiri and Traditional Arabic; large UI preference; expanded lesson lists; new, returning, complete and locked course states; light and dark course previews. Includes real keyboard disclosure, returning to an expanded outline, direct lesson entry, saved-position resume and reload recovery for each course.
- `node scripts/verify-study-catalog-navigation.mjs`: real application previews at 320, 390 and 1280px; latest-session selection after studying modules out of order; practice entry; completed-lesson revisit without changing completion data; prerequisite prompts; locked lessons and practice; original introductory course layouts.
- `node scripts/verify-bidi.mjs`: 29 fixtures passed, preserving 177,239 Arabic-bearing source strings.
- JavaScript syntax, `git diff --check` and `npm run build:web` passed.
- No changes to course source files, grading, mastery engines or persistence.

Reports and screenshots are local and ignored in `artifacts/study-catalog/`. `report.json` covers the layout matrix and core flows; `navigation.json` covers the additional navigation states. Screenshots beginning `app-` show the actual application shell; the other screenshots isolate course content for typography and layout review.

## Previews

- Advanced Sarf: http://localhost:4173/#/course/adv-sarf
- Advanced Nahw: http://localhost:4173/#/course/adv-nahw
- Logic: http://localhost:4173/#/course/mantiq
- Mobile course preview: http://localhost:4173/scripts/preview-mobile.html?course=adv-sarf
