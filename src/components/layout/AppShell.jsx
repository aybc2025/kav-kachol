import { BottomNav } from "./BottomNav.jsx";
import { UpdateBanner } from "./UpdateBanner.jsx";
import { OfflineNotice } from "./OfflineNotice.jsx";
import { TermSheet } from "../glossary/TermSheet.jsx";

// Lessons and quizzes are focus screens: they hide the bottom nav.
const FOCUS_ROUTES = new Set(["lesson", "quiz", "settings"]);

export function AppShell({ route, children }) {
  const focus = FOCUS_ROUTES.has(route.name);
  return (
    <>
      <OfflineNotice />
      {children}
      {focus ? null : <BottomNav active={route.tab} />}
      <UpdateBanner />
      <TermSheet currentUnitId={route.name === "lesson" ? route.params.unitId : null} />
    </>
  );
}
