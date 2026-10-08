import { createContext, useCallback, useContext, useMemo, useState } from "react";

// Lets any TermLink, anywhere in the app, open the glossary sheet for a term.
const TermSheetContext = createContext(null);

export function TermSheetProvider({ children }) {
  const [termId, setTermId] = useState(null);
  const openTerm = useCallback((id) => setTermId(id), []);
  const closeTerm = useCallback(() => setTermId(null), []);
  const value = useMemo(() => ({ termId, openTerm, closeTerm }), [termId, openTerm, closeTerm]);
  return <TermSheetContext.Provider value={value}>{children}</TermSheetContext.Provider>;
}

export function useTermSheet() {
  const ctx = useContext(TermSheetContext);
  if (!ctx) throw new Error("useTermSheet must be used inside TermSheetProvider");
  return ctx;
}
