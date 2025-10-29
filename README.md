# Netflix_clone — Deployment notes

Required environment variables (create a `.env` in the project root or set these in your host):

- MONGO_URI — MongoDB connection string (MongoDB Atlas recommended)
- PORT — Port the server listens on (default 5000)
- JWT_SECRET — Secret used to sign JWTs (use a long random string)
- NODE_ENV — `development` or `production`
- TMDB_API_KEY — TMDB API key (v3 or v4 depending on your usage)

Security and deployment tips:

- Never commit real secrets to git. Use `.env.example` (already provided) with placeholders.
- Add `.env` to `.gitignore` so it is not tracked. If you already committed `.env`, remove it from the index with:

  ```bash
  git rm --cached .env
  git commit -m "Stop tracking .env"
  ```

- If `.env` (or other secrets) were pushed to remote history and you need to remove them from the repository history, use a history-rewriting tool (BFG or `git filter-repo`) and rotate any exposed secrets after the rewrite. Example with BFG:

  1. Install BFG (https://rtyley.github.io/bfg-repo-cleaner/)
  2. Run: `bfg --delete-files .env` then `git reflog expire --expire=now --all && git gc --prune=now --aggressive`

  Note: rewriting history changes commit SHAs — coordinate with collaborators and backups.

- For containerized deployment, consider building the frontend and serving it from the backend, or host the frontend separately (Vercel/Netlify) and point API calls to your backend host.
