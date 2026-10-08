# קו כחול — CLAUDE.md

Hebrew (RTL) PWA for learning ice-hockey rules: 9 lesson units on an animated rink
diagram, quizzes, a Hebrew–English glossary and referee signals. Pure client-side:
no backend, no auth, no API keys. Progress lives in `localStorage` on the device.

## On opening this repo, run automatically

```bash
npm install && npm run build
```

Do this without asking. **This repo has never been built with Vite.** It was written in a
sandbox with no npm registry access; the code was verified by bundling it with esbuild
(React 19, CSS Modules, a stub for the PWA virtual module) and driving every screen in a
headless phone-sized browser — no console errors, all 50 lesson steps and the quiz,
persistence, reset and corrupted-storage paths exercised. The first real `npm run build`
is still a verification step: fix errors and re-run until clean before doing anything else.

Likely first-build failure points:
- `virtual:pwa-register/react` (used in `src/components/layout/UpdateBanner.jsx`) needs
  `vite-plugin-pwa` and `workbox-window` installed; both are in devDependencies.
- Peer-dependency ranges between `vite` ^7, `@vitejs/plugin-react` ^5 and
  `vite-plugin-pwa` ^1. If npm reports a conflict, align versions rather than using
  `--force`.
- `@fontsource/*` CSS imports in `src/styles/fonts.css` (paths `400.css`, `700.css`).

The first `npm install` also generates `package-lock.json` and, through the `prepare`
script, points git at `.githooks/`. The pre-commit hook then blocks any commit that has
`node_modules` but no tracked `package-lock.json` — that is intentional, see below.

## package-lock.json and CI

`.github/workflows/deploy.yml` is in **bootstrap state**: `setup-node` without
`cache: 'npm'`, and `npm install` (not `npm ci`). Once `package-lock.json` is committed
(verify with `ls package-lock.json` and `git ls-files package-lock.json`), switch to the
locked state: add `cache: 'npm'` under `setup-node` and replace `npm install` with
`npm ci`. Never write the locked state before the lockfile is actually in the repo.
Node 22 everywhere.

## What you can NOT do here, even if asked

- Turn on GitHub Pages: the user must set **Settings → Pages → Source: GitHub Actions**
  in the repo once. Name this step instead of working around it.
- Create the GitHub repository or change its name (the name is baked into `BASE` in
  `vite.config.js`; see below).
- Push straight to `main` in a way that deploys unreviewed work — every push to `main`
  deploys.

## Architecture

```
src/
  config/      constants (storage key, versions), routes (hash routes + tab list)
  content/     ALL teaching content, no UI code
    units.js         unit order and titles
    scenes.js        helpers for rink scenes (players, puck, paths, labels)
    lessons/         one file per unit: steps with heading, body, scene | figure | signal
    quizzes/         questions grouped by unit; index.js exposes lookups
    glossary.js      54 terms; lesson text links to them by id
    signals.js       referee signals: arm polylines for the pictogram + text
  lib/         pure helpers: storage (load/sanitize/save), parseTerms, shuffle, normalize
  hooks/       all state and logic (progress context, lesson, quiz, glossary search, …)
  components/  UI only, one component per file, each with its own CSS Module
    rink/          Rink (SVG surface), RinkMarkings, highlights, players, puck, paths, Scene
    figures/       CallTag + scoreboard-style figures (clock, periods, points)
    lesson/ quiz/ home/ glossary/ signals/ layout/ ui/
  pages/       one per route; FocusPage.module.css (lesson/quiz) vs TabPage.module.css
  styles/      tokens.css (the visual system), global.css, fonts.css
```

Content checks: every `[[term:id|text]]` in a lesson must match a glossary id, every
quiz `answer` must index into `options`, every `signal` must exist. When adding content,
run a quick script over `content/` to confirm (one was used during the build).

## Intentional decisions — do not revert without asking

- **No Firebase, no Netlify, no auth.** There is no user data to sync and no secret. Per
  the build rules, that means GitHub Pages only.
- **Hash routing, no router library** (`hooks/useHashRoute.js`). GitHub Pages has no
  rewrites; hash URLs survive a refresh on any screen, so there is no `404.html` hack.
- **Native `<dialog>` for sheets** (`components/ui/Sheet.jsx`) instead of Radix: the
  browser provides focus trap, focus return, Escape and top layer, with zero deps.
- **CSP only in the production build** (`cspPlugin` in `vite.config.js`, `<!--CSP-->`
  placeholder in `index.html`). Vite dev injects `<style>` tags that the policy blocks.
  `style` props are used only for dynamic SVG transforms, which CSP allows (CSSOM).
- **localStorage is untrusted input.** `lib/storage.js` rebuilds progress field by field
  against the schema; unknown units, bad numbers and wrong versions are dropped. Bump
  `STORAGE_KEY`/`PROGRESS_VERSION` when the shape changes.
- **Retry rounds don't overwrite a unit's best score** (`isRetry` in `useQuiz.js`); mixed
  and mistakes quizzes only update the mistakes list.
- **Rules content** follows the NHL rule book for 2025-26 (incl. the 2025-26 offside
  "possession and control with the stick" wording and the hand-pass "no advantage"
  change) plus the 2026-27 84-game schedule. IIHF differences are short notes only.
- **Number ranges use a hyphen-minus, not an en dash** ("2025-26", "40-60"), and
  `RichText` wraps them in an LTR-isolated, no-wrap span. An en dash is bidi-neutral and
  flips ranges to "26-2025" inside Hebrew text.
- **Blue team always attacks LEFT** in every diagram (Hebrew reading direction). Rink
  coordinates are physical feet (200 × 85) and are never mirrored.
- **Close-up views** (`view: "left-end"` in a scene) for goal-mouth scenes: at full-rink
  scale on a phone they were unreadable. Pieces render at 0.7 scale in close-ups.
- **Units are never locked**; any unit can be opened from the home list.
- **Signals are geometric pictograms**, not illustrations. Arms get a light halo so
  gestures in front of the striped shirt stay readable.

## Visual system (approved in the spec — keep it)

- Palette (every colour exists on real ice):
  ice `#EEF3F6` app background · surface `#FFFFFF` · ink `#132235` text/scoreboard ·
  muted `#55657A` secondary text · blue `#1E5BB8` action/current/links (blue line) ·
  red `#C42530` whistle/violation/penalty, and lit scoreboard lamps · ok `#1F7A4D`
  correct answer only · line `#CBD6DF` borders, decorative only. Soft tints:
  blue-soft `#DCE7F7`, red-soft `#F8DEE0`, ok-soft `#DDF0E5`.
- Contrast: ink/ice 14.9:1 · muted/surface 5.9:1 · blue/surface 6.3:1 · red/surface 5.7:1 ·
  ok/ok-soft 4.8:1 · line/surface 1.4:1 (never text).
- Type: Secular One (display: headings, scoreboard digits, quiz prompts) + Assistant
  400/700 (body). Scale 13/15/16/20/24/32/40, body line-height 1.65. Self-hosted via
  @fontsource. A "large text" setting bumps 15/16/20 → 17/18/22.
- Spacing: 4px base — 4/8/12/16/24/32/48.
- Radius: 8px on everything; exceptions are the rink outline (27 ft corners) and the
  bottom sheet (20px).
- Elevation: level 0 flat with 1px border; level 1 is only the sheet over a scrim.
  No shadows on lists.
- Motion: scene pieces 450ms `cubic-bezier(0.77,0,0.175,1)` on transform only; whistle
  flash 160ms ×2; answer feedback 160ms colour + `scale(.97)` on press; sheet in 300ms
  `cubic-bezier(0.32,0.72,0,1)`; bottom nav and tabs never animate; one celebratory
  moment (quiz score lights up, 700ms). `prefers-reduced-motion` keeps colour/opacity only.
- RTL calls: progress bars and step segments fill right→left; chevrons mirror on a
  wrapper (`ui/Chevron`); numbers, scores and times sit in `.ltr` spans. Verified by
  flipping `dir` at runtime.

## App icons

Concept: the app's name drawn literally — a black puck crossing the blue line on ice,
the same motif as the lesson diagrams. Generator: `icon-design/make_icons.py` (PIL,
drawn at 8×, LANCZOS downscale) → `npm run icons`. All five files are in `public/icons/`
(192, 512, 512-maskable with the puck inside the ~72% safe zone, apple-touch 180,
favicon 32), checked at full size, through a circular mask, and at 96/48/32 px. They are
referenced in the manifest (`vite.config.js`) and in `index.html`.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server (no CSP, service worker inactive) |
| `npm run build` | Production build to `dist/` with CSP and service worker |
| `npm run preview` | Serve `dist/` locally |
| `npm run icons` | Regenerate the icons (needs Python 3 + Pillow) |

## Deployment model

Push to `main` → GitHub Actions builds → deploys `dist/` to GitHub Pages at
`https://<user>.github.io/kav-kachol/`. One-time human step: enable Pages with source
"GitHub Actions". If the repo gets another name, change `BASE` in `vite.config.js`.
Updates reach installed apps through the service worker: the app shows "יש גרסה חדשה"
with a refresh button, and an open app re-checks hourly.
