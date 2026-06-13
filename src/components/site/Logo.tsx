import { Link } from "@tanstack/react-router";
import iconMark from "@/assets/brand/dg-icon.png";

export function Logo({ size = 32, showWordmark = true }: { size?: number; showWordmark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span
        className="relative flex items-center justify-center overflow-hidden rounded-xl bg-surface-elevated ring-1 ring-border"
        style={{ width: size, height: size }}
      >
        <img
          src={iconMark}
          alt="D.G Computers"
          className="h-full w-full object-contain p-0.5 transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-tight">D.G Computers</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Buy · Sell · Repair
          </span>
        </span>
      )}
    </Link>
  );
}
