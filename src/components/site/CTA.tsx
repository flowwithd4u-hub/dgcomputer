import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA({
  title = "Ready to revive your tech?",
  subtitle = "Book a free diagnostic. Most repairs completed within 24 hours.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-foreground p-10 text-background md:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-glow/40 blur-3xl" />
            <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-cyan-glow/20 blur-3xl" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-background/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-background/70">
                  <Sparkles className="h-3 w-3" /> Same-day service
                </div>
                <h3 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                  {title}
                </h3>
                <p className="mt-4 max-w-md text-background/70">{subtitle}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.03]"
                >
                  Book a Repair
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-background/20 px-6 py-3.5 text-sm font-medium text-background hover:bg-background/10"
                >
                  Shop Devices
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
