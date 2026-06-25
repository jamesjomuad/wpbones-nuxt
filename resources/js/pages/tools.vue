<template>
  <div class="wrap">
    <h1>{{ __('Tools', 'wpnuxt') }}</h1>

    <div class="wpnuxt-toc-content">
      <section class="wpnuxt-section">
        <h2>{{ __('Another Dashboard Page', 'wpnuxt') }}</h2>
        <p>
          {{ __('This page uses the same Nuxt SPA — the\'s "data-initial-route" attribute on the container div tells the app which Vue page to render.', 'wpnuxt') }}
        </p>
      </section>

      <div class="card">
        <h2 class="title">{{ __('Multi-page Demo', 'wpnuxt') }}</h2>
        <p class="description">{{ __('Each WordPress admin menu item maps to a different Nuxt page under pages/. The Nuxt router navigates client-side based on the initial route passed from the PHP view.', 'wpnuxt') }}</p>
      </div>

      <div class="card">
        <h2 class="title">{{ __('Items List', 'wpnuxt') }}</h2>
        <p class="description">{{ __('Click to toggle items.', 'wpnuxt') }}</p>
        <ul style="margin-left: 16px;">
          <li v-for="(item, index) in items" :key="index">
            <label>
              <input type="checkbox" v-model="item.done" />
              <span :class="{ 'strikethrough': item.done }">{{ item.label }}</span>
            </label>
          </li>
        </ul>
      </div>

      <div class="card">
        <h2 class="title">{{ __('Notification', 'wpnuxt') }}</h2>
        <div v-if="showNotice" class="notice notice-success inline">
          <p>{{ __('Action completed successfully!', 'wpnuxt') }}</p>
        </div>
        <button class="button button-primary" @click="showNotice = true">
          {{ __('Show notice', 'wpnuxt') }}
        </button>
        <button class="button" @click="showNotice = false" style="margin-left: 8px;">
          {{ __('Hide notice', 'wpnuxt') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { __ } = useWpI18n()
const showNotice = ref(false)
const items = ref([
  { label: __('Set up Nuxt SPA', 'wpnuxt'), done: true },
  { label: __('Create multiple pages', 'wpnuxt'), done: true },
  { label: __('Wire to WordPress admin', 'wpnuxt'), done: false },
])
</script>

<style scoped>
.strikethrough {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>
