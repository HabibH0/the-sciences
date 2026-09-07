# Mīzān

Five courses in classical Logic, Arabic grammar and morphology: 498 guided lessons with teaching, examples, practice and saved progress. The Sciences review scheduler, grammar quizzes, reading library and language tools share the Mīzān interface.

## Run locally

Use Node 22 or later. The browser has no framework or runtime package dependencies.

~~~sh
npm ci
npm run dev:web -- 4173
~~~

Open http://localhost:4173. This server includes the Logic grader and live reload. Grammar quizzes grade locally; Logic grading requires the API. Answers stay on the server and are returned only after submission. Network failures keep the learner's response available for retry. An account is optional; account sync uses the existing configured backend.

## Verify and build

~~~sh
npm run validate
npm run verify:mizan
npm run verify:review
npm run verify:server
npm run build:web
node scripts/dev-server.mjs 4174 --built
~~~

The last command previews the exact static files in web/ with the local Logic grader. Content validation checks all five courses and the 14-volume reading library. Mīzān verification covers content preservation, every Logic grader and authored lesson flow, response compatibility, migrations, recovery, session merging and practice pools. Server checks use a temporary local file database; they never write to live accounts. Postgres uses a transaction and row lock for conditional writes; validate that path against a configured test database before a database infrastructure change.

## Hosting

The established frontend remains on GitHub Pages under /the-sciences/. The repository's Pages workflow builds web/ and deploys main. The Render service in server/ supplies account sync and POST /api/grade. See server/README.md.

Deploy the matching backend before the frontend. The Pages workflow checks the deployed grader and waits for it to update; if that check fails, the previous frontend stays live. Do not publish an isolated static build against the old backend. Roll back by redeploying the prior frontend revision; the save format retains its existing grammar fields and identifiers. Keep the pre-Mīzān browser backup until the migration has been verified.

## Content and architecture

- content*/: existing Arabic curricula and generated course metadata; content-mantiq/: compiled Logic content and interactive diagram states.
- curriculum/mantiq/: canonical Logic YAML, Markdown, schemas, generators, assessments and provenance. Import exclusions are recorded in import-manifest.json. The 328 excluded practice items remain in the source material; the public runtime uses 3,066 supported items (2,817 scored and 249 reflections). Reflection/rubric items are preserved for authoring and are excluded from scheduled scored practice, as in the prototype.
- js/learning/: shared catalogue, subject-aware lesson steps and exercise rendering.
- js/mizan/: generated ports of the prototype's pure learning and mastery algorithms, without React or TypeScript in the browser.
- server/content/: private grading data, excluded from web/. server/validator.js is generated from the same original validator as the browser's pure field helpers.

scripts/import-mizan.mjs is a one-time/re-import bridge from the original prototype. It requires Node 24+ and the prototype's installed build dependencies: node scripts/import-mizan.mjs /path/to/mizan. It compiles safe Markdown and every selectable state of the original diagrams. Ordinary validation, builds and deployment use the committed generated files and do not need the prototype checkout or its framework.

## Saved progress

The browser still uses the-sciences-progress and its existing device/session keys so established learners and sign-ins survive the rename. Saves retain the envelope { progress, meta: { updatedAt, version, deviceId } }. Mīzān adds versioned studySessions, mizanCourses and quizSession fields; existing completion, quiz, review, vocabulary and library ids are unchanged.

The original envelope is backed up once under the-sciences-before-mizan. Unreadable data is preserved under the-sciences-recovery and can be downloaded from the recovery notice. Storage failures show an export/retry notice and never silently report a successful save. Pending browser writes flush synchronously during refresh. Keep localStorage and exported saves private: they contain learning history.

This repository currently ships the web application and Node server. Older project notes may mention Electron; those packaging commands are not present in this release.
