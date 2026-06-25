import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const isBuild = !process.argv.includes('dev')

export default defineNuxtConfig({
  ssr: false,
  srcDir: resolve(__dirname, 'resources', 'js'),

  modules: ['@nuxt/ui'],

  appConfig: {
    ui: {
      primary: 'blue',
      gray: 'slate',
    },
  },

  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
  },

  nitro: {
    output: {
      publicDir: '.output/public',
    },
  },

  // vite config removed to test dev server

  css: ['~/assets/css/main.css'],

  hooks: {
    'build:done': () => {
      try {
        const pagesDir = resolve(__dirname, '.nuxt', 'dist', 'client', '_nuxt')
        if (!fs.existsSync(pagesDir)) {
          console.warn('[wpkirk] _nuxt dir not found at', pagesDir)
          return
        }

        const buildDir = resolve(__dirname, 'public', 'build')
        const appsDir = resolve(__dirname, 'public', 'apps')
        fs.mkdirSync(buildDir, { recursive: true })
        fs.mkdirSync(appsDir, { recursive: true })

        const jsFiles: string[] = []
        const cssFiles: string[] = []

        for (const file of fs.readdirSync(pagesDir)) {
          const src = resolve(pagesDir, file)
          if (!fs.statSync(src).isFile()) continue
          if (file.endsWith('.js')) {
            jsFiles.push(file)
            fs.copyFileSync(src, resolve(buildDir, file))
          } else if (file.endsWith('.css')) {
            cssFiles.push(file)
            fs.copyFileSync(src, resolve(buildDir, file))
          }
        }

        const version = jsFiles
          .reduce((a, f) => ((a << 5) - a + f.split('').reduce((s, c) => s + c.charCodeAt(0), 0)) | 0, 0)
          .toString(16).substring(0, 20)

        // Largest chunk last (Vue runtime = entry module)
        jsFiles.sort((a, b) => {
          const aSize = fs.statSync(resolve(appsDir, a)).size
          const bSize = fs.statSync(resolve(appsDir, b)).size
          if (aSize > 80000) return 1
          if (bSize > 80000) return -1
          return a.localeCompare(b)
        })

        const entryModule = jsFiles.pop()!

        const bootloader = `(function(){
  var base = '';
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var s = scripts[i].src || '';
    if (s.indexOf('/apps/app.js') !== -1 || s.indexOf('\\\\apps\\\\app.js') !== -1) {
      base = s.substring(0, s.lastIndexOf('/apps/')) + '/build/';
      break;
    }
  }
  window.__NUXT__ = {
    config: {
      app: {
        baseURL: base,
        buildAssetsDir: '/'
      }
    }
  };
  var nuxtEl = document.getElementById('__nuxt');
  var initialRoute = nuxtEl ? nuxtEl.getAttribute('data-initial-route') : null;
  if (initialRoute && initialRoute !== '/') {
    location.hash = initialRoute;
  }
  [${cssFiles.map((f) => `"${f}"`).join(', ')}].forEach(function(href){
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + href;
    document.head.appendChild(l);
  });
  [${jsFiles.map((f) => `"${f}"`).join(', ')}].forEach(function(src){
    var s = document.createElement('script');
    s.type = 'module';
    s.src = base + src;
    document.body.appendChild(s);
  });
  var e = document.createElement('script');
  e.type = 'module';
  e.src = base + "${entryModule}";
  document.body.appendChild(e);
})();
`

        fs.writeFileSync(resolve(buildDir, 'app.js'), bootloader, 'utf-8')
        // Also copy the bootloader and asset.php to public/apps/ for the framework enqueuer
        fs.copyFileSync(resolve(buildDir, 'app.js'), resolve(appsDir, 'app.js'))

        const deps = ['wp-i18n']
        const assetPhp = `<?php return array('dependencies' => array(${deps.map((d) => `'${d}'`).join(', ')}), 'version' => '${version}', 'handle' => 'wpkirk-app');\n`
        fs.writeFileSync(resolve(appsDir, 'app.asset.php'), assetPhp, 'utf-8')

        console.log(`[wpkirk] build output ready | ${jsFiles.length + 1} modules, ${cssFiles.length} css in public/build/`)
      } catch (e) {
        console.error('[wpkirk] build:done hook error:', e)
      }
    },
  },

  experimental: {
    viteEnvironmentApi: true,
  },

  compatibilityDate: '2025-06-01',
})
