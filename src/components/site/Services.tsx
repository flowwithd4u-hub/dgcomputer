import {
  Laptop,
  Monitor,
  ShoppingBag,
  Repeat,
  Cpu,
  HardDrive,
  Settings2,
  Headphones,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Laptop,
    title: "Laptop Repair",
    desc: "Screens, keyboards, batteries, hinges, charging ports, and motherboard-level repairs handled with precision diagnostics and premium replacement components.",
    eta: "Same day",
  },
  {
    icon: Monitor,
    title: "Desktop Repair",
    desc: "Advanced desktop diagnostics, hardware troubleshooting, system optimization, and full restoration services for gaming PCs, office systems.",
    eta: "24 – 48 hrs",
  },
  {
    icon: ShoppingBag,
    title: "Buy New Devices",
    desc: "Explore a curated lineup of premium laptops, desktops, gaming systems, business workstations, and creator-focused machines from  the trusted brands.",
    eta: "In stock",
  },
  {
    icon: Repeat,
    title: "Sell / Trade-in",
    desc: "Upgrade smarter with fast and transparent device trade-ins for laptops, desktops, GPUs, and accessories. Receive fair market valuations, instant assessments, secure data wiping.",
    eta: "Instant",
  },
  {
    icon: Cpu,
    title: "Hardware Upgrades",
    desc: "Boost your system performance with professional RAM, NVMe SSD, GPU, processor, cooling, and thermal optimization upgrades for laptops and desktops.",
    eta: "From 1 hr",
  },
  {
    icon: HardDrive,
    title: "Data Recovery",
    desc: "Professional-grade data recovery solutions for failed hard drives, SSDs, corrupted systems, accidental deletions, and damaged storage devices.",
    eta: "48 – 72 hrs",
  },
  {
    icon: Settings2,
    title: "Software & Setup",
    desc: "Complete operating system installation, driver configuration, software activation, virus cleanup, and productivity suite setup for personal and business systems.",
    eta: "Same day",
  },
  {
    icon: Headphones,
    title: "Accessories",
    desc: "Premium accessories and peripherals including keyboards, gaming mice, monitors, headphones, webcams, docking stations, cooling solutions, storage devices.",
    eta: "In stock",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Services
              </span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
                Everything Your Machine Needs.
                <span className="block text-muted-foreground">Is One Trusted Place.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              All services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-elevated p-6 hover-lift">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-glow/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-glow/30" />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {s.eta}
                  </span>
                </div>
                <h3 className="relative mt-5 text-lg font-medium tracking-tight">{s.title}</h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <div className="relative mt-5 flex items-center gap-1.5 text-xs font-medium text-foreground/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
