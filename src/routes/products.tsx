import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import { HorizontalScroller } from "@/components/site/HorizontalScroller";
import { ProductCard } from "@/components/site/ProductCard";
import { Cpu, MemoryStick, HardDrive, Gauge, ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/products-data";

import gaming from "@/assets/product-gaming.jpg";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Products — Laptops, Custom PCs & Accessories | D.G Computers" },
      {
        name: "description",
        content:
          "Hand-picked gaming laptops, business ultrabooks, custom-built PCs and premium accessories. Every device bench-tested, every spec verified, every box warrantied.",
      },
      { property: "og:title", content: "Products — D.G Computers" },
      {
        property: "og:description",
        content: "Bench-tested machines. Concierge configuration. Lifetime support.",
      },
      { property: "og:image", content: gaming },
    ],
  }),
});

const configurator = [
  { icon: Cpu, label: "Processor", value: "Intel Core Ultra 9 / AMD Ryzen 9" },
  { icon: MemoryStick, label: "Memory", value: "16 GB → 128 GB DDR5" },
  { icon: HardDrive, label: "Storage", value: "1 TB → 8 TB NVMe Gen5" },
  { icon: Gauge, label: "Graphics", value: "RTX 4060 → 4090 / Radeon 7900" },
];

function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Hand-picked machines.
            <br />
            <span className="font-light italic">Ready to perform.</span>
          </>
        }
        subtitle="Each device is bench-tested, calibrated, and shipped with a warranty. Build your dream rig with our concierge."
        image={gaming}
        imageAlt="Premium gaming laptop with RGB"
      />

      {/* Category quick-nav */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-5">
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Shop by</span>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/products/${c.slug}` as string}
              className="rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-xs font-medium transition-colors hover:bg-accent"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Per-category horizontal galleries */}
      {categories.map((c, idx) => (
        <section
          key={c.slug}
          className={`relative py-16 md:py-24 ${idx % 2 === 1 ? "bg-surface border-y border-border" : ""}`}
        >
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-10 flex items-end justify-between gap-6 px-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")} — {c.label}
                  </p>
                  <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                    {c.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm text-muted-foreground">{c.description}</p>
                </div>
                <Link
                  to={`/products/${c.slug}` as string}
                  className="hidden shrink-0 items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.04] md:inline-flex"
                >
                  View all {c.label.toLowerCase()}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal>
              <HorizontalScroller ariaLabel={`${c.label} products`}>
                {c.products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </HorizontalScroller>
            </Reveal>

            <div className="mt-6 px-4 md:hidden">
              <Link
                to={`/products/${c.slug}` as string}
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background"
              >
                View all {c.label.toLowerCase()}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Configurator */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Configurator</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                Build a machine,
                <br /> the way you'd build a dream.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {configurator.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-surface-elevated p-6">
                  <c.icon className="h-5 w-5 text-cyan-glow" />
                  <div className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.label}</div>
                  <div className="mt-1 text-sm font-medium tracking-tight">{c.value}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Tell us what you build for."
        subtitle="Our concierge configures a machine in 24 hours, delivered to your door."
      />
    </main>
  );
}
