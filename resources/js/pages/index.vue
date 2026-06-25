<template>
  <div class="wrap">
    <h1>{{ __('Dashboard', 'wpnuxt') }}</h1>

    <div class="wpnuxt-toc-content">
      <section class="wpnuxt-section">
        <h2>{{ __('Live Demo', 'wpnuxt') }}</h2>
        <p>
          {{ __('Vue dashboard built with Nuxt 3 + the Vue 3 Composition API — no third-party UI kit. Uses Nuxt SPA mode, file-based routing, auto-imported composables, and WordPress admin CSS classes.', 'wpnuxt') }}
        </p>
      </section>

      <div class="card">
        <h2 class="title">{{ __('Counter', 'wpnuxt') }}</h2>
        <p>{{ __('Current value:', 'wpnuxt') }} <strong>{{ count }}</strong></p>
        <p class="description">{{ __('Increment, decrement, or reset the counter to see reactive state.', 'wpnuxt') }}</p>
        <div class="button-group">
          <button class="button button-primary" @click="increment">
            {{ __('Increment', 'wpnuxt') }}
          </button>
          <button class="button" @click="decrement">
            {{ __('Decrement', 'wpnuxt') }}
          </button>
          <button class="button" @click="reset">
            {{ __('Reset', 'wpnuxt') }}
          </button>
        </div>
      </div>

      <div class="card">
        <h2 class="title">{{ __('Text input (controlled)', 'wpnuxt') }}</h2>
        <p class="description">{{ __('Type in the field below — the greeting updates live thanks to Vue\'s v-model.', 'wpnuxt') }}</p>
        <label :for="inputId">{{ __('Your name', 'wpnuxt') }}</label>
        <input
          :id="inputId"
          v-model="name"
          type="text"
          class="regular-text"
          :placeholder="__('Type here…', 'wpnuxt')"
        />
        <p v-if="name" class="greeting">
          {{ __('Hello,', 'wpnuxt') }} {{ name }}!
        </p>
      </div>

      <div class="card">
        <h2 class="title">{{ __('Toggle element', 'wpnuxt') }}</h2>
        <p class="description">{{ __('Conditional rendering with v-if. Click the button to show or hide the message.', 'wpnuxt') }}</p>
        <button class="button" @click="showMessage = !showMessage">
          {{ showMessage ? __('Hide message', 'wpnuxt') : __('Show message', 'wpnuxt') }}
        </button>
        <div v-if="showMessage" class="notice notice-info inline" style="margin-top: 12px;">
          <p>{{ __('This message is conditionally rendered using Vue\'s v-if directive.', 'wpnuxt') }}</p>
        </div>
      </div>

      <div class="card">
        <h2 class="title">{{ __('List rendering', 'wpnuxt') }}</h2>
        <p class="description">{{ __('Rendered from a reactive array with v-for.', 'wpnuxt') }}</p>
        <ul style="margin-left: 16px;">
          <li v-for="(item, index) in items" :key="index">
            <code>{{ item }}</code>
          </li>
        </ul>
        <button class="button" @click="addItem" style="margin-top: 8px;">
          {{ __('Add item', 'wpnuxt') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: __('WP Kirk Nuxt — Dashboard', 'wpnuxt'),
})

const { count, increment, decrement, reset } = useCounter()
const name = ref('')
const showMessage = ref(false)
const items = ref<string[]>(['Vue 3', 'Nuxt 3', 'Vite', 'WordPress'])
const nextItem = ref(1)
const inputId = 'wpkirk-name-input'

function addItem() {
  items.value.push(`Item #${nextItem.value++}`)
}

const { __ } = useWpI18n()
</script>
