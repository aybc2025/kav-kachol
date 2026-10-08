// Turns lesson text with [[term:id|shown text]] markers into plain tokens.
// Rendering these tokens as JSX (never as HTML) keeps lesson text inert.
const TERM_RE = /\[\[term:([a-z0-9-]+)\|([^\]]+)\]\]/g;

export function parseTerms(text) {
  const tokens = [];
  let last = 0;
  for (const match of text.matchAll(TERM_RE)) {
    if (match.index > last) tokens.push({ type: "text", value: text.slice(last, match.index) });
    tokens.push({ type: "term", id: match[1], value: match[2] });
    last = match.index + match[0].length;
  }
  if (last < text.length) tokens.push({ type: "text", value: text.slice(last) });
  return tokens;
}
