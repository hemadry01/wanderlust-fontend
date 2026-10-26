<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# wanderlust-fontend

Early-stage Next.js 16 app (App Router, `src/app/`), no tests, no CI. Effectively one command per task:

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build; the real correctness gate
- `npm run lint` — `eslint` (flat config, no args = lints cwd) with `eslint-config-next` core-web-vitals + TS presets
- Full check: run lint then build; there is no test script and no separate typecheck script (failure surfaces via `next build`)

## Gotchas

- **Tailwind v4 via Turbopack**, no `tailwind.config.*`: theme lives in `src/app/globals.css` via `@theme`. CSS imports go through the `@tailwindcss/turbopack` rule in `next.config.ts`.
- **Experimental flags are on** in `next.config.ts`: `cacheComponents`, `partialPrefetching`, `reactCompiler`. Server components may need `"use cache"` / cache-component semantics per the docs in `node_modules/next/dist/docs/`; React Compiler auto-memoizes, so no manual `useMemo`/`memo` boilerplate.
- **shadcn/ui** via `components.json`, style `base-nova`, `rsc: true`, alias `@/*` → `./src/*` (matches `tsconfig` paths). UI primitives live in `src/components/ui`; use `cn` from `src/lib/utils.ts`. React 19.3 — latest Radix-style APIs.
- Repo/package name is misspelled "fontend" (frontend) — don't "fix" it in `package.json` out of the blue.
- No backend in this repo; data fetching strategy untested — check `node_modules/next/dist/docs/` for `cacheComponents` fetch/caching rules before writing server data code.

