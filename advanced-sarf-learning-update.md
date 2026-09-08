# Advanced Sarf learning update

All 56 lessons across 15 modules now use the Logic course's guided learning sequence: teaching, worked examples, guided checks, independent practice and a recap. The final lesson check keeps the existing six questions and 80% pass threshold. Answers require an explicit check; corrections preserve the original scored attempt.

The presentation adds 115 interactive comparisons covering 406 source-table rows, 55 matching exercises and 57 independent questions drawn from the existing bank. Matching prompts distinguish positive examples from exceptions and rejected forms. Longer tables remain readable as complete source tables. Every original source block and all 55 clarifications remain in the teaching flow and lesson notes.

The original module files are unchanged: 240 concepts, 1,206 teaching blocks, 136 tables, 336 quiz questions and 1,186 bank questions. Review continues to use the existing bank and quiz identifiers. Old lesson sessions resume at the corresponding concept/check; new comparison choices and unfinished responses persist through refresh. Course completion and review scheduling retain their existing behavior.

The shared exercise renderer now serves Advanced Nahw and Advanced Sarf. Sarf's adapters are in `js/learning/sarf.js` and `render-sarf.js`; the registry opts into them without rewriting the source content. No runtime dependency or backend change is required.

## Verification

- `npm run verify:sarf`: every step and comparison state renders; all original source, quiz and review data is retained; matching grades, corrections and old-session migration pass.
- `npm run verify:nahw`, `verify:mizan`, `verify:review` and `validate` pass. Validation retains five existing literature notices unrelated to Sarf.
- `npm run build:web` passes.
- Browser layout audit: all 56 lessons, including every comparison state, fit at 1280 × 720 and 1024 × 600 without vertical overflow. At 1280 × 720, 130% text with every source table expanded also passes. Each audit checks that pagination retains the source text in order.
- Browser flow: first lesson completed through concept checks, matching, independent practice, recap and final check. Wrong answers, corrections, keyboard selection, partial-answer refresh, example selection refresh and lesson notes were checked. One wrong quiz answer corrected afterward still produced the expected score of 5/6.
- Mobile at 390 × 844: teaching, matching fields and comparison cards reflow without horizontal overflow; lessons retain natural scrolling.

The source preview is available on port 4173 and the built preview on port 4174. This update is local and has not been published.
