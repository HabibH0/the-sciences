# Release checklist

## Automated gates

- [x] All YAML loads successfully.
- [x] Concept identifiers, prerequisites, unit references, and lesson references validate.
- [x] Every unit concept has exercise coverage.
- [x] A/E/I/O, distribution, Venn, conversion, obversion, square, syllogism, hypothetical, disjunction, and fallacy invariants pass.
- [x] Every exercise template has a production profile, interaction family, answer resolver, and two-step hint ladder.
- [x] Every concept has at least eight compiled items.
- [x] Every designated core concept has at least twelve application items.
- [x] All fixed assessment references resolve.
- [x] Runtime compilation is deterministic.
- [x] The reference mastery and review engine passes strict TypeScript checking.

## Human gates before public release

- [ ] A qualified Manṭiq instructor confirms terminology, examples, and acceptable answers against the named textbook.
- [ ] A copy editor reviews learner-facing English and Arabic rendering.
- [ ] Keyboard-only, screen-reader, right-to-left, colour-contrast, and mobile interaction tests pass in the consuming app.
- [ ] A learner pilot checks ambiguity, difficulty calibration, timing, and misconception feedback.
- [ ] Assessment cut scores are reviewed after pilot data; they must not be presented as validated measurements before that review.

Automated correctness is necessary but does not replace scholarly sign-off or learner testing. Record reviewer names, dates, findings, and the content version in the release process rather than modifying this checklist silently.
