<script setup lang="ts">
import { computed } from 'vue'

import { defaultLogoNames } from '../../../data/logos'
import type { FrontendLogo } from '../../../data/logos'
import type { WordCloudStyleMode } from './WordCloudCanvas.vue'

const props = defineProps<{
  open: boolean
  allLogos: FrontendLogo[]
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
  clear: []
  download: []
}>()

const selectedSet = computed(() => new Set(props.selectedNames))
const defaultSet = new Set(defaultLogoNames)
const defaultOrder = new Map(defaultLogoNames.map((name, index) => [name, index]))
const listLogos = computed(() => {
  const q = props.query.trim()
  if (q) return props.logos

  return [...props.allLogos].sort((a, b) => {
    const defaultDiff = Number(defaultSet.has(b.name)) - Number(defaultSet.has(a.name))
    if (defaultDiff !== 0) return defaultDiff

    if (defaultSet.has(a.name) && defaultSet.has(b.name)) {
      return (defaultOrder.get(a.name) ?? Number.MAX_SAFE_INTEGER) - (defaultOrder.get(b.name) ?? Number.MAX_SAFE_INTEGER)
    }

    return b.popularity - a.popularity
  })
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

      <section class="list">
        <div class="section-title">
          {{ query.trim() ? '搜索结果' : '前端流行库' }}
        </div>
        <div class="tag-list-scroll">
          <div class="tag-list">
            <button
              v-for="l in listLogos"
              :key="l.name"
              class="selected-tag library-tag"
              :class="{ active: selectedSet.has(l.name), 'icon-only-tag': !l.isSquare }"
              type="button"
              @click="emit('toggle', { name: l.name, value: !selectedSet.has(l.name) })"
            >
              <span class="logo tag-logo">
                <span class="i-logos" :class="`i-logos-${l.name}`"></span>
              </span>
              <span v-if="l.isSquare" class="tag-label">{{ l.name }}</span>
            </button>
          </div>
        </div>
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
  top: 0;
  right: 0;
  bottom: 0;
  width: min(420px, calc(100vw - 24px));
  height: 100vh;
  background: var(--code-bg);
  border-left: 1px solid var(--border);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  transform: translateX(0);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
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
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 16px;
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
  width: 100%;
}

.btn {
  flex: 1 1 0;
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

.style,
.list {
  padding: 14px 16px;
}

.list {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
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

.tag-list-scroll {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px;
}

.selected-tag {
  border: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.15);
  color: var(--text-h);
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.icon-only-tag {
  width: 90px;
  height: 36px;
  justify-content: center;
  padding: 0;
  flex: 0 0 90px;
  position: relative;
}

.library-tag.active {
  border-color: rgba(255, 255, 255, 0.5);
  background: #ffffff;
  color: #111111;
}

.tag-label {
  font-size: 13px;
  line-height: 1;
}

.tag-logo {
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  display: grid;
  place-items: center;
}

.tag-logo :deep(.i-logos) {
  display: block;
  width: 100%;
  height: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.icon-only-tag .tag-logo {
  width: 100%;
  height: 100%;
  padding: 6px 10px;
  box-sizing: border-box;
}

.icon-only-tag .tag-logo :deep(.i-logos) {
  height: 100%;
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

@media (max-width: 640px) {
  .panel {
    width: 100vw;
  }

  .panel-toolbar {
    gap: 12px;
  }

  .toolbar-actions {
    flex-direction: column;
  }
}
</style>

