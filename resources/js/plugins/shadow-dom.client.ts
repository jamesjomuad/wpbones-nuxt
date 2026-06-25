export default defineNuxtPlugin({
  name: 'shadow-dom',
  enforce: 'pre',
  setup(nuxtApp) {
    const app = nuxtApp.vueApp
    const originalMount = app.mount.bind(app)

    app.mount = ((containerOrSelector: any) => {
      const container = typeof containerOrSelector === 'string'
        ? document.querySelector(containerOrSelector)
        : containerOrSelector

      if (container && container.id === '__nuxt' && !container.shadowRoot) {
        const shadow = container.attachShadow({ mode: 'open' })

        const existingHrefs = new Set<string>()

        const injectStyles = () => {
          document.querySelectorAll('style, link[rel="stylesheet"]')?.forEach(el => {
            const href = el.getAttribute('href') || el.getAttribute('data-style-id') || ''
            if (existingHrefs.has(href)) return
            const tagName = el.tagName.toLowerCase()
            const clone = document.createElement(tagName)
            if (tagName === 'link') {
              ;['rel', 'href', 'id', 'media', 'type'].forEach(attr => {
                const val = el.getAttribute(attr)
                if (val) clone.setAttribute(attr, val)
              })
              existingHrefs.add(href)
            } else {
              clone.textContent = el.textContent
              const id = el.getAttribute('id')
              if (id) {
                clone.setAttribute('data-style-id', id)
                existingHrefs.add(id)
              } else {
                existingHrefs.add(href + (el.textContent || '').substring(0, 40))
              }
            }
            shadow.appendChild(clone)
          })
        }

        injectStyles()

        const observer = new MutationObserver(() => injectStyles())
        observer.observe(document.head, { childList: true, subtree: true })

        const innerContainer = document.createElement('div')
        innerContainer.id = 'nuxt-app'
        shadow.appendChild(innerContainer)

        const result = originalMount(innerContainer)

        return result
      }

      return originalMount(containerOrSelector)
    }) as typeof app.mount
  },
})
