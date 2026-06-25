# AGENTS.md — WPNuxt Boilerplate

## Commands

| Command | What it does |
|---------|-------------|
| `yarn dev` | `nuxi dev` — dev server with HMR |
| `yarn build` | `nuxi build` — production bundle; `build:done` hook in `nuxt.config.ts` concatenates chunks into `public/apps/app.js` |
| `yarn serve` | `nuxi preview` — preview production build |
| `yarn clean` | `nuxi cleanup && rm -rf .output` — delete `.nuxt/`, `.output/` |
| `yarn test` | `vitest run` — single run |
| `yarn test:watch` | `vitest` — watch mode |
| `yarn lint` | `eslint .` |
| `yarn lint:style` | `stylelint 'resources/**/*.{css,scss}'` |
| `yarn format` | `prettier --write .` (100 width, single quotes, trailing commas es5, lf) |
| `yarn format:check` | `prettier --check .` |
| `yarn make-pot` | `wp i18n make-pot . languages/wp-kirk.pot --slug=wpnuxt --domain=wpnuxt` |
| `yarn make-json` | `wp i18n make-json languages/ --no-purge` |
| `php bones rename "..."` | Namespace + slug rename after cloning |

## Build (Nuxt 3)

- **SPA mode** (`ssr: false` in `nuxt.config.ts`) — pure client bundle, no SSR.
- **`srcDir`** is `resources/js/` — all Vue/composable source lives there, not at root.
- **File-based routing**: `resources/js/pages/index.vue` → route `/`.
- **Auto-imported composables**: files in `resources/js/composables/` are globally available in `<script setup>`.
- **Post-build concatenation**: the `build:done` hook in `nuxt.config.ts` copies chunks from `.nuxt/dist/client/_nuxt/` to `public/build/`, writes a bootloader to `public/build/app.js`, and copies it + `app.asset.php` to `public/apps/`. There is no separate `scripts/post-build.mjs`.
- **CSS**: built into the concatenated JS bundle (`cssCodeSplit: false`). Extra static CSS/JS under `resources/assets/` can be enqueued separately via the PHP controller.
- **`wp.i18n.*` globals**: referenced at runtime via `window.wp.i18n.__()` — not bundled.
- **public/** is committed (not gitignored). Build before commit.

## Enqueuing (PHP)

Use `->withAdminAppsScript('app')` in a controller. The `AdminAppsAssetEnqueuer` reads `public/apps/app.asset.php` for WP dependency handles and calls `wp_set_script_translations()`. The concatenated `public/apps/app.js` is the bootloader that loads all chunks from `public/build/`.

## App structure

- **Nuxt page**: `resources/js/pages/index.vue` — self-mounts on `<div id="__nuxt">`.
- **Composables**: `resources/js/composables/use-counter.ts` and `resources/js/composables/useWpI18n.ts`.
- **i18n**: `useWpI18n().__('text', 'wpnuxt')` delegates to `window.wp.i18n.__()`.

## Testing

- Tests in `resources/js/composables/__tests__/` — matched by `resources/js/composables/**/*.{test,spec}.{ts,tsx}` in `vitest.config.ts`.
- Uses `vitest` + `@vue/test-utils` + `jsdom`.
- Plain composable tests work with just `vitest` and `@vue/reactivity`.

## PHP

- **Namespace**: `WPNuxt\` → `plugin/` (PSR-4), plus `functions.php`.
- **Framework**: WP Bones (`wpbones/wpbones`).
- **Text domain**: `wpnuxt`. Domain path: `languages/`.
- **Main file**: `wpnuxt.php`.

## Renaming (when used as template)

```sh
composer install
php bones rename "My Plugin Name"
yarn install && yarn build
```
