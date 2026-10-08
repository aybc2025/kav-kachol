// Search-friendly form of Hebrew/English text: no niqqud, no geresh/quotes/dashes,
// lower-case, single spaces. "קרוס-צ׳קינג" and "קרוס צקינג" match the same term.
export function normalize(text) {
  return text
    .normalize("NFKD")
    .replace(/[֑-ׇ]/g, "")
    .replace(/[׳״'"`’]/g, "")
    .replace(/[-–—_.]/g, " ")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}
