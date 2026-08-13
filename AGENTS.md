# video-build docs site

VitePress site for the [video-build](https://github.com/mattstyles333/video-build) skill.

## What agents should know

- This repo is a **docs site**, not the project. The source of truth is the video-build repo.
- `docs/guide/readme.md`, `docs/guide/skill.md`, and `docs/guide/install.md` are **auto-synced** from the source repo by `scripts/docs-sync.sh` (a pre-push hook there). Treat them as generated: fix content in the source repo, not here. You may fix broken links or formatting here — the next sync overwrites them anyway, so if you care, fix upstream too.
- `docs/public/` assets (banner, timeline view, poster) are also synced copies.
- Everything else — `docs/index.md`, `docs/.vitepress/config.mts`, nav, sidebar, cross-links — is owned here. That's your job: keep the site coherent with the synced content.
- Build with `npm run docs:build`. Never commit `docs/.vitepress/dist/`, `docs/.vitepress/cache/`, or `node_modules/`.
- Deploys to GitHub Pages automatically via `.github/workflows/deploy.yml` on push to `main`.
- Keep the tone of the site consistent with the source repo: concrete, no fluff.
