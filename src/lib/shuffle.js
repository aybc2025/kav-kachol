// Fisher–Yates on a copy; the input array is never mutated.
export function shuffle(items) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function sample(items, count) {
  return shuffle(items).slice(0, count);
}
