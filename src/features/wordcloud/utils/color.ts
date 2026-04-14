export function colorForName(name: string, palette: readonly string[]): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0
  }
  return palette[hash % palette.length] ?? palette[0] ?? '#ffffff'
}

