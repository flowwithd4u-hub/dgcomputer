import { Star, ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products-data";

export function ProductCard({ product, size = "md" }: { product: Product; size?: "md" | "lg" }) {
  const width = size === "lg" ? "w-[86vw] sm:w-[440px] md:w-[520px]" : "w-[80vw] sm:w-[360px] md:w-[400px]";

  return (
    <article
      data-scroll-item
      className={`group relative shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-surface-elevated transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant ${width}`}
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-surface">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em]">
            {product.badge}
          </span>
        )}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full glass-strong px-2.5 py-1 text-[11px] font-medium">
          <Star className="h-3 w-3 fill-current text-cyan-glow" />
          {product.rating.toFixed(1)}
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-2.5 border-y border-border py-4 text-[12px]">
          {product.specs.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{s.label}</dt>
              <dd className="mt-0.5 font-medium tracking-tight">{s.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold tracking-tight">{product.price}</span>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.04]">
            Configure
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
