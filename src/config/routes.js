// Hash-based routes: GitHub Pages has no server rewrites, and hash URLs survive
// a refresh on any screen without a 404 fallback page.
export const ROUTES = {
  home: '/',
  lesson: (unitId) => `/unit/${unitId}`,
  quizHub: '/quiz',
  quiz: (mode) => `/quiz/${mode}`,
  glossary: '/glossary',
  signals: '/signals',
  settings: '/settings',
};

export const TABS = [
  { key: 'learn', label: 'לימוד', path: ROUTES.home, icon: 'rink' },
  { key: 'quiz', label: 'חידון', path: ROUTES.quizHub, icon: 'question' },
  { key: 'glossary', label: 'מילון', path: ROUTES.glossary, icon: 'book' },
  { key: 'signals', label: 'שופטים', path: ROUTES.signals, icon: 'whistle' },
];

// Turns a hash path into { name, params }. Unknown paths fall back to home.
export function matchRoute(path) {
  const parts = path.split('/').filter(Boolean);
  if (parts.length === 0) return { name: 'home', params: {}, tab: 'learn' };
  const [head, arg] = parts;
  switch (head) {
    case 'unit':
      return arg ? { name: 'lesson', params: { unitId: arg }, tab: 'learn' } : home();
    case 'quiz':
      return arg
        ? { name: 'quiz', params: { mode: arg }, tab: 'quiz' }
        : { name: 'quizHub', params: {}, tab: 'quiz' };
    case 'glossary':
      return { name: 'glossary', params: {}, tab: 'glossary' };
    case 'signals':
      return { name: 'signals', params: {}, tab: 'signals' };
    case 'settings':
      return { name: 'settings', params: {}, tab: 'learn' };
    default:
      return home();
  }
}

function home() {
  return { name: 'home', params: {}, tab: 'learn' };
}
