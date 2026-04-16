<script setup lang="ts">
import { computed, shallowRef } from 'vue'

import { defaultLogoNames, frontendLogos } from '../../data/logos'
import { wordCloudConfig } from './config'
import { useLogoSelection } from './composables/useLogoSelection'
import SettingsPanel from './components/SettingsPanel.vue'
import WordCloudCanvas from './components/WordCloudCanvas.vue'

const panelOpen = shallowRef(false)
const styleMode = shallowRef<'hv' | 'random'>('hv')
const cloudRefreshKey = shallowRef(0)

const selection = useLogoSelection(frontendLogos, {
  defaultTopN: wordCloudConfig.defaultSelectedTopN,
  defaultNames: defaultLogoNames,
})

const visibleLogos = computed(() => selection.filtered.value)

const cloudItems = computed(() =>
  frontendLogos
    .filter((l) => selection.isSelected(l.name))
    .map((l) => ({ name: l.name, value: l.popularity, color: l.color })),
)

const canvasRef = shallowRef<InstanceType<typeof WordCloudCanvas> | null>(null)

function togglePanel() {
  panelOpen.value = !panelOpen.value
}

function closePanel() {
  panelOpen.value = false
}

function refreshCloud() {
  cloudRefreshKey.value += 1
}

function downloadFile(dataUrl: string, filename: string) {
  const a = document.createElement('a')
  a.href = dataUrl
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
}

async function handleDownload() {
  const dataUrl = await canvasRef.value?.exportPng()
  if (!dataUrl) return
  downloadFile(dataUrl, 'frontend-wordcloud.png')
}
</script>

<template>
  <div class="page">
    <header class="header">
      <nav class="brand-links" aria-label="Links">
        <a
          class="brand-link brand-link-bilibili"
          href="https://space.bilibili.com/11915251"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bilibili"
        >
          <span class="i-si-bilibili"></span>
        </a>
        <a
          class="brand-link"
          href="http://github.com/eminoda/frontend-icon-word-cloud"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <span class="i-si-github"></span>
        </a>
        <button class="brand-link brand-btn action-btn" type="button" @click="togglePanel" aria-label="Settings">
          <span class="i-mdi-cog"></span>
        </button>
        <button class="brand-link brand-btn action-btn" type="button" @click="refreshCloud" aria-label="Refresh layout">
          <span class="i-mdi-refresh"></span>
        </button>
      </nav>
    </header>

    <main class="main">
      <WordCloudCanvas
        :key="cloudRefreshKey"
        ref="canvasRef"
        :items="cloudItems"
        :style-mode="styleMode"
      />
    </main>

    <SettingsPanel
      :open="panelOpen"
      :all-logos="frontendLogos"
      :logos="visibleLogos"
      :query="selection.query.value"
      :selected-names="selection.selectedNames.value"
      :is-selected="selection.isSelected"
      :style-mode="styleMode"
      @close="closePanel"
      @update-query="selection.query.value = $event"
      @update-style-mode="styleMode = $event"
      @toggle="selection.setSelected($event.name, $event.value)"
      @remove="selection.remove($event)"
      @clear="selection.clear()"
      @download="handleDownload"
    />
  </div>
</template>

<style scoped>
.page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.header {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 10;
}

.brand-links {
  display: flex;
  gap: 8px;
  align-items: center;
}

.brand-link {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(0, 0, 0, 0.12);
  color: #ffffff;
  text-decoration: none;
}

.brand-link-bilibili {
  color: #fb7299;
}

.brand-link:hover {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.12);
}

.brand-link :deep(svg) {
  width: 18px;
  height: 18px;
}

.main {
  display: flex;
}

.brand-btn {
  cursor: pointer;
  padding: 0;
}

.action-btn {
  width: 30px;
  height: 30px;
}

.brand-btn :deep(.i-mdi-cog) {
  width: 20px;
  height: 20px;
  font-size: 20px;
  display: block;
  line-height: 1;
}

.brand-btn :deep(.i-mdi-refresh) {
  width: 20px;
  height: 20px;
  font-size: 20px;
  display: block;
  line-height: 1;
}
</style>

