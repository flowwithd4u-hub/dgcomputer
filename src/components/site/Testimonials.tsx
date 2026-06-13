import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Aarav Patel",
    role: "Architect",
    quote:
      "Recovered my entire project drive in under a day. Incredible craftsmanship — they even cleaned the chassis. Highly recommend.",
    device: "MacBook Pro 16\"",
  },
  {
    name: "Sara Khan",
    role: "Photographer",
    quote:
      "Upgraded my workstation with genuine parts. It feels brand new — faster, even. Worth every penny. Highly recommend.",
    device: "Custom Editing Rig",
  },
  {
    name: "Danish Sharma",
    role: "Developer",
    quote:
      "The most premium repair experience I've had. Apple-store level service with real human warmth. Highly recommend.",
    device: "ThinkPad X1 Carbon",
  },
  {
    name: "Atul Kumar",
    role: "Motion Engineer",
    quote:
      "Clear quote, fast turnaround, beautiful follow-up. D.G is my default for the whole team now. They just get it.",
    device: "5× MacBook Air M3",
  },
];

const summary = [
  { v: "4.9", l: "Average rating" },
  { v: "1,200+", l: "Verified reviews" },
  { v: "98%", l: "Would recommend" },
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Loved By 5,000+ customers
            </span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
              Trusted. Reviewed.
              <span className="block text-muted-foreground">Recommended.</span>
            </h2>
          </div>
        </Reveal>

        {/* Summary bar */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-border bg-surface-elevated/60 px-6 py-5">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-sm font-medium">Excellent</span>
            </div>
            {summary.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-lg font-semibold tracking-tight">{s.v}</div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.06}>
              <figure className="relative h-full overflow-hidden rounded-3xl border border-border glass p-8 hover-lift">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-cyan-glow/20" />
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-balance text-lg leading-relaxed tracking-tight md:text-xl">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                      {r.name[0]}
                    </span>
                    <div>
                      <div className="text-sm font-medium">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role}</div>
                    </div>
                  </div>
                  <span className="rounded-full border border-border bg-surface-elevated px-2.5 py-1 text-[11px] text-muted-foreground">
                    {r.device}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
