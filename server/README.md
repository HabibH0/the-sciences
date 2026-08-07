# The Sciences Sync Server

Small Node backend for Render. It provides email/password login, HTTP-only session cookies, and progress sync.

## Render setup

Create a Render Web Service from this repository with:

```
Root Directory: server
Build Command: npm install
Start Command: npm start
```

Add environment variables:

```
NODE_ENV=production
CLIENT_ORIGIN=https://YOUR-GITHUB-USERNAME.github.io
DATA_DIR=/var/data
```

Attach a Render persistent disk mounted at `/var/data` so `db.json` survives deploys/restarts. Render's normal service filesystem is ephemeral, so local file changes outside a disk mount are not durable.

After deployment, copy the Render URL into the app's Account page.
