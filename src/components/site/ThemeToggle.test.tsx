import { describe, it, expect, beforeEach } from "vitest";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import { act } from "@testing-library/react";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { THEME_INIT_SCRIPT, THEME_STORAGE_KEY } from "@/lib/theme";

// Hydration regression guard: the toggle's SSR markup must match the first
// client render in both light and dark initial states. The setup.ts file
// converts any React hydration warning into a thrown error.

describe("ThemeToggle hydration", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
    document.documentElement.style.colorScheme = "";
    document.body.innerHTML = "";
  });

  for (const initial of ["light", "dark"] as const) {
    it(`hydrates cleanly when initial theme is ${initial}`, async () => {
      localStorage.setItem(THEME_STORAGE_KEY, initial);
      // Run the inline boot script exactly as the browser would.
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      new Function(THEME_INIT_SCRIPT)();

      const ssr = renderToString(<ThemeToggle />);
      const container = document.createElement("div");
      container.innerHTML = ssr;
      document.body.appendChild(container);

      await act(async () => {
        hydrateRoot(container, <ThemeToggle />);
      });

      expect(container.querySelector("button")).toBeTruthy();
      // After hydration the root reflects the persisted theme.
      expect(document.documentElement.classList.contains("dark")).toBe(initial === "dark");
    });
  }
});
