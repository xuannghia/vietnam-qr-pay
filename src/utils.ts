export const stringToUint8Array = (content: string): Uint8Array => {
  if (typeof TextEncoder !== 'undefined') {
    const encoder = new TextEncoder()
    return encoder.encode(content)
  }
  // Polyfill for TextEncoder
  // This is a simplified implementation of the TextEncoder API
  // Source: https://gist.github.com/Yaffle/5458286
  const octets: number[] = []
  const length = content.length
  let i = 0
  while (i < length) {
    const codePoint = content.codePointAt(i) as number
    let c = 0
    let bits = 0
    if (codePoint <= 0x0000007F) {
      c = 0
      bits = 0x00
    } else if (codePoint <= 0x000007FF) {
      c = 6
      bits = 0xC0
    } else if (codePoint <= 0x0000FFFF) {
      c = 12
      bits = 0xE0
    } else if (codePoint <= 0x001FFFFF) {
      c = 18
      bits = 0xF0
    }
    octets.push(bits | (codePoint >> c))
    c -= 6
    while (c >= 0) {
      octets.push(0x80 | ((codePoint >> c) & 0x3F))
      c -= 6
    }
    i += codePoint >= 0x10000 ? 2 : 1
  }
  return new Uint8Array(octets)
}