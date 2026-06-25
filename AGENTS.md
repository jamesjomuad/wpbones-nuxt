# AGENTS.md — WPKirk-NuxtJS Boilerplate

## Commands

| Command | What it does |
|---------|-------------|
| `yarn dev` | `nuxi dev` — dev server with HMR |
| `yarn build` | `nuxi build && node scripts/post-build.mjs` — production bundle + WordPress assets |
| `yarn serve` | `nuxi preview` — preview production build |
| `yarn clean` | `nuxi cleanup && rm -rf .output` — delete `.nuxt/`, `.output/`, `public/apps/` |
| `yarn test` | `vitest run` — Vitest |
| `yarn lint` | `eslint .` — ESLint |
| `yarn format` | `prettier --write .` — Prettier (config: 100 width, single quotes, trailing commas es5) |
| `yarn make-pot` | `wp i18n make-pot . languages/wp-kirk.pot` |
| `php bones rename "..."` | Namespace + slug rename after cloning |

## Build (Nuxt 3)

- **SPA mode** (`ssr: false` in `nuxt.config.ts`) — no server-side rendering, pure client bundle.
- **File-based routing**: `pages/index.vue` → route `/`. Each `.vue` file in `pages/` becomes a route.
- **Auto-imported composables**: `composables/use-counter.ts` and `composables/useWpI18n.ts` are globally available in templates and `<script setup>`.
- **`nuxi build`** outputs raw chunks to `.output/public/`. Then `node scripts/post-build.mjs` concatenates them into `public/apps/app.js` + generates `public/apps/apps.asset.php`.
- **CSS**: Built into the concatenated JS bundle (`cssCodeSplit: false`). Extra static CSS/JS under `resources/assets/` can be enqueued separately via the PHP controller.
- **`wp.i18n.*` globals**: Referenced at runtime via `window.wp.i18n.__()` — not bundled.
- **public/** is committed (not gitignored). Build before commit.

## Enqueuing (PHP)

Use `->withAdminAppsScript('app')` in a controller. The `AdminAppsAssetEnqueuer` reads `public/apps/app.asset.php` for WP dependency handles and calls `wp_set_script_translations()`. The concatenated `public/apps/app.js` contains the entire Vue app in a single bundle.

## App structure

- **Nuxt page**: `pages/index.vue` — self-mounts on `<div id="__nuxt">` (Nuxt's default container). The PHP admin view provides this container.
- **Custom composables**: `composables/use-counter.ts` and `composables/useWpI18n.ts`. Pattern: export `interface CounterApi` + `function useCounter()`.
- **i18n**: `useWpI18n().__('text', 'wp-kirk')` which delegates to `window.wp.i18n.__()`.

## Testing

- Tests in `composables/__tests__/` — matched by `composables/**/*.{test,spec}.{ts,tsx}`.
- Uses `vitest` + `@vue/test-utils` + `jsdom` (see `vitest.config.ts`).
- Plain composable tests (no Vue render needed) work with just `vitest` and `@vue/reactivity`.

## PHP

- **Namespace**: `WPKirk\` → `plugin/` (PSR-4), plus `functions.php`.
- **Framework**: WP Bones (`wpbones/wpbones`).
- **Text domain**: `wp-kirk`. Domain path: `languages/`.

## Renaming (when used as template)

```sh
composer install
php bones rename "My Plugin Name"
yarn install && yarn build
```
