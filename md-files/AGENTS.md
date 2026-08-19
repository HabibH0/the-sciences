# AGENTS.md

How coding agents should work in this repository. This file is the source of
truth; `CLAUDE.md` points here.

Act as a senior engineer joining an existing production codebase. Understand
the system first, preserve intended behaviour, make the smallest coherent
change, and leave the codebase in a better state than you found it.

Priorities, in order:

1.  Correctness and preservation of intended behaviour.
2.  Understanding the existing architecture and conventions.
3.  Maintainability, clarity, and separation of concerns.
4.  Security, reliability, and robust handling of edge cases.
5.  Verification.
6.  Performance where it is relevant and measurable.

Do not introduce complexity to make the system look "enterprise" or
"scalable." This is a single-author offline-first study app, not a platform.

------------------------------------------------------------------------

## 0. What This Repository Is

An Arabic grammar trainer shipped three ways from one source tree:

| Target | Entry point | Built by |
|---|---|---|
| Electron desktop app ("The Sciences") | `main.cjs` → `index.html` | `npm run package` (electron-builder) |
| Static web app | `web/index.html` | `npm run build:web`, deployed by `.github/workflows/pages.yml` |
| Sync backend | `server/server.js` | deployed separately to `https://the-sciences.onrender.com` |

The stack is deliberately small: **vanilla ES modules, no framework, no
bundler, no TypeScript, no test runner, no lint config.** The only
dependencies are `electron` and `electron-builder` (dev-only), plus `pg` on
the server when `DATABASE_URL` is set. Do not add a framework, a build step,
or a test framework without asking first — see §12.

### Layout

```
main.cjs         Electron main process (CommonJS by design; everything else is ESM)
preload.cjs      the only renderer↔main bridge; contextBridge allowlist
index.html       single page; the renderer mounts into #root
js/
  main.js        action handlers, event delegation, lifecycle. Owns all mutation.
  render.js      pure state → HTML string. No mutation, no persistence, no IO.
  state.js       the single state object + selectors
  checker.js     pure grading (mcq, tarkeeb). No DOM.
  gamification.js pure XP/level/badge logic. No DOM, no persistence.
  html.js        esc/escAttr/escBidi/isolateArabic — the escaping + bidi boundary
  persistence.js boot migrations, debounced persist, the persisted snapshot()
  storage/
    storageManager.js  Electron IPC vs localStorage, save envelope + versioning
    syncClient.js      talks to the sync backend
content/         Advanced Nahw (annahw) + the course registry (index.js, meta.js)
content-fstu/    Introductory Nahw       content-sarf/       Advanced Sarf
content-fstu-sarf/ Introductory Sarf
scripts/         validate-content.mjs, build-web.js, generate-content-meta.mjs
server/          Node http sync backend (auth + progress), file or Postgres store
```

### Commands

| Command | What it does |
|---|---|
| `npm run validate` | Structural check of all four courses. **Run this after any content edit.** |
| `npm run build:web` | Regenerates `content/meta.js`, then builds `web/`. |
| `npm start` | Launches Electron. On Windows use `npm.cmd start` (see §13). |
| `npm run package` | Windows installers; runs `validate` first via `prepackage`. |

There is no test, lint, typecheck, or format command. Do not claim to have run
one. §11 defines what verification means here instead.

------------------------------------------------------------------------

## 1. Understand Before Editing

Before a non-trivial change:

-   Trace the data flow through the affected feature.
-   Read the module's header comment. This codebase carries long,
    load-bearing comments that explain *why* — `js/html.js` on bidi
    isolation, `content/index.js` on live module bindings and course id
    prefixes, `js/state.js` on what is and is not persisted. Read them before
    changing the code they describe.
-   Search for an existing helper before writing a new one.
-   Check whether the behaviour already partially exists.

The app's data flow:

```
user event → delegated listener (js/main.js) → action handler
  → mutate state (js/state.js) + pure logic (checker.js, gamification.js)
  → persistSoon() (js/persistence.js → storage/storageManager.js)
  → full re-render (js/render.js → innerHTML on #root)
```

Two facts follow from that and matter constantly:

-   **Rendering is a full re-render into `innerHTML`.** There is no virtual
    DOM and no component state. Anything the DOM holds that state does not
    (scroll position, focus, drag state, an open `<details>`) is lost on
    every render unless it is explicitly restored.
-   **Every string that reaches `innerHTML` must pass through `js/html.js`.**
    `esc`/`escAttr` for untrusted values, `escBidi`/`isolateArabicHtml` for
    anything mixing English and Arabic. Skipping the bidi helpers is a
    correctness bug, not a style choice: brackets, colons, and periods
    between two Arabic runs get reordered.

When something is ambiguous, investigate the repository first. Ask only when
the answer cannot reasonably be inferred from the code, comments, or task.

------------------------------------------------------------------------

## 2. Plan Non-Trivial Work

For substantial features, refactors, or debugging, plan before editing:
current behaviour, desired behaviour, affected files, data-model changes,
save-file compatibility, edge cases, and how you will verify it.

Prefer incremental implementation over a large speculative rewrite. For small
obvious tasks, skip the ceremony.

------------------------------------------------------------------------

## 3. Architecture and Boundaries

Respect the separation that already exists:

-   `render.js` is pure. If you need to mutate state, persist, or touch
    `window` from render code, the logic belongs in `main.js` instead.
-   `checker.js` and `gamification.js` are pure and DOM-free. Keep them that
    way — they are the only parts of the app that are trivially testable.
-   `main.js` owns mutation. State changes go through it, not through render
    or content modules.
-   Content modules are **data**, not logic. A module file exports a plain
    object; behaviour lives in `content/index.js` helpers.
-   `storageManager.js` is the only place that knows whether it is running in
    Electron or a browser. Do not reach for `window.electronAPI` elsewhere.

Avoid: global mutable state beyond the single state object, hidden coupling
between render and persistence, abstractions with one use, and duplicated
logic across the Electron and web paths.

`content/meta.js` is **generated** by `scripts/generate-content-meta.mjs`.
Never hand-edit it. Edit the course source modules and rerun the generator
(`npm run build:web` does this too).

------------------------------------------------------------------------

## 4. Code Quality

Write production code, not illustrative pseudocode.

Match what is already here: ES modules, named exports, `function`
declarations for top-level helpers, single quotes, two-space indent, template
literals for HTML strings, `// --- section name ---` banner comments to
divide long files.

Comments should explain *why*, constraints, invariants, or a surprising
decision — the existing comments are a good model. Do not narrate obvious
code.

Do not leave dead code, commented-out implementations, or unexplained TODOs
behind your change.

------------------------------------------------------------------------

## 5. Refactoring

Preserve externally observable behaviour unless the task changes it.

`js/main.js` (~2.6k lines) and `js/render.js` (~3.3k lines) are large, and
that is known. Do not split them as a side quest. Extract only when the task
you were asked to do genuinely needs it, and keep the pure/impure split
above intact when you do.

Do not perform unrelated repository-wide cleanup while implementing a focused
task. Mention unrelated issues separately rather than silently expanding
scope.

------------------------------------------------------------------------

## 6. Debugging

Treat bugs as root-cause investigations, not symptoms to patch.

1.  Reproduce or establish the failing behaviour.
2.  Trace the execution and data flow.
3.  Distinguish symptom from root cause.
4.  Check the usual suspects in this app: stale state surviving a re-render,
    a value read before `bootProgress()` normalized it, an old save file
    shape, a course whose modules have not been lazily loaded yet
    (`ensureCoursesLoaded`), Electron-only vs browser-only paths, and bidi
    reordering in mixed English/Arabic strings.
5.  Implement the narrowest robust fix.
6.  Verify adjacent behaviour has not regressed.

Do not suppress exceptions, loosen validation, or add delays to make a
visible error disappear. If the root cause cannot be established, say what is
known and what remains uncertain.

------------------------------------------------------------------------

## 7. Frontend and UI

Build production UI, not a happy-path mock-up.

This app's recurring UI concerns:

-   **Keyboard access.** Interactions must work without a mouse. The tarkeeb
    widget is drag-and-drop and gates progression, so a keyboard path is not
    optional there.
-   **Focus and scroll across a full re-render.** If your change re-renders,
    decide explicitly what happens to focus and scroll position.
-   **RTL and mixed-direction text.** Arabic runs need isolation (§1). Test
    with a string that mixes English, Arabic, parentheses, and a trailing
    period.
-   **Long and malformed content.** Lesson prose, Quranic quotations, and
    tarkeeb sentences vary a lot in length.
-   **Empty, loading, locked, and completed states**, not just the state you
    are building for.
-   **Semantic HTML and ARIA** — the app builds markup as strings, so this is
    easy to forget and easy to get right.
-   **Themes and Arabic typefaces.** Colors come from CSS custom properties
    (see the theme blocks in `styles.css`); do not hard-code a hex value that
    should follow the theme.

Reuse existing components and classes rather than inventing a parallel visual
language.

------------------------------------------------------------------------

## 8. Persistence, Sync, and the Backend

**Save data is user progress that cannot be regenerated.** Treat its shape as
a contract.

-   The on-disk/localStorage format is an envelope:
    `{ progress, meta: { updatedAt, version, deviceId } }`. `storageManager.js`
    wraps and unwraps it; everything above that layer sees bare `progress`.
-   Only fields listed in `snapshot()` (`js/persistence.js`) are persisted.
    Adding persisted state means adding it to `snapshot()` *and* to
    `bootProgress()`'s defaults.
-   Old saves must keep working. `bootProgress()` is where migrations and
    normalization live (`migratePerCourse`, `normalizeArabicFace`, and so on).
    Follow that pattern: default missing fields, coerce bad ones, never throw
    on an unexpected save.
-   Treat the save file as **untrusted input**. It is user-editable and can be
    corrupted or hand-edited; a value from it must never reach `innerHTML`
    unescaped.

For `server/`:

-   Validate untrusted input; keep authorization server-side; never trust a
    client-supplied user id.
-   Passwords use `scrypt` with a per-user salt and `timingSafeEqual`. Do not
    replace this with anything hand-rolled.
-   Sessions are opaque random tokens in an `HttpOnly` cookie, with a `Bearer`
    fallback for the Electron client. CORS is an explicit origin allowlist.
-   `/api/progress` PUT supports a conditional `expectedMeta` check that
    returns 409 on a conflicting cloud save. Preserve that; silently
    overwriting a newer cloud save loses a user's progress.
-   The file store and the Postgres store must stay behaviourally
    interchangeable — both are live (file locally, Postgres when
    `DATABASE_URL` is set).

Never commit secrets, credentials, or tokens. `save-data.json` and `dist/`
are gitignored and must stay that way.

------------------------------------------------------------------------

## 9. Security

The realistic threat model here is small but not empty. Check changes for:

-   **XSS via `innerHTML`** — the main one. Content, save data, and server
    responses all reach the DOM as strings. Escape at the boundary (§1).
-   **Electron trust boundary** — `nodeIntegration: false` and
    `contextIsolation: true` are set in `main.cjs`. Do not weaken them.
    New renderer capabilities go through `preload.cjs` as a narrow, named
    method, never by exposing `ipcRenderer` itself.
-   **The `sync:request` IPC handler** proxies renderer requests to the
    backend and is restricted by an explicit path and method allowlist in
    `main.cjs`. Keep it allowlisted; do not turn it into a general fetch
    proxy.
-   **Auth and session handling** in `server/`.
-   **Path handling** in `main.cjs` and `scripts/` — no user-controlled path
    concatenation.

Do not invent cryptography. Keep security work proportional to the feature.

------------------------------------------------------------------------

## 10. Performance

Optimize from evidence. The app's real performance characteristics:

-   A full re-render rebuilds a large HTML string and assigns it to
    `innerHTML`. It is fine at current content size; if you make it
    noticeably slower, that is a regression worth avoiding.
-   Course content is lazily imported per course (`COURSE_LOADERS` in
    `content/meta.js`). Do not force all four courses to load eagerly.
-   Question pools are built by filtering and shuffling arrays. Avoid
    rebuilding a pool on every render.
-   Persistence is debounced through `persistSoon()`. Do not call `persist()`
    directly in a hot path.

Prefer algorithmic fixes over micro-optimizations. Do not add a cache without
stating what is cached, the key, invalidation, and lifetime.

------------------------------------------------------------------------

## 11. Verification

There is no test suite. Verification here means:

1.  **`npm run validate`** after any content change. It checks shape only —
    counts, required fields, MCQ answer-index bounds, tarkeeb slot bounds —
    not pedagogy. A green run does not mean the content is correct.
2.  **`npm run build:web`** after touching `index.html`, `styles.css`, or
    `js/main.js`. The web build strips Electron window chrome with literal
    regexes over those three files (`stripElectronWindowChrome` in
    `scripts/build-web.js`) and throws if a pattern stops matching. Editing
    those regions without running the build silently breaks the web target
    until CI fails.
3.  **Run the app and look at the change.** For anything user-visible, drive
    the running app over CDP and take a screenshot (§13). "The code looks
    right" is not verification.
4.  **Consider both targets.** A change to shared `js/` code ships to Electron
    and to the web build. `window.electronAPI` is undefined in the browser.

If you cannot run a relevant check, say so explicitly in the final report.
Never weaken a check to make it pass.

------------------------------------------------------------------------

## 12. Dependencies

The dependency footprint is nearly zero and that is deliberate — it keeps the
app offline-first and the web build a plain file copy.

Before adding a dependency, check whether the platform already solves it.
Node has `fetch`, `crypto.randomUUID`, and `WebSocket` built in; the browser
has `localStorage`, `Intl`, and `crypto`. Do not add a framework, a bundler,
or a test runner without asking first.

------------------------------------------------------------------------

## 13. Multi-Platform Rules

Three runtimes share `js/`. Keep shared logic shared and platform code behind
its boundary:

-   Never import Node or Electron APIs into `js/` — that directory runs in the
    browser too. Electron access goes through `window.electronAPI` and is
    confined to `storageManager.js`.
-   Guard Electron-only paths (`hasElectronStorage()` is the existing
    pattern), and make sure the browser fallback actually works.
-   `main.cjs` and `preload.cjs` are CommonJS; everything else is ESM
    (`"type": "module"`). Keep it that way.
-   A change is not done until you have considered both the desktop and the
    web target.

### Running the app

Launch with `npm.cmd start` on Windows, not `npm start` — PowerShell's
execution policy blocks npm's `.ps1` wrapper. `ELECTRON_RUN_AS_NODE` must be
unset in the launched process's environment, or Electron runs as plain Node
and crashes on `require('electron')`.

### Visually verifying the app

When you need to drive the running app (clicking through screens, opening a
lesson or quiz), **do not automate it with OS-level input** — no Win32
`SendInput`/`mouse_event`/`keybd_event`, and nothing else that moves the real
mouse cursor or steals real keyboard focus. That hijacks the user's actual
mouse and keyboard while it runs.

Drive it over the **Chrome DevTools Protocol** instead:

1.  Launch with a debugging port: `electron . --remote-debugging-port=9222`
2.  Fetch `http://localhost:9222/json` to find the page target and its
    `webSocketDebuggerUrl`.
3.  Open a `WebSocket` to that URL (Node has `WebSocket` built in) and send
    CDP commands: `Page.navigate`, `Runtime.evaluate` for DOM `.click()`
    calls (preferred over `Input.dispatchMouseEvent` coordinate math), and
    `Page.captureScreenshot`.

This drives the renderer directly without touching the OS input queue.

------------------------------------------------------------------------

## 14. Content Work

Course content is data, and editing it has its own rules. Before touching
`content*/module-*.js`:

-   Read `content/README.md` — the schema, expected counts, and the
    validation checklist.
-   Read `WRITING.md` — prose style and the anti-generic writing rules. It
    applies to lesson prose, quiz text, and to documentation like this file.
-   Match an existing module file for data shape.

Two rules that are easy to get wrong:

-   **Bank questions must stand alone.** `lesson.bank` items are reused in
    shuffled practice, revision, mastery, section tests, and Path
    checkpoints, days later and out of order. A question that only makes
    sense right after the lesson text is a bug.
-   **Prompt language is English carrying Arabic terms**, not full Arabic
    sentences — "Which word is the مضاف إليه?", not an all-Arabic prompt.

Run `npm run validate` before declaring content work done.

------------------------------------------------------------------------

## 15. Working With Existing Code

Do not overwrite working code because you would have designed it
differently. Match existing conventions unless they are the problem.

When changing a shared helper, search every call site — `js/render.js` and
`js/main.js` both import heavily from `content/index.js`.

When moving or renaming, update imports, `scripts/build-web.js`'s entry list,
the electron-builder `files` list in `package.json`, and documentation.

Preserve user data and backward compatibility unless the task explicitly
authorizes a breaking migration.

Do not fabricate files, APIs, env vars, or conventions. Verify them.

------------------------------------------------------------------------

## 16. Scope and Autonomy

Be proactive within the requested scope.

You may inspect anything, make supporting changes required for correctness,
fix issues your change directly caused, and improve nearby code when the task
genuinely requires it.

Do not rewrite unrelated systems, change unrequested product behaviour,
replace major technology without approval, or make destructive migrations
without explicit justification.

When several valid solutions exist, prefer the one that fits this codebase
and adds the least complexity.

------------------------------------------------------------------------

## 17. Review Pass

For non-trivial changes, review from four angles before finishing. These are
perspectives, not four literal agents.

**Architect:** Is the change in the right layer? Is render still pure? Is the
design simpler than the alternatives?

**Engineer:** Is it complete, idiomatic, and consistent with the surrounding
code?

**Reviewer:** What can fail? Escaping, save-file compatibility, keyboard
access, the web target, accidental scope creep.

**Optimizer:** Any unnecessary work per render, or repeated pool rebuilds?
Only fix what matters.

Resolve important findings before presenting the work as complete.

------------------------------------------------------------------------

## 18. Completion Report

End a coding task with a concise handoff: what changed, the important design
decisions, files materially affected, checks run and their results, any steps
the user must perform, and unresolved risks or follow-ups.

Do not dump a play-by-play of every edit. If nothing is unresolved, say so
plainly.

------------------------------------------------------------------------

## 19. Definition of Done

-   The requested behaviour is implemented.
-   It fits the existing architecture and the pure/impure split.
-   Edge cases and failure paths are handled.
-   Escaping, save-file compatibility, and keyboard access were considered.
-   `npm run validate` passes for content changes; `npm run build:web`
    succeeds if the stripped regions were touched; unrun checks are disclosed.
-   No dead code or unnecessary duplication was introduced.
-   Both the desktop and web targets were considered.
-   The final diff contains no accidental unrelated changes.

The goal is the smallest well-designed, well-verified change that solves the
real problem.
