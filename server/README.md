# Mīzān server

Small Node backend for Render. It provides email/password login, HTTP-only session cookies, progress sync, and the Logic answer checker. The server directory is self-contained for Render deployments.

## Render setup

Create a Render Web Service from this repository with:

```
Root Directory: server
Build Command: npm install
Start Command: npm start
```

Create a Postgres database on Neon and copy its pooled connection string. Add environment variables:

```
NODE_ENV=production
CLIENT_ORIGIN=https://YOUR-GITHUB-USERNAME.github.io
DATABASE_URL=postgresql://...
```

Do not add a Render persistent disk. With `DATABASE_URL` set, this service stores accounts and progress in Neon Postgres. Without `DATABASE_URL`, it falls back to local JSON file storage for development only.

After deployment, copy the Render URL into the app's Account page.

## Logic grading and release order

POST /api/grade accepts courseId, itemId, response and hintsUsed. It grades against server/content/mantiq.json using the original Mīzān validator. It requires no account, stores no answer history, limits request bodies to 32 KiB and sends Cache-Control: no-store. GET /health reports the active grading version and item count.

Deploy this server before the new frontend. The Pages workflow verifies its grading version and a known answer before publishing. Keep Render automatic deployment enabled for main, or deploy the selected main revision manually and rerun the Pages workflow.

Conditional progress writes hold a Postgres row lock from the version check through the update. The development file store performs the same operation without yielding and replaces its file atomically. A corrupt file is never replaced with an empty database.

Login and registration allow at most 20 requests per minute per client address per process. Set TRUST_PROXY=true only behind the trusted hosting proxy; the final forwarded address is then used. This in-memory throttle is a baseline, not a distributed limiter. Preserve DATABASE_URL, cookie settings and existing session keys during the rename.
