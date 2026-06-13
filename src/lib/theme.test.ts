import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  resolveInitialTheme,
  applyTheme,
  persistTheme,
  getStoredTheme,
  watchSystemTheme,
  THEME_INIT_SCRIPT,
  THEME_STORAGE_KEY,
} from "@/lib/theme";

function setSystemDark(matches: boolean) {
  const listeners = new Set<(e: MediaQueryListEvent) => void>();
  const mql = {
    matches,
    media: "(prefers-color-scheme: dark)",
    addEventListener: (_: string, cb: (e: MediaQueryListEvent) => void) => listeners.add(cb),
    removeEventListener: (_: string, cb: (e: MediaQueryListEvent) => void) => listeners.delete(cb),
    dispatchEvent: () => true,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  };
  (window as unknown as { matchMedia: (q: string) => typeof mql }).matchMedia = () => mql;
  return {
    fire: (next: boolean) => {
      mql.matches = next;
      listeners.forEach((l) => l({ matches: next } as MediaQueryListEvent));
    },
  };
}

describe("theme", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
    document.documentElement.style.colorScheme = "";
  });

  it("falls back to system preference when nothing stored", () => {
    setSystemDark(true);
    expect(resolveInitialTheme()).toBe("dark");
    setSystemDark(false);
    expect(resolveInitialTheme()).toBe("light");
  });

  it("honors stored preference over system", () => {
    setSystemDark(true);
    persistTheme("light");
    expect(resolveInitialTheme()).toBe("light");
  });

  it("applyTheme writes class, color-scheme and data attribute", () => {
    applyTheme("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.documentElement.style.colorScheme).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");

    applyTheme("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(document.documentElement.style.colorScheme).toBe("light");
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("watchSystemTheme only fires when no stored preference", () => {
    const sys = setSystemDark(false);
    const cb = vi.fn();
    const unwatch = watchSystemTheme(cb);

    sys.fire(true);
    expect(cb).toHaveBeenCalledWith("dark");

    persistTheme("light");
    cb.mockClear();
    sys.fire(false);
    expect(cb).not.toHaveBeenCalled();

    unwatch();
  });

  it("getStoredTheme ignores invalid values", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "purple");
    expect(getStoredTheme()).toBeNull();
  });

  it("THEME_INIT_SCRIPT applies the resolved theme synchronously", () => {
    setSystemDark(true);
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    new Function(THEME_INIT_SCRIPT)();
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.documentElement.style.colorScheme).toBe("dark");
  });

  it("THEME_INIT_SCRIPT respects stored light over dark system", () => {
    setSystemDark(true);
    localStorage.setItem(THEME_STORAGE_KEY, "light");
    new Function(THEME_INIT_SCRIPT)();
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
