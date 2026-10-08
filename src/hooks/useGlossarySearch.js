import { useMemo, useState } from "react";
import { TERMS } from "../content/glossary.js";
import { normalize } from "../lib/normalize.js";

const INDEX = TERMS.map((term) => ({
  term,
  haystack: normalize(`${term.he} ${term.en} ${term.short}`),
  title: normalize(`${term.he} ${term.en}`),
}));

export function useGlossarySearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const results = useMemo(() => {
    const q = normalize(query);
    const inCategory = INDEX.filter((e) => category === "all" || e.term.category === category);
    if (!q) return inCategory.map((e) => e.term);
    // Title matches first, then matches in the explanation.
    const titleHits = inCategory.filter((e) => e.title.includes(q));
    const bodyHits = inCategory.filter((e) => !e.title.includes(q) && e.haystack.includes(q));
    return [...titleHits, ...bodyHits].map((e) => e.term);
  }, [query, category]);

  return { query, setQuery, category, setCategory, results };
}
