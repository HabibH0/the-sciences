# nahw-trainer — project instructions

## Visually verifying the Electron app

When you need to visually verify a change by driving the running app (clicking
through screens, opening a lesson/quiz, etc.), **do not automate it via
OS-level input** (Win32 `SendInput`/`mouse_event`/`keybd_event`, or any
approach that moves the real system mouse cursor or steals real keyboard
focus). That hijacks the user's actual mouse/keyboard while it runs.

Instead, drive it over the **Chrome DevTools Protocol (CDP)**:

1. Launch Electron with a debugging port: `electron . --remote-debugging-port=9222`
2. Fetch `http://localhost:9222/json` to find the page target and its
   `webSocketDebuggerUrl`.
3. Open a `WebSocket` to that URL (Node has `WebSocket` built in — no new
   npm dependency needed) and send CDP commands: `Page.navigate`,
   `Runtime.evaluate` (for DOM `.click()` calls — preferred over
   `Input.dispatchMouseEvent` coordinate math), `Page.captureScreenshot`.

This drives the renderer directly without touching the OS input queue, so it
never moves the user's cursor or interrupts whatever they're doing on screen.

Still applies from prior guidance: launch with `npm.cmd start` (not
`npm start`) when doing a normal human-visible launch; `ELECTRON_RUN_AS_NODE`
must be unset in the launched process's environment or Electron will run as
plain Node and crash on `require('electron')`.
