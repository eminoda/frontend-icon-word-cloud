<script setup lang="ts">
import cloud from 'd3-cloud'
import { toPng } from 'html-to-image'
import { computed, onBeforeUnmount, onMounted, shallowRef, useTemplateRef, watch } from 'vue'

import { wordCloudConfig } from '../config'
import { colorForName } from '../utils/color'

export type WordCloudItem = { name: string; value: number }
export type WordCloudStyleMode = 'random' | 'hv'

type PlacedWord = {
  name: string
  layoutText: string
  value: number
  x: number
  y: number
  rotate: number
  size: number
  color: string
}

const props = defineProps<{
  items: WordCloudItem[]
  backgroundColor?: string
  styleMode?: WordCloudStyleMode
}>()

const rootRef = useTemplateRef<HTMLDivElement>('root')
const resolvedBackground = computed(() => props.backgroundColor ?? wordCloudConfig.backgroundColor)
const resolvedStyleMode = computed<WordCloudStyleMode>(() => props.styleMode ?? 'hv')

const placed = shallowRef<PlacedWord[]>([])

function valueToFontSize(value: number, minValue: number, maxValue: number) {
  const v = Math.max(1, value)
  const minV = Math.max(1, minValue)
  const maxV = Math.max(minV + 1, maxValue)

  const t = (Math.log(v) - Math.log(minV)) / (Math.log(maxV) - Math.log(minV))
  const clamped = Math.max(0, Math.min(1, t))
  return 14 + clamped * (86 - 14)
}

function shuffled<T>(input: readonly T[]): T[] {
  const a = [...input]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

async function layout() {
  const el = rootRef.value
  if (!el) return

  const width = el.clientWidth
  const height = el.clientHeight
  if (!width || !height) return

  const mode = resolvedStyleMode.value
  const source = mode === 'random' ? shuffled(props.items) : props.items
  const values = source.map((i) => i.value)
  const minValue = Math.min(...values, 1)
  const maxValue = Math.max(...values, 1)

  // d3-cloud 的碰撞/占位是基于 canvas measureText(text) 完成的。
  // 我们 DOM 渲染时会在文字左侧加 icon，因此布局阶段必须把 icon 的宽度“预留出来”，否则会出现重叠与偏移。
  // 用一个 em-space 作为 icon 宽度的近似占位，确保布局与最终 DOM 宽度更一致。
  const iconPlaceholder = '\u2003' // em-space

  const words = source.map((i, idx) => ({
    text: `${iconPlaceholder}${i.name}`,
    name: i.name,
    value: i.value,
    idx,
    size: valueToFontSize(i.value, minValue, maxValue),
  }))

  const result = await new Promise<PlacedWord[]>((resolve) => {
    const layout = cloud()
      .size([width, height])
      .words(words as any)
      .padding(16) // 间距放大，降低重叠概率
      .spiral('rectangular' as any)
      .rotate((d: any) => {
        if (mode === 'hv') return d.idx % 2 === 0 ? 0 : 90
        const step = 15
        const r = Math.floor(Math.random() * (180 / step + 1)) * step - 90
        return r
      })
      .font('system-ui, Segoe UI, Roboto, sans-serif')
      .fontWeight(700 as any)
      .fontSize((d: any) => d.size)
      .on('end', (out: any[]) => {
        resolve(
          out.map((w: any) => ({
            name: String(w.name ?? '').trim() || String(w.text).trim(),
            layoutText: String(w.text),
            value: Number(w.value) || 0,
            x: Number(w.x) || 0,
            y: Number(w.y) || 0,
            rotate: Number(w.rotate) || 0,
            size: Number(w.size) || 14,
            color: colorForName(String(w.name ?? w.text), wordCloudConfig.palette),
          })),
        )
      })

    layout.start()
  })

  placed.value = result
}

async function exportPng() {
  const el = rootRef.value
  if (!el) return null
  return await toPng(el, {
    pixelRatio: wordCloudConfig.exportPixelRatio,
    backgroundColor: resolvedBackground.value,
  })
}

defineExpose({ exportPng })

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  layout()
  if (rootRef.value) {
    resizeObserver = new ResizeObserver(() => layout())
    resizeObserver.observe(rootRef.value)
  }
})

watch(
  () => [props.items, resolvedBackground.value, resolvedStyleMode.value] as const,
  () => layout(),
  { deep: true },
)

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  resizeObserver = null
})
</script>

<template>
  <div ref="root" class="wc-root" :style="{ backgroundColor: resolvedBackground }">
    <div class="wc-stage">
      <div
        v-for="w in placed"
        :key="w.name"
        class="wc-word"
        :style="{
          // d3-cloud 的 x/y 是以“词中心点”为原点；DOM 元素默认是左上角定位
          // 这里额外 translate(-50%, -50%) 让 DOM 元素也以自身中心点对齐，保证整体居中且减少空隙偏移感
          transform: `translate(${w.x}px, ${w.y}px) rotate(${w.rotate}deg) translate(-50%, -50%)`,
          fontSize: `${w.size}px`,
          color: w.color,
        }"
        :title="`${w.name}: ${w.value.toLocaleString()}`"
      >
        <span class="wc-word-inner">
          <span class="wc-icon" :class="`i-logos-${w.name}`" aria-hidden="true"></span>
          <span class="wc-text">{{ w.name }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wc-root {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.wc-stage {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
}

.wc-word {
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: center center;
  white-space: nowrap;
  user-select: none;
  font-weight: 700;
  line-height: 1;
  will-change: transform;
}

.wc-word-inner {
  position: relative;
  display: inline-block;
  padding: 0.15em 0.2em;
  padding-left: 1.35em; /* 预留 icon 宽度，和布局阶段占位更一致 */
  line-height: 1;
}

.wc-icon {
  position: absolute;
  left: 0.2em;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  width: 1em;
  height: 1em;
}

.wc-text {
  display: inline-block;
  line-height: 1;
}
</style>

