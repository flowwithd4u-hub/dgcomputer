import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ — Repair, Warranty & Pricing | D.G Computers" },
      { name: "description", content: "Answers to common questions about repairs, turnaround times, warranty, data privacy and sales." },
      { property: "og:title", content: "FAQ — D.G Computers" },
    ],
  }),
});

const faqs = [
  { q: "How long does a typical repair take?", a: "Most diagnostics complete same-day. Standard repairs (screens, batteries, SSDs) finish within 24 hours. Complex motherboard and liquid-damage cases take 48–72 hours." },
  { q: "Do you offer a warranty?", a: "Yes — every repair includes a 90-day parts & labour warranty. New devices ship with full manufacturer warranty plus our extended care option." },
  { q: "Is my data safe with you?", a: "Always. All technicians sign NDAs, devices are stored in locked bays, and we never access user files without explicit written consent." },
  { q: "Do you use genuine OEM parts?", a: "Yes — we exclusively use OEM or OEM-grade components, sourced from authorised distributors. Each part is traceable by serial number." },
  { q: "Can you pick up my device?", a: "We offer free pickup and drop within the city for repairs over $99. Outside the city we partner with insured couriers." },
  { q: "Do you buy old laptops?", a: "Yes — share a few photos and specs and we'll send a fair valuation within an hour. Instant payout on accepted devices." },
  { q: "What payment methods are accepted?", a: "All major cards, Apple Pay, Google Pay, bank transfer, and split-pay options for orders above $499." },
  { q: "Can you build a custom PC for me?", a: "Absolutely. Our concierge walks you through every component, runs benchmarks, and ships a fully tested rig in 7–10 days." },
];

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Questions, answered<br /><span className="italic font-light">honestly.</span></>}
        subtitle="The clearest answers we can give. If something's missing, message us — we'll add it here."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-3xl border border-border bg-surface-elevated divide-y divide-border">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.03}>
                <FAQItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Still got a question?" subtitle="Our concierge replies within the hour during business days." />
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className="flex w-full items-start justify-between gap-6 p-6 text-left transition-colors hover:bg-surface md:p-7"
    >
      <div className="flex-1">
        <h3 className="text-base font-medium tracking-tight md:text-lg">{q}</h3>
        <div
          className={`grid transition-all duration-500 ${
            open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="overflow-hidden text-sm text-muted-foreground">{a}</p>
        </div>
      </div>
      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background">
        {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
