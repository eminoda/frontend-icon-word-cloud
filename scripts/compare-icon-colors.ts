import logos from '@iconify-json/logos/icons.json'
import { frontendLogos } from '../src/data/logos'

type IconifyCollection = {
  icons: Record<string, { body: string }>
}

const icons = (logos as unknown as IconifyCollection).icons

const named: Record<string, string> = {
  orange: '#ffa500',
  green: '#008000',
  black: '#000000',
  white: '#ffffff',
  red: '#ff0000',
  blue: '#0000ff',
  yellow: '#ffff00',
  gray: '#808080',
  grey: '#808080',
}

function normHex(s: string): string | null {
  const t = s.trim()
  if (!t) return null
  const lower = t.toLowerCase()
  if (lower === 'none' || lower === 'transparent' || lower === 'currentcolor') return null
  if (lower in named) return named[lower]

  const hex3 = /^#([0-9a-f]{3})$/i.exec(t)
  if (hex3) {
    const h = hex3[1]
    return (`#${h.split('').map((c) => c + c).join('')}`).toLowerCase()
  }
  const hex6 = /^#([0-9a-f]{6})$/i.exec(t)
  if (hex6) return (`#${hex6[1]}`).toLowerCase()

  const rgb = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i.exec(t)
  if (rgb) {
    const r = Math.max(0, Math.min(255, Number(rgb[1])))
    const g = Math.max(0, Math.min(255, Number(rgb[2])))
    const b = Math.max(0, Math.min(255, Number(rgb[3])))
    return `#${[r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('')}`
  }

  return null
}

function hexToRgb(h: string): [number, number, number] {
  const m = /^#([0-9a-f]{6})$/i.exec(h)
  if (!m) throw new Error(`Invalid hex: ${h}`)
  const v = m[1]
  return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)]
}

function dist(a: string, b: string): number {
  const [ar, ag, ab] = hexToRgb(a)
  const [br, bg, bb] = hexToRgb(b)
  const dr = ar - br
  const dg = ag - bg
  const db = ab - bb
  return Math.sqrt(dr * dr + dg * dg + db * db)
}

function dominantColor(body: string): { color: string | null; palette: Record<string, number> } {
  const palette: Record<string, number> = {}
  // Include gradient stop colors so we can infer "theme" for icons using url(#gradient)
  const re = /(fill|stroke|stop-color)="([^"]+)"/g
  let m: RegExpExecArray | null
  while ((m = re.exec(body))) {
    const c = normHex(m[2])
    if (!c) continue
    palette[c] = (palette[c] ?? 0) + 1
  }
  const entries = Object.entries(palette).sort((a, b) => b[1] - a[1])
  return { color: entries[0]?.[0] ?? null, palette }
}

let missing = 0
let compared = 0
let exactMatch = 0
let closeMatch = 0
let mismatch = 0
let nullButHas = 0
let noExplicitColorInSvg = 0

const mismatches: Array<
  | { name: string; reason: string; logosColor: string | null; iconDominant: string | null }
  | { name: string; logosColor: string; iconDominant: string; distance: number }
> = []

for (const l of frontendLogos) {
  const icon = icons[l.name]
  if (!icon) {
    missing++
    continue
  }

  const dom = dominantColor(icon.body)
  const theme = typeof l.color === 'string' ? normHex(l.color) : null
  const domc = dom.color
  compared++

  if (!theme && domc) {
    nullButHas++
    mismatches.push({
      name: l.name,
      reason: 'logos.ts color is null',
      logosColor: l.color,
      iconDominant: domc,
    })
    continue
  }
  if (theme && !domc) {
    // Some icons rely on implicit defaults or currentColor; treat as "cannot verify" instead of mismatch.
    noExplicitColorInSvg++
    continue
  }
  if (!theme && !domc) continue

  const d = dist(theme!, domc!)
  if (theme === domc) {
    exactMatch++
    continue
  }
  if (d <= 40) {
    closeMatch++
    continue
  }
  mismatch++
  mismatches.push({ name: l.name, logosColor: theme!, iconDominant: domc!, distance: Number(d.toFixed(2)) })
}

mismatches.sort((a: any, b: any) => (b.distance ?? 999) - (a.distance ?? 999))

console.log(
  JSON.stringify(
    {
      total: frontendLogos.length,
      iconMissingCount: missing,
      comparedCount: compared,
      exactMatch,
      closeMatch,
      mismatch,
      nullButHas,
      noExplicitColorInSvg,
      sampleMismatches: mismatches.slice(0, 30),
    },
    null,
    2,
  ),
)

if (mismatches.length) process.exitCode = 1

