import { useEffect, useState } from "react";
import { matchRoute } from "../config/routes.js";

const currentPath = () => window.location.hash.replace(/^#/, "") || "/";

export function useHashRoute() {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const onChange = () => {
      setPath(currentPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return { path, ...matchRoute(path) };
}

export function navigate(to) {
  window.location.hash = to;
}

export const href = (to) => `#${to}`;
