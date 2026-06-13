import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { HorizontalScroller } from "@/components/site/HorizontalScroller";
import { ProductCard } from "@/components/site/ProductCard";
import { CTA } from "@/components/site/CTA";
import { ShieldCheck, Truck, RotateCcw, Wrench, ArrowRight } from "lucide-react";
import type { Category } from "@/lib/products-data";
import { categories } from "@/lib/products-data";

const perks = [
  { icon: ShieldCheck, t: "2-year warranty", s: "Bench-tested before shipping" },
  { icon: Truck, t: "Free express shipping", s: "Next-day across major cities" },
  { icon: RotateCcw, t: "30-day returns", s: "No questions, no restocking" },
  { icon: Wrench, t: "Lifetime tech support", s: "Real engineers on call" },
];

export function CategoryPage({ category }: { category: Category }) {
  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <main>
      <PageHero
        eyebrow={category.label}
        title={
          <>
            {category.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="font-light italic">{category.title.split(" ").slice(-1)}</span>
          </>
        }
        subtitle={category.description}
        image={category.hero}
        imageAlt={`${category.label} hero`}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
        ]}
      />

      {/* Featured gallery — horizontal scroller */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 flex items-end justify-between px-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">01 — Featured collection</p>
                <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                  This month's flagships.
                </h2>
              </div>
              <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
                Drag, swipe or use the arrows — every model below is in stock and ready to ship.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <HorizontalScroller ariaLabel={`${category.label} featured`}>
              {category.products.map((p) => (
                <ProductCard key={p.id} product={p} size="lg" />
              ))}
            </HorizontalScroller>
          </Reveal>
        </div>
      </section>

      {/* Full grid */}
      <section className="relative border-t border-border bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">02 — The whole shelf</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Every {category.label.toLowerCase()} we stand behind.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((p, i) => (
              <Reveal key={`grid-${p.id}`} delay={i * 0.05}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className="rounded-3xl border border-border bg-surface-elevated p-6">
                <p.icon className="h-5 w-5 text-cyan-glow" />
                <p className="mt-5 text-sm font-medium">{p.t}</p>
                <p className="mt-1 text-xs text-muted-foreground">{p.s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other categories */}
      <section className="border-t border-border bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Keep exploring.</h2>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">
                All categories →
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/products/${c.slug}` as string}
                className="group relative block overflow-hidden rounded-3xl border border-border bg-surface-elevated"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={c.hero}
                    alt={c.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${c.accent}`} />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Category</p>
                    <p className="text-base font-medium">{c.label}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
