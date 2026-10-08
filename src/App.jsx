import { useHashRoute } from "./hooks/useHashRoute.js";
import { ProgressProvider } from "./hooks/useProgress.jsx";
import { TermSheetProvider } from "./hooks/useTermSheet.jsx";
import { AppShell } from "./components/layout/AppShell.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LessonPage } from "./pages/LessonPage.jsx";
import { QuizHubPage } from "./pages/QuizHubPage.jsx";
import { QuizPage } from "./pages/QuizPage.jsx";
import { GlossaryPage } from "./pages/GlossaryPage.jsx";
import { SignalsPage } from "./pages/SignalsPage.jsx";
import { SettingsPage } from "./pages/SettingsPage.jsx";

function Page({ route }) {
  switch (route.name) {
    case "lesson":
      // key: a new unit starts a fresh lesson state instead of reusing the previous one
      return <LessonPage key={route.params.unitId} unitId={route.params.unitId} />;
    case "quizHub":
      return <QuizHubPage />;
    case "quiz":
      return <QuizPage key={route.path} mode={route.params.mode} />;
    case "glossary":
      return <GlossaryPage />;
    case "signals":
      return <SignalsPage />;
    case "settings":
      return <SettingsPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  const route = useHashRoute();
  return (
    <ProgressProvider>
      <TermSheetProvider>
        <AppShell route={route}>
          <Page route={route} />
        </AppShell>
      </TermSheetProvider>
    </ProgressProvider>
  );
}
