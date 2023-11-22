const textEncoder = new TextEncoder()

export const stringToUnit8Array = (content: string): Uint8Array => {
  return textEncoder.encode(content)
}
