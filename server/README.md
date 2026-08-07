# The Sciences Sync Server

Small Node backend for Render. It provides email/password login, HTTP-only session cookies, and progress sync.

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
