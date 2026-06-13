import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Book a Repair | D.G Computers" },
      { name: "description", content: "Get in touch. Call, WhatsApp, email or visit our store. Response within an hour during business hours." },
      { property: "og:title", content: "Contact — D.G Computers" },
      { property: "og:description", content: "Book a free diagnostic or visit our store." },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's get your tech<br /><span className="italic font-light">working like new.</span></>}
        subtitle="Drop your details and we'll respond within an hour during business hours. Walk-ins always welcome."
      />
      <Contact />
    </>
  );
}
