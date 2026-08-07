# The Sciences

Classical Arabic grammar (nahw) trainer: lessons, quizzes, and drills generated from an Anki deck. Built as an offline-first Electron desktop app that can also be hosted as a static web app.

## Setup

```
npm install
```

## Running Electron

```
npm start
```

**Windows/PowerShell:** if this fails with `running scripts is disabled on
this system`, PowerShell's default execution policy is blocking `npm`'s
`.ps1` wrapper. Either run `npm.cmd start` instead, or fix it for good with:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

## Building a packaged app

There's no pre-built download. Build it yourself for your platform:

```
npm run package        # Windows installer (.exe)
npm run package:mac    # macOS (.zip)
npm run package:linux  # Linux (.AppImage)
```

Output lands in `dist/` (a build artifact, not tracked in git). These builds
are unsigned, so your OS will warn about an unrecognized publisher/developer
the first time you run the result. That's expected for a self-built,
unsigned app. On Windows, click **More info -> Run anyway** on the SmartScreen
prompt. On macOS, right-click the app, then **Open**, then **Open** to get past
Gatekeeper the first time.

## Browser/web mode

The same app can run as normal static HTML/CSS/JS without Electron APIs. For a local browser test, serve the project directory with any static file server, for example:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`. A local server is recommended because browser ES modules are not reliable from a direct `file://` open.

To create a browser-only output folder:

```
npm run build:web
```

This writes `web/` with the browser-safe files needed for hosting: `index.html`, `styles.css`, `js/`, `assets/`, `content*/`, and `vendor/`. It excludes Electron files such as `main.cjs`, `preload.cjs`, packaging config, and package metadata.

Deploy `web/` as a static site with GitHub Pages, Cloudflare Pages, or any static host. For GitHub Pages, build `web/` and publish that folder. For Cloudflare Pages, set the build command to `npm run build:web` and the output directory to `web`.

This repo also includes `.github/workflows/pages.yml`, which builds `web/` and deploys it to GitHub Pages on pushes to `main`. In your repository settings, set Pages to use **GitHub Actions** as the source.

## Login and device sync

The app now has an Account page for optional cross-device sync. The frontend still works without an account; login only adds a cloud copy of the same offline-first save.

The sync backend lives in `server/` and is designed for Render:

```
Root Directory: server
Build Command: npm install
Start Command: npm start
```

Set these Render environment variables:

```
NODE_ENV=production
CLIENT_ORIGIN=https://YOUR-GITHUB-USERNAME.github.io
DATA_DIR=/var/data
```

Attach a Render persistent disk mounted at `/var/data`. Render's normal service filesystem is ephemeral, so without a persistent disk the JSON database can be lost when the service restarts or redeploys.

After Render deploys, open the app's Account page, paste the Render service URL, then create an account or sign in. Sync uses:

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/me
GET  /api/progress
PUT  /api/progress
```

## Progress data

The app supports two modes:

1. Electron desktop mode, which stores progress locally on the device in `%APPDATA%\The Sciences\save-data.json`.
2. Browser/web mode, which stores progress in browser `localStorage` under `the-sciences-progress`.

Saves are wrapped with metadata (`updatedAt`, `version`, and a stable `deviceId`) so future device sync can detect conflicts. Existing flat save files are still loaded and are upgraded on the next save.

Sync support connects both modes to the Render backend, but the app does not require an account or server to function.
