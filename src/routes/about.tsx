import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhyUs } from "@/components/site/WhyUs";
import { CTA } from "@/components/site/CTA";
import pageImg from "@/assets/page-team.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Our Story & Team | D.G Computers" },
      { name: "description", content: "Founded in 2014, D.G Computers is a modern tech partner serving 5,000+ customers with master-craft repair and sales." },
      { property: "og:title", content: "About D.G Computers" },
      { property: "og:image", content: pageImg },
    ],
  }),
});

const milestones = [
  { y: "2014", t: "Workshop opens", d: "What started as a small two-bench garage workshop quickly became a trusted destination for honest computer and laptop repair services. D.G Computers began with one clear mission."},
  { y: "2017", t: "5,000th repair", d: "After years of consistent service and customer satisfaction, we proudly crossed more than 5,000 successful device repairs across laptops, desktops, workstations, and custom systems."},
  { y: "2020", t: "Online sales", d: "We expanded into online sales and digital customer support, offering curated laptops, desktops, accessories, and upgrade solutions for students, gamers, creators, and businesses."},
  { y: "2023", t: "Cleanroom", d: "To handle critical storage failures and professional recovery requirements, we launched an advanced in-house data recovery and hardware diagnostics facility. From damaged SSDs."},
  { y: "2026", t: "Award-winning", d: "Recognized among the region’s most trusted independent technology service providers, D.G Computers continues to evolve with innovation, premium customer experience."},
];

const values = [
  { t: "Craft over speed", d: "Every job, every cable. Quality is Non-Negotiable." },
  { t: "Transparency first", d: "Itemised quotes. No upselling. Honest Timelines." },
  { t: "Service that delights", d: "Doorstep pickup, status updates, white-glove Return." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>A Modern Technology Partner <br /><span className="italic font-light">Built For People Who Care How Things Work.</span></>}
        subtitle="We exist for the spreadsheet warrior, the indie game dev, the photographer racing a deadline. We treat every machine like it matters because to its owner, it does. Founded in 2014, D.G Computers is a modern tech partner serving 5,000+ customers with master-craft repair and sales."
        image={pageImg}
        imageAlt="Team of D.G Computers engineers at workstations"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-3">
          {[
            { k: "Founded", v: "2014" },
            { k: "Certified engineers", v: "13" },
            { k: "Avg. Repair Turnaround", v: "< 24 Hrs" },
          ].map((s) => (
            <Reveal key={s.k}>
              <div className="border-t border-border pt-5">
                <div className="text-3xl font-semibold tracking-tight md:text-4xl">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.k}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WhyUs />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Timeline</span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
              A Decade Of Careful Work.
            </h2>
          </Reveal>
          <ol className="relative mt-14 border-l border-border pl-8">
            {milestones.map((m, i) => (
              <Reveal key={m.y} delay={i * 0.05}>
                <li className="relative mb-10 last:mb-0">
                  <span className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
                  </span>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{m.y}</div>
                  <h3 className="mt-1 text-2xl font-medium tracking-tight">{m.t}</h3>
                  <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">{m.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Values</span>
            <h2 className="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
              What We Hold Onto, Even When It's Hard.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-border bg-surface-elevated p-8">
                  <div className="text-5xl font-light text-cyan-glow">0{i + 1}</div>
                  <h3 className="mt-5 text-xl font-medium tracking-tight">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
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
