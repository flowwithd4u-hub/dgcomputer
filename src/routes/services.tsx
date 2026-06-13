import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import pageImg from "@/assets/page-services.jpg";
import {
  Laptop, Monitor, ShoppingBag, Repeat, Cpu, HardDrive,
  Settings2, Headphones, ShieldCheck, Wifi, BatteryCharging, Wrench,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Laptop & Computer Repair | D.G Computers" },
      {
        name: "description",
        content:
          "Full-spectrum tech services: laptop & desktop repair, hardware upgrades, data recovery, OS installs, and accessories. Certified engineers, 90-day warranty.",
      },
      { property: "og:title", content: "Services — D.G Computers" },
      { property: "og:description", content: "Premium repair, upgrades and tech services." },
      { property: "og:image", content: pageImg },
    ],
  }),
});

const all = [
  { icon: Laptop, title: "Laptop Repair", desc: "Screen, keyboard, hinge, battery, motherboard. Full diagnostics and precision repair." },
  { icon: Monitor, title: "Desktop Repair", desc: "Full diagnostics to component-level restoration." },
  { icon: Cpu, title: "Hardware Upgrades", desc: "RAM, SSD, GPU, CPU coolers — installed & benchmarked."},
  { icon: HardDrive, title: "Data Recovery", desc: "Cleanroom-grade recovery for HDD & SSD failures."},
  { icon: Settings2, title: "Software & OS", desc: "Windows / macOS installs, drivers, productivity suites."},
  { icon: ShoppingBag, title: "Buy New Devices", desc: "Curated laptops & desktops shipped within 24 hrs."},
  { icon: Repeat, title: "Sell / Trade-in", desc: "Fair valuations, instant payouts on eligible devices."},
  { icon: ShieldCheck, title: "Virus Removal", desc: "Deep-clean malware, ransomware & spyware."},
  { icon: Wifi, title: "Networking", desc: "Home & SMB wifi, mesh, NAS and printer setups."},
  { icon: BatteryCharging, title: "Battery Replacement", desc: "OEM-grade batteries for laptops & ultrabooks."},
  { icon: Wrench, title: "Liquid Damage", desc: "Ultrasonic board cleaning and component repair."},
  { icon: Headphones, title: "Accessories", desc: "Premium peripherals fitted to your workflow."},
];

const tiers = [
  {
    name: "Express Care",
    price: "₹999",
    desc: "Fast diagnostics & essential repair solutions for quick issue resolution and same-day support.",
    points: [
      "Complete device inspection & diagnostics",
      "Minor hardware and software fixes",
      "Same-day repair support for eligible devices",
      "Thermal cleaning & performance optimization",
      "30-day service warranty coverage",
      "Optional pickup & doorstep delivery"
    ],
    featured: false
  },

  {
    name: "Standard Care",
    price: "₹2,999",
    desc: "Advanced component-level repair and performance restoration for laptops, desktops, and workstations.",
    points: [
      "Advanced motherboard & hardware diagnostics",
      "Component-level repair & replacement support",
      "SSD, RAM, battery & cooling upgrades",
      "Operating system optimization & setup",
      "48-hour priority turnaround service",
      "90-day repair warranty protection",
      "Free pickup & drop service included"
    ],
    featured: true
  },

  {
    name: "Pro Care",
    price: "₹5,999 / Year",
    desc: "Premium annual protection plan with priority support, maintenance, and long-term device care.",
    points: [
      "Unlimited diagnostics & technical consultations",
      "Priority repair queue & express support",
      "Preventive maintenance & deep cleaning",
      "Advanced security, backup & optimization",
      "Special discounts on parts & upgrades",
      "Dedicated customer assistance",
      "Annual performance health checkups"
    ],
    featured: false
  }
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything your machine needs.<br /><span className="italic font-light">In one trusted place.</span></>}
        subtitle="From a cracked screen to a custom water-cooled rig — our certified engineers handle it with precision, transparency and a 90-day warranty on every job."
        image={pageImg}
        imageAlt="Premium laptop floating in cinematic backdrop"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {all.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.03}>
                <div className="group relative h-full bg-surface-elevated p-7 transition-colors hover:bg-surface">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                       <span className="text-foreground">{s.from}</span>
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Care plans</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                Transparent Pricing. Zero Surprises.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div
                  className={`relative h-full overflow-hidden rounded-3xl border p-8 ${
                    t.featured
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-surface-elevated"
                  }`}
                >
                  {t.featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-cyan-glow/90 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground">
                      Most chosen
                    </span>
                  )}
                  <div className="text-sm uppercase tracking-[0.18em] opacity-70">{t.name}</div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-5xl font-semibold tracking-tight">{t.price}</span>
                  </div>
                  <p className="mt-2 text-sm opacity-80">{t.desc}</p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
