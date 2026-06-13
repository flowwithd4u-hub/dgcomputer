import { Reveal } from "./Reveal";
import gaming from "@/assets/product-gaming.jpg";
import business from "@/assets/product-business.jpg";
import pc from "@/assets/product-pc.jpg";
import accessories from "@/assets/product-accessories.jpg";

const products = [
  { img: gaming, tag: "Business", title: "Dell Latitute 3420", price: "From Rs.19990/-" },
  { img: business, tag: "Business Professional", title: "HP EliteBook 840 G6", price: "From Rs.18999/-" },
  { img: pc, tag: "Working Professional", title: "Dell 5400", price: "From Rs.16500/-" },
  { img: accessories, tag: "Professional", title: "Dell 7490", price: "From Rs.17999/-" },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Featured</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
                Hand-picked machines.
                <span className="block text-muted-foreground">Ready to perform.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Each device is bench-tested, certified and shipped with a warranty.
            </p>
          </div>
        </Reveal>

        <div className="-mx-4 mt-12 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-5 pb-4 md:gap-6">
            {products.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <article className="group relative w-[78vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-surface-elevated sm:w-[420px]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={p.img}
                      alt={`${p.tag} — ${p.title}`}
                      width={1200}
                      height={1200}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground">
                      {p.tag}
                    </span>
                    <div className="absolute inset-x-5 bottom-5 text-white">
                      <h3 className="text-balance text-xl font-medium tracking-tight md:text-2xl">{p.title}</h3>
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span className="opacity-80">{p.price}</span>
                        <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur-md">Explore →</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
