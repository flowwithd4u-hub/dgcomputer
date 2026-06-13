import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import { Star, Quote } from "lucide-react";
import pageImg from "@/assets/page-store.jpg";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Reviews — Trusted by 5,000+ customers | D.G Computers" },
      { name: "description", content: "Read what 5,000+ customers say about our laptop & computer repair, sales and upgrade services." },
      { property: "og:title", content: "Reviews — D.G Computers" },
      { property: "og:image", content: pageImg },
    ],
  }),
});

const reviews = [
  { name: "Aarav Patel", role: "Architect", quote: "Recovered my entire project drive in under a day. Incredible craftsmanship — felt like the Apple Store, but personal.", rating: 5 },
  { name: "Sara Khan", role: "Photographer", quote: "Upgraded my workstation with genuine parts. It feels brand new — faster, even. They cable-managed it like art.", rating: 5 },
  { name: "Daniel Okafor", role: "Developer", quote: "The most premium repair experience I've had. The diagnostic report alone was worth it.", rating: 5 },
  { name: "Mei Lin", role: "Founder", quote: "Clear quote, fast turnaround, beautiful follow-up. D.G is my default IT now.", rating: 5 },
  { name: "Lukas Weber", role: "Music producer", quote: "Custom-built a silent PC for my studio. Whisper quiet, monstrously fast.", rating: 5 },
  { name: "Priya Raman", role: "Lawyer", quote: "Door pickup, returned the next day, fully encrypted. Felt taken care of.", rating: 5 },
];

const stats = [
  { v: "4.9 / 5", l: "Average rating" },
  { v: "5,000+", l: "Verified reviews" },
  { v: "98%", l: "Would recommend" },
  { v: "<2 hrs", l: "Response time" },
];

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title={<>Trusted. Reviewed.<br /><span className="italic font-light">Recommended.</span></>}
        subtitle="Five years of five-star reviews. Read what makers, founders and creators say about working with us."
        image={pageImg}
        imageAlt="Premium D.G Computers store interior"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05}>
              <div className="rounded-3xl border border-border bg-surface-elevated p-6 text-center">
                <div className="text-3xl font-semibold tracking-tight md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.04}>
                <figure className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border glass p-7 hover-lift">
                  <Quote className="absolute right-5 top-5 h-8 w-8 text-cyan-glow/30" />
                  <div className="flex items-center gap-1 text-cyan-glow">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-balance text-base leading-relaxed">
                    "{r.quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                      {r.name[0]}
                    </span>
                    <div>
                      <div className="text-sm font-medium">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Add your story to the wall." subtitle="Bring us a tricky problem. We'll earn the next five stars." />
    </>
  );
}
