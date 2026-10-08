import { useGlossarySearch } from "../hooks/useGlossarySearch.js";
import { useTermSheet } from "../hooks/useTermSheet.jsx";
import { TopBar } from "../components/layout/TopBar.jsx";
import { SearchField } from "../components/glossary/SearchField.jsx";
import { CategoryChips } from "../components/glossary/CategoryChips.jsx";
import { GlossaryList } from "../components/glossary/GlossaryList.jsx";
import styles from "./TabPage.module.css";

export function GlossaryPage() {
  const { query, setQuery, category, setCategory, results } = useGlossarySearch();
  const { openTerm } = useTermSheet();

  return (
    <div className={styles.page}>
      <TopBar large title="מילון" />
      <main className={styles.stack}>
        <SearchField value={query} onChange={setQuery} />
        <CategoryChips value={category} onChange={setCategory} />
        {results.length > 0 ? (
          <GlossaryList terms={results} onOpen={openTerm} />
        ) : (
          <p className={styles.intro} role="status">
            אין מונח כזה. אפשר לנסות את השם באנגלית, או לבחור ׳הכול׳.
          </p>
        )}
      </main>
    </div>
  );
}
