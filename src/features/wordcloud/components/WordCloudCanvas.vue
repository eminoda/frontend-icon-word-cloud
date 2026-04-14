<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, shallowRef, useTemplateRef, watch } from 'vue'
import * as echarts from 'echarts/core'
import type { ECharts, EChartsCoreOption } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { TooltipComponent } from 'echarts/components'
import 'echarts-wordcloud'

import { wordCloudConfig } from '../config'
import { colorForName } from '../utils/color'

export type WordCloudItem = { name: string; value: number }
export type WordCloudStyleMode = 'random' | 'hv'

const props = defineProps<{
  items: WordCloudItem[]
  backgroundColor?: string
  styleMode?: WordCloudStyleMode
}>()

echarts.use([CanvasRenderer, TooltipComponent])

const elRef = useTemplateRef<HTMLDivElement>('el')
const chart = shallowRef<ECharts | null>(null)

const resolvedBackground = computed(() => props.backgroundColor ?? wordCloudConfig.backgroundColor)
const resolvedStyleMode = computed<WordCloudStyleMode>(() => props.styleMode ?? 'hv')

function shuffled<T>(input: readonly T[]): T[] {
  const a = [...input]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function initChart() {
  if (!elRef.value) return
  chart.value = echarts.init(elRef.value, undefined, {
    renderer: 'canvas',
  })
}

function setOption() {
  const instance = chart.value
  if (!instance) return

  const mode = resolvedStyleMode.value
  const data = mode === 'random' ? shuffled(props.items) : props.items
  const rotationRange = mode === 'hv' ? [0, 90] : [-90, 90]
  const rotationStep = mode === 'hv' ? 90 : 15

  const option: EChartsCoreOption = {
    backgroundColor: resolvedBackground.value,
    tooltip: {
      trigger: 'item',
      formatter: (p: any) => `${p.name}: ${p.value}`,
    },
    series: [
      {
        type: 'wordCloud',
        shape: 'circle',
        // 间距更大：gridSize 越大越稀疏
        gridSize: 14,
        sizeRange: [14, 86],
        rotationRange,
        rotationStep,
        textPadding: 6,
        drawOutOfBound: false,
        textStyle: {
          fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif',
          fontWeight: 700,
          color: (p: any) => colorForName(String(p?.name ?? ''), wordCloudConfig.palette),
        },
        emphasis: { focus: 'self' },
        data: data.map((i) => ({
          name: i.name,
          value: i.value,
        })),
      } as any,
    ],
  }

  instance.setOption(option, { notMerge: true })
}

async function exportPng() {
  const instance = chart.value
  if (!instance) return null
  return instance.getDataURL({
    type: 'png',
    pixelRatio: wordCloudConfig.exportPixelRatio,
    backgroundColor: resolvedBackground.value,
    excludeComponents: ['toolbox'],
  })
}

defineExpose({ exportPng })

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  initChart()
  setOption()

  if (elRef.value) {
    resizeObserver = new ResizeObserver(() => {
      chart.value?.resize()
    })
    resizeObserver.observe(elRef.value)
  }
})

watch(
  () => [props.items, resolvedBackground.value, resolvedStyleMode.value] as const,
  () => setOption(),
  { deep: true },
)

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  resizeObserver = null
  chart.value?.dispose()
  chart.value = null
})
</script>

<template>
  <div ref="el" class="wc-canvas"></div>
</template>

<style scoped>
.wc-canvas {
  width: 100vw;
  height: 100vh;
}
</style>

