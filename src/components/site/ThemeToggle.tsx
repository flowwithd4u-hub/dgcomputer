import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {
  applyTheme,
  persistTheme,
  watchSystemTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

function readDomTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle() {
  // Start as `null` so SSR markup and the first client render are identical
  // (avoids hydration mismatch). We resolve the real theme inside an effect.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(readDomTheme());

    const onStorage = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY) {
        const next: Theme = e.newValue === "dark" ? "dark" : "light";
        applyTheme(next);
        setTheme(next);
      }
    };
    window.addEventListener("storage", onStorage);

    const unwatch = watchSystemTheme((sys) => {
      applyTheme(sys);
      setTheme(sys);
    });

    return () => {
      window.removeEventListener("storage", onStorage);
      unwatch();
    };
  }, []);

  const toggle = () => {
    const next: Theme = (theme ?? readDomTheme()) === "dark" ? "light" : "dark";
    applyTheme(next);
    persistTheme(next);
    setTheme(next);
  };

  const dark = theme === "dark";
  const label = theme === null ? "Toggle theme" : dark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      onClick={toggle}
      aria-label={label}
      aria-pressed={dark}
      title={dark ? "Light mode" : "Dark mode"}
      suppressHydrationWarning
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-elevated text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none"
    >
      <Sun
        className={`h-4 w-4 transition-all duration-300 ${
          dark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-300 ${
          dark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
        }`}
      />
    </button>
  );
}
