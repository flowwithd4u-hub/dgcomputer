// Theme utilities. Extracted for testability and to keep the inline
// pre-hydration script in __root.tsx in sync with runtime toggling logic.

export type Theme = "light" | "dark";
export const THEME_STORAGE_KEY = "theme";

export function getStoredTheme(): Theme | null {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    return v === "dark" || v === "light" ? v : null;
  } catch {
    return null;
  }
}

export function getSystemTheme(): Theme {
  if (typeof window === "undefined" || !window.matchMedia) return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  root.dataset.theme = theme;
}

export function persistTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
}

export function clearStoredTheme() {
  try {
    localStorage.removeItem(THEME_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

// Subscribe to system theme changes. The callback only fires when there is
// no user-pinned preference (i.e. the user is following system).
export function watchSystemTheme(cb: (theme: Theme) => void): () => void {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = (e: MediaQueryListEvent) => {
    if (getStoredTheme() === null) cb(e.matches ? "dark" : "light");
  };
  mq.addEventListener("change", handler);
  return () => mq.removeEventListener("change", handler);
}

// Inline script source used in __root.tsx. Kept here as the single source of
// truth so the test suite can assert it matches runtime behavior. MUST be
// safe to inline (no imports, no template-literal interpolation).
export const THEME_INIT_SCRIPT = `(function(){try{var k='${THEME_STORAGE_KEY}';var s=localStorage.getItem(k);var m=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var d=s==='dark'||s==='light'?s==='dark':!!m;var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';r.dataset.theme=d?'dark':'light';}catch(e){}})();`;
