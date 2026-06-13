import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { k: "Founded", v: "2014" },
  { k: "Certified engineers", v: "24" },
  { k: "Avg. repair turnaround", v: "< 24 hrs" },
  { k: "Cities served", v: "12" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1] tracking-[-0.035em] md:text-7xl">
            A modern technology partner —
            <span className="text-muted-foreground">
              {" "}built for people who care how things work.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            For over a decade, D.G Computers has helped thousands of professionals, gamers,
            students and businesses get more from the machines they rely on every day. From
            in-warranty Apple repairs to bespoke workstation builds — every device is treated
            with the same craft and care.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.k} delay={0.05 * i}>
              <div className="border-t border-border pt-5">
                <div className="text-3xl font-semibold tracking-tight md:text-4xl">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.k}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              Read our story
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
