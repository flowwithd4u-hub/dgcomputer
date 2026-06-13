import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
};

export function HorizontalScroller({ children, ariaLabel, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-scroll-item]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={ref}
        aria-label={ariaLabel}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingInline: "1rem" }}
      >
        {children}
      </div>

      <div className="mt-4 flex items-center gap-4 px-4">
        <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-border">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-foreground transition-[width] duration-300"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            aria-label="Scroll left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated transition-all hover:bg-accent disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            aria-label="Scroll right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated transition-all hover:bg-accent disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
