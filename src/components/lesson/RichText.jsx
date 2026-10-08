import { parseTerms } from "../../lib/parseTerms.js";
import { TermLink } from "./TermLink.jsx";

// Number ranges like "2025-26" or "40-60": isolated as LTR and kept on one line, so the
// bidi algorithm can't flip them ("26-2025") or wrap them at the hyphen.
const RANGE_RE = /(\d+[-–]\d+)/;

function TextWithRanges({ value }) {
  return value.split(RANGE_RE).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="ltr">
        {part}
      </span>
    ) : (
      part
    )
  );
}

// Lesson text with glossary links. Rendered as JSX only, never as HTML.
export function RichText({ text, className }) {
  const tokens = parseTerms(text);
  return (
    <p className={className}>
      {tokens.map((t, i) =>
        t.type === "term" ? (
          <TermLink key={i} id={t.id}>
            {t.value}
          </TermLink>
        ) : (
          <TextWithRanges key={i} value={t.value} />
        )
      )}
    </p>
  );
}
