import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// Fail any test that emits a React hydration warning. React logs hydration
// mismatches via console.error with messages containing "Hydration" /
// "did not match". Surfacing them as thrown errors prevents silent regressions
// in our theme/SSR plumbing.
const HYDRATION_PATTERNS = [
  /hydrat/i,
  /did not match/i,
  /server rendered HTML/i,
  /Text content does not match/i,
];

const origError = console.error;
console.error = (...args: unknown[]) => {
  const msg = args.map((a) => (typeof a === "string" ? a : "")).join(" ");
  if (HYDRATION_PATTERNS.some((p) => p.test(msg))) {
    throw new Error(`Hydration warning detected: ${msg}`);
  }
  origError(...args);
};

// jsdom doesn't implement matchMedia by default.
if (!window.matchMedia) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  });
}

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.className = "";
  document.documentElement.style.colorScheme = "";
});
