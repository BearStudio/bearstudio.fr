function normalizeText(input: string) {
  return input.normalize('NFKC').trim(); // tweak as needed
}

// Fowler–Noll–Vo hash algorithm 32-bit
function fnv1a32(str: string) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0; // unsigned
}

function mapToRange01(u32: number) {
  return u32 / 2 ** 32; // [0,1)
}

function mapToRange(u01: number, min: number, max: number) {
  return min + u01 * (max - min);
}

export function getValueFromText(
  text: string,
  options: { min?: number; max?: number; type?: 'precise' | 'rounded' }
) {
  const t = normalizeText(text);
  const u01 = mapToRange01(fnv1a32(t));
  const value = mapToRange(u01, options.min ?? 0, options.max ?? 1);

  return options.type === 'rounded' ? Math.round(value) : value;
}
