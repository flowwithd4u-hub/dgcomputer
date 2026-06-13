import {
  Zap,
  ShieldCheck,
  BadgeDollarSign,
  BadgeCheck,
  FileBadge,
  ScanLine,
} from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Zap,
    title: "Lightning-fast service",
    desc: "Most repairs completed the same day. Express tier in under 4 hours. We prioritize speed without sacrificing quality, so you can get back to work or play as quickly as possible.",
  },
  {
    icon: ShieldCheck,
    title: "Certified technicians",
    desc: "Manufacturer-trained engineers across Apple, Dell, HP, Lenovo & more. Expert diagnostics and repairs with precision tools and techniques.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent pricing",
    desc: "Upfront quotes before any work. No surprises, ever. We provide clear, itemized estimates for parts and labor so you can make informed decisions with confidence.",
  },
  {
    icon: BadgeCheck,
    title: "Genuine OEM parts",
    desc: "Only original or OEM-grade components, sourced direct from vendors. We never use cheap knockoffs, so your device maintains its performance, reliability, and warranty coverage after repair.",
  },
  {
    icon: FileBadge,
    title: "90-day warranty",
    desc: "Every job backed by a written warranty on parts & labor. If anything goes wrong after service, we’ll make it right at no extra cost. Our commitment to quality means you can trust our repairs to last.",
  },
  {
    icon: ScanLine,
    title: "Lab-grade diagnostics",
    desc: "Modern 48-point hardware & software testing before signoff. We thoroughly evaluate every system to ensure repairs are successful and your device is fully functional before it leaves our care.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 -z-10 opacity-60 [background:radial-gradient(50%_50%_at_50%_50%,color-mix(in_oklab,var(--cyan-glow)_10%,transparent)_0%,transparent_80%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Why D.G Computer's
            </span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
              Built On Trust.
              <span className="block text-muted-foreground">Trust Built With Work</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
              Six Promises We Live By — The Difference Between A Repair Professional And A Tech Partner.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.04}>
              <div className="group relative h-full bg-surface-elevated p-8 transition-colors hover:bg-surface">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 text-cyan-glow transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:bg-cyan-glow/15">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-tight">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                <div className="mt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
                  0{i + 1} / 06
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
