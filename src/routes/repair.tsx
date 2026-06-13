import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Process } from "@/components/site/Process";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import pageImg from "@/assets/page-repair.jpg";
import { Wrench, Cpu, HardDrive, Droplets, ScanLine, Smartphone } from "lucide-react";

export const Route = createFileRoute("/repair")({
  component: RepairPage,
  head: () => ({
    meta: [
      { title: "Repair — Same-day Laptop & Computer Repair | D.G Computers" },
      { name: "description", content: "Certified repair lab. 48-point quality check, 90-day warranty, transparent pricing." },
      { property: "og:title", content: "Repair Lab — D.G Computers" },
      { property: "og:image", content: pageImg },
    ],
  }),
});

const issues = [
  { icon: Wrench, title: "Cracked screen", t: "1–2 hrs", },
  { icon: Cpu, title: "Motherboard failure", t: "24–72 hrs",  },
  { icon: HardDrive, title: "Storage / boot issues", t: "Same-day", },
  { icon: Droplets, title: "Liquid damage", t: "48 hrs",  },
  { icon: ScanLine, title: "Overheating / fan", t: "Same-day", },
  { icon: Smartphone, title: "Battery replacement", t: "1 hr", },
];

function RepairPage() {
  return (
    <>
      <PageHero
        eyebrow="Repair Lab"
        title={<>Precision diagnostics.<br /><span className="italic font-light">Honest repair.</span></>}
        subtitle="A bench-grade workflow refined across 10,000+ jobs. Every device passes a 48-point checklist before signoff."
        image={pageImg}
        imageAlt="Technician working on a motherboard with cyan glow"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                Common issues we fix.
              </h2>
              <p className="max-w-sm text-sm text-muted-foreground">
                Indicative pricing — final quote shared after free diagnostic.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.04}>
                <div className="group flex h-full items-start justify-between rounded-3xl border border-border bg-surface-elevated p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background">
                      <it.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-medium tracking-tight">{it.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">Turnaround · {it.t}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 text-xs">{it.from}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CTA title="Your machine deserves a master's touch." subtitle="Book a free diagnostic. We'll meet you at your door." />
    </>
  );
}
