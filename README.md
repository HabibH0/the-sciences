# The Sciences

Classical Arabic grammar (نحو) trainer — lessons, quizzes, and drills generated from an Anki deck. Built as an Electron desktop app.

## Setup

```
npm install
```

## Running

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

There's no pre-built download — build it yourself for your platform:

```
npm run package        # Windows installer (.exe)
npm run package:mac    # macOS (.zip)
npm run package:linux  # Linux (.AppImage)
```

Output lands in `dist/` (a build artifact, not tracked in git). These builds
are unsigned, so your OS will warn about an unrecognized publisher/developer
the first time you run the result — that's expected for a self-built,
unsigned app. On Windows, click **More info → Run anyway** on the SmartScreen
prompt. On macOS, right-click the app → **Open** → **Open** to get past
Gatekeeper the first time.

## Progress data

Your lesson progress, quiz scores, and settings are saved to `%APPDATA%\The Sciences\save-data.json`, outside the project folder. A fresh clone always starts with no progress.
