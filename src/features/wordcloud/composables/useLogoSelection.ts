import { computed, shallowRef } from 'vue'

import type { FrontendLogo } from '../../../data/logos'

export function useLogoSelection(
  all: FrontendLogo[],
  options?: { defaultTopN?: number; defaultNames?: string[] },
) {
  const defaultTopN = options?.defaultTopN ?? 20
  const allSorted = computed(() => [...all].sort((a, b) => b.popularity - a.popularity))

  const selected = shallowRef<Set<string>>(
    (() => {
      const names = options?.defaultNames?.filter((n) => !n.includes('-icon')) ?? []
      if (names.length) return new Set(names)
      return new Set(allSorted.value.slice(0, defaultTopN).map((i) => i.name))
    })(),
  )
  const query = shallowRef('')

  const selectedNames = computed(() => Array.from(selected.value))

  const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()
    const items = allSorted.value
    if (!q) return items
    return items.filter((i) => i.name.toLowerCase().includes(q))
  })

  function isSelected(name: string) {
    return selected.value.has(name)
  }

  function setSelected(name: string, value: boolean) {
    const next = new Set(selected.value)
    if (value) next.add(name)
    else next.delete(name)
    selected.value = next
  }

  function remove(name: string) {
    setSelected(name, false)
  }

  function clear() {
    selected.value = new Set()
  }

  return {
    query,
    filtered,
    selectedNames,
    isSelected,
    setSelected,
    remove,
    clear,
  }
}

