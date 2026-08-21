repo: HabibH0/the-sciences
branch: main
path: (whole repo)

## Last sync
date: 2026-08-21T07:45:00Z

### Updated in this project
- Built Schedule tab from js/render.js's scheduleHtml/scheduleDeadlineHtml/scheduleRevisionHtml: Up Next queue, deadline stats + today's checklist, Revision module quiz (pick/random) — Mastery omitted (removed from the app)
- Built Account tab (per user: Settings + Achievements folded in): level/XP, streak calendar, per-course progress, text-size settings from settingsHtml, cloud-sync actions from accountHtml; full 34-badge Achievements screen from gamification.js tiers
- Built Library book screen + reader for qasas-v1 (litBookHtml/litReadHtml): real chapter list from content-lit/qasas-v1/index.js, chapter 1 read with tap-a-word glossary, comprehension checks, Pattern workshop + Build drills and weak-words practice from chapter-01.js
- Added lesson-complete and practice-review screens (lessonCompleteHtml/practiceReviewHtml)

## Screen map
| Project screen | Repo source |
| --- | --- |
| The Sciences - App.dc.html (Home, modules, course switcher) | index.html, js/render.js (dashboard), js/main.js, js/state.js |
| The Sciences - App.dc.html (Module shell, Practice Mode, quiz) | js/render.js (modulePageHtml, practiceSetupPanelHtml, quizHtml), content/meta.js |
| The Sciences - App.dc.html (Schedule) | js/render.js (scheduleHtml, scheduleUpcomingHtml, scheduleDeadlineHtml, scheduleRevisionHtml) |
| The Sciences - App.dc.html (Account, Achievements) | js/render.js (accountHtml, settingsHtml, achievementsHtml), js/gamification.js |
| The Sciences - App.dc.html (Library, book, reader, weak words) | js/render.js (libraryHtml, litBookHtml, litReadHtml, litWordPracticeHtml), content-lit/index.js, content-lit/qasas-v1/ |
| The Sciences - App.dc.html (Lesson/practice completion) | js/render.js (lessonCompleteHtml, practiceReviewHtml) |
