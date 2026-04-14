<script setup lang="ts">
import { computed } from 'vue'

import type { FrontendLogo } from '../../../data/logos'
import type { WordCloudStyleMode } from './WordCloudCanvas.vue'

const props = defineProps<{
  open: boolean
  logos: FrontendLogo[]
  query: string
  selectedNames: string[]
  isSelected: (name: string) => boolean
  styleMode: WordCloudStyleMode
}>()

const emit = defineEmits<{
  close: []
  updateQuery: [value: string]
  updateStyleMode: [value: WordCloudStyleMode]
  toggle: [payload: { name: string; value: boolean }]
  remove: [name: string]
  clear: []
  download: []
}>()

const selectedSet = computed(() => new Set(props.selectedNames))
const selectedSorted = computed(() => {
  const popularityByName = new Map(props.logos.map((l) => [l.name, l.popularity] as const))
  return [...props.selectedNames].sort(
    (a, b) => (popularityByName.get(b) ?? 0) - (popularityByName.get(a) ?? 0),
  )
})
</script>

<template>
  <div v-show="open" class="panel-root" @keydown.esc="emit('close')">
    <div class="panel-backdrop" @click="emit('close')"></div>

    <aside class="panel" role="dialog" aria-modal="true">
      <header class="panel-header">
        <div class="panel-title">Logos</div>
        <button class="icon-btn" type="button" @click="emit('close')" aria-label="Close">
          <span class="i-mdi-close"></span>
        </button>
      </header>

      <div class="panel-toolbar">
        <div class="search">
          <span class="i-mdi-magnify"></span>
          <input
            class="search-input"
            :value="query"
            placeholder="Search..."
            @input="emit('updateQuery', ($event.target as HTMLInputElement).value)"
          />
        </div>

        <div class="toolbar-actions">
          <button class="btn" type="button" @click="emit('clear')">Clear</button>
          <button class="btn primary" type="button" @click="emit('download')">
            <span class="i-mdi-download"></span>
            Download
          </button>
        </div>
      </div>

      <section class="style">
        <div class="section-title">展示风格</div>
        <div class="segmented" role="group" aria-label="style mode">
          <button
            type="button"
            class="seg-btn"
            :class="{ active: styleMode === 'hv' }"
            @click="emit('updateStyleMode', 'hv')"
          >
            横竖（默认）
          </button>
          <button
            type="button"
            class="seg-btn"
            :class="{ active: styleMode === 'random' }"
            @click="emit('updateStyleMode', 'random')"
          >
            乱序
          </button>
        </div>
      </section>

      <section class="tags">
        <div class="section-title">Selected</div>
        <div class="tag-list" v-if="selectedNames.length">
          <button
            v-for="name in selectedSorted"
            :key="name"
            class="tag"
            type="button"
            @click="emit('remove', name)"
            :title="`Remove ${name}`"
          >
            <span class="i-logos" :class="`i-logos-${name}`"></span>
            <span class="tag-label">{{ name }}</span>
            <span class="i-mdi-close"></span>
          </button>
        </div>
        <div v-else class="muted">No selection.</div>
      </section>

      <section class="list">
        <div class="section-title">All (by popularity)</div>
        <ul class="items">
          <li v-for="l in logos" :key="l.name" class="row">
            <label class="row-left">
              <input
                type="checkbox"
                :checked="selectedSet.has(l.name)"
                @change="emit('toggle', { name: l.name, value: ($event.target as HTMLInputElement).checked })"
              />
              <span class="logo">
                <span class="i-logos" :class="`i-logos-${l.name}`"></span>
              </span>
              <span class="name">{{ l.name }}</span>
            </label>
            <div class="popularity">{{ l.popularity.toLocaleString() }}</div>
          </li>
        </ul>
      </section>
    </aside>
  </div>
</template>

<style scoped>
.panel-root {
  position: fixed;
  inset: 0;
  z-index: 50;
}

.panel-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
}

.panel {
  position: absolute;
  right: 16px;
  bottom: 80px;
  width: min(520px, calc(100vw - 32px));
  max-height: min(720px, calc(100vh - 120px));
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px 10px;
  border-bottom: 1px solid var(--border);
}

.panel-title {
  font-weight: 600;
  color: var(--text-h);
}

.icon-btn {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-h);
  border-radius: 10px;
  height: 34px;
  width: 34px;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.panel-toolbar {
  display: flex;
  gap: 10px;
  padding: 12px;
  border-bottom: 1px solid var(--border);
  align-items: center;
}

.search {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.15);
  color: var(--text);
}

.search-input {
  border: 0;
  outline: none;
  background: transparent;
  color: var(--text-h);
  width: 100%;
}

.toolbar-actions {
  display: flex;
  gap: 8px;
}

.btn {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-h);
  border-radius: 12px;
  padding: 8px 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn.primary {
  border-color: var(--accent-border);
  background: var(--accent-bg);
  color: var(--text-h);
}

.tags,
.style,
.list {
  padding: 12px;
}

.segmented {
  display: flex;
  gap: 8px;
}

.seg-btn {
  flex: 1 1 0;
  border: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.12);
  color: var(--text-h);
  border-radius: 12px;
  padding: 8px 10px;
  cursor: pointer;
}

.seg-btn.active {
  border-color: var(--accent-border);
  background: var(--accent-bg);
}

.section-title {
  font-size: 14px;
  color: var(--text);
  margin-bottom: 8px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  border: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.15);
  color: var(--text-h);
  border-radius: 999px;
  padding: 6px 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.tag-label {
  font-size: 13px;
}

.muted {
  color: var(--text);
  opacity: 0.8;
  font-size: 13px;
}

.items {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: auto;
  max-height: 360px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 6px;
  border-radius: 10px;
}

.row:hover {
  background: rgba(0, 0, 0, 0.12);
}

.row-left {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.logo {
  height: 18px;
  width: 18px;
  display: grid;
  place-items: center;
}

.name {
  color: var(--text-h);
  font-size: 14px;
}

.popularity {
  color: var(--text);
  font-variant-numeric: tabular-nums;
  font-size: 13px;
}
</style>

