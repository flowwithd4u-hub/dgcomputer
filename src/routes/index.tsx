import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "D.G Computers — Buy · Sell · Repair · Upgrade" },
      {
        name: "description",
        content:
          "Premium laptop & computer sales, purchase, repair and upgrade services. Same-day diagnostics, certified technicians, 90-day warranty.",
      },
      { property: "og:title", content: "D.G Computers — Premium Computer Solutions" },
      {
        property: "og:description",
        content:
          "Professional laptop & desktop repair, sales, upgrades and data recovery. Trusted by 5,000+ customers.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <WhyUs />
      <Process />
      <Testimonials />
      <About />
      <CTA />
    </>
  );
}
