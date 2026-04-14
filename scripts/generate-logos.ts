import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { logoSeeds } from './logos.seed'

type NpmDownloadsPointResponse =
  | { downloads: number; start: string; end: string; package: string }
  | { error: string }

class NpmDownloadsApiError extends Error {
  public status: number
  public statusText: string
  public npmPackage: string

  constructor(opts: { npmPackage: string; status: number; statusText: string }) {
    super(`npm downloads api failed: ${opts.npmPackage} (${opts.status} ${opts.statusText})`)
    this.status = opts.status
    this.statusText = opts.statusText
    this.npmPackage = opts.npmPackage
  }
}

type DownloadCacheFile = {
  version: 1
  items: Record<string, { downloads: number; updatedAt: string }>
}

async function fetchLastMonthDownloads(npmPackage: string): Promise<number> {
  const url = `https://api.npmjs.org/downloads/point/last-month/${encodeURIComponent(npmPackage)}`
  const res = await fetch(url, {
    headers: { accept: 'application/json' },
  })

  if (!res.ok) {
    throw new NpmDownloadsApiError({ npmPackage, status: res.status, statusText: res.statusText })
  }

  const data = (await res.json()) as NpmDownloadsPointResponse
  if ('error' in data) {
    throw new Error(`npm downloads api error: ${npmPackage} (${data.error})`)
  }

  if (typeof data.downloads !== 'number' || !Number.isFinite(data.downloads)) {
    throw new Error(`npm downloads api invalid downloads: ${npmPackage}`)
  }

  return data.downloads
}

async function fetchLastMonthDownloadsWithRetry(npmPackage: string): Promise<number> {
  const attempts = 5
  let lastError: unknown
  for (let i = 0; i < attempts; i++) {
    try {
      return await fetchLastMonthDownloads(npmPackage)
    } catch (err) {
      lastError = err
      const isRateLimited = err instanceof NpmDownloadsApiError && err.status === 429
      const backoffMs = isRateLimited ? 5000 + 1000 * i : 500 * 2 ** i
      await new Promise((r) => setTimeout(r, backoffMs))
    }
  }
  throw lastError instanceof Error
    ? new Error(`failed after retries: ${npmPackage} (${lastError.message})`)
    : new Error(`failed after retries: ${npmPackage}`)
}

async function loadLogosIconSet(): Promise<Set<string>> {
  const here = dirname(fileURLToPath(import.meta.url))
  const iconsJsonPath = resolve(here, '..', 'node_modules', '@iconify-json', 'logos', 'icons.json')
  const raw = await readFile(iconsJsonPath, 'utf-8')
  const data = JSON.parse(raw) as { icons: Record<string, unknown> }
  return new Set(Object.keys(data.icons ?? {}))
}

async function readCache(cachePath: string): Promise<DownloadCacheFile> {
  try {
    const raw = await readFile(cachePath, 'utf-8')
    const parsed = JSON.parse(raw) as DownloadCacheFile
    if (parsed?.version === 1 && parsed.items && typeof parsed.items === 'object') return parsed
  } catch {
    // ignore
  }
  return { version: 1, items: {} }
}

async function writeCache(cachePath: string, cache: DownloadCacheFile) {
  await mkdir(dirname(cachePath), { recursive: true })
  await writeFile(cachePath, JSON.stringify(cache, null, 2), 'utf-8')
}

function toGeneratedTs(items: Array<{ name: string; popularity: number }>): string {
  const payload = JSON.stringify(items, null, 2)
  return [
    'export type FrontendLogo = { name: string; popularity: number }',
    '',
    `export const frontendLogos: FrontendLogo[] = ${payload} as const`,
    '',
  ].join('\n')
}

async function main() {
  const logosSet = await loadLogosIconSet()
  const usableSeeds = logoSeeds.filter((s) => logosSet.has(s.name))
  const skipped = logoSeeds.filter((s) => !logosSet.has(s.name))

  if (skipped.length) {
    // eslint-disable-next-line no-console
    console.warn(`skipped (missing logos icon): ${skipped.map((s) => s.name).join(', ')}`)
  }

  const here = dirname(fileURLToPath(import.meta.url))
  const cachePath = resolve(here, '.cache', 'npm-downloads.json')
  const cache = await readCache(cachePath)

  const entries: Array<{ name: string; popularity: number }> = []
  for (const seed of usableSeeds) {
    const cached = cache.items[seed.npm]
    if (cached && typeof cached.downloads === 'number') {
      entries.push({ name: seed.name, popularity: cached.downloads })
      continue
    }

    const popularity = await fetchLastMonthDownloadsWithRetry(seed.npm)
    cache.items[seed.npm] = { downloads: popularity, updatedAt: new Date().toISOString() }
    entries.push({ name: seed.name, popularity })
    await new Promise((r) => setTimeout(r, 250))
  }

  const sorted = [...entries].sort((a, b) => b.popularity - a.popularity)

  const outFile = resolve(here, '..', 'src', 'data', 'logos.ts')
  await mkdir(dirname(outFile), { recursive: true })
  await writeFile(outFile, toGeneratedTs(sorted), 'utf-8')
  await writeCache(cachePath, cache)

  // eslint-disable-next-line no-console
  console.log(`generated: ${outFile} (${sorted.length} items)`)
}

await main()

