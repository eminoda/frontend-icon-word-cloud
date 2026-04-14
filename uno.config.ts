import { defineConfig, presetIcons, presetWind3, transformerVariantGroup } from 'unocss'

import { frontendLogos } from './src/data/logos'

export default defineConfig({
  safelist: [
    // dynamic icon classes like `i-logos-${name}` need safelist
    ...frontendLogos.map((l) => `i-logos-${l.name}`),
  ],
  presets: [
    presetWind3(),
    presetIcons({
      collections: {
        logos: () => import('@iconify-json/logos/icons.json').then((i) => i.default),
        mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default),
        si: () => import('@iconify-json/simple-icons/icons.json').then((i) => i.default),
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
})

