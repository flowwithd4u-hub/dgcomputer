import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowUp,
  ShoppingCart,
  Wrench,
  HardDrive,
  MemoryStick,
  BatteryCharging,
  Keyboard,
  Monitor,
  Cpu,
  Download,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  Zap,
  Headphones,
  Star,
  Laptop2,
  Code2,
  Film,
  Music2,
  PiggyBank,
  ChevronRight,
} from "lucide-react";

import heroLaptop from "@/assets/hero-laptop.jpg";
import dellImg from "@/assets/dell-latitude.jpg";
import hpImg from "@/assets/hp-elitebook.jpg";
import lenovoImg from "@/assets/lenovo-thinkpad.jpg";

const PHONE = "+91 9050145696";
const PHONE_TEL = "tel:+919050145696";
const WHATSAPP = "https://wa.me/919050145696";
const EMAIL = "dgcomputer4u@gmail.com";
const ADDRESS = "Shop No. 1, Jagdish Colony, BLB, FBD, Haryana – 121004";

const waLink = (msg: string) =>
  `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DG Computer | Laptop Sale Purchase Repair in Ballabgarh Faridabad" },
      {
        name: "description",
        content:
          "Buy quality refurbished laptops and get expert laptop repair services in Ballabgarh Faridabad. Sales, purchase, upgrades, SSD installation, RAM upgrades and technical support.",
      },
      { property: "og:title", content: "DG Computer | Laptop Sale Purchase Repair in Ballabgarh Faridabad" },
      {
        property: "og:description",
        content:
          "Quality refurbished laptops, expert repair services, upgrades and technical support in Ballabgarh, Faridabad.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedLaptops />
        <Recommendations />
        <Trust />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <BackToTop />
    </div>
  );
}

/* ----------------------------- Header ----------------------------- */

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#laptops", label: "Laptops" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-surface/90 backdrop-blur border-b border-border shadow-soft"
          : "bg-surface/70 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Laptop2 className="h-5 w-5" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-base font-bold">DG Computer</span>
            <span className="truncate text-[11px] text-muted-foreground">Sale • Purchase • Repair</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={PHONE_TEL} className="btn-ghost">
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href={waLink("Hi DG Computer, I'd like to enquire about your services.")}
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href={PHONE_TEL} className="btn-ghost justify-center">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={waLink("Hi DG Computer, I'd like to enquire.")}
                target="_blank"
                rel="noopener"
                className="btn-primary justify-center"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------ Hero ------------------------------ */

function Hero() {
  return (
    <section id="top" className="gradient-hero relative overflow-hidden text-white">
      <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
            <Sparkles className="h-3.5 w-3.5" /> Ballabgarh • Faridabad
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            DG Computer
          </h1>
          <p className="mt-3 text-lg font-medium text-white/90 sm:text-xl">
            Trusted Laptop Sale, Purchase &amp; Repair Center
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Quality refurbished laptops, expert repair services, upgrades, and
            technical support for students, professionals, businesses,
            developers, and creators.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Hi DG Computer, I'd like to know more about your laptops and services.")}
              target="_blank"
              rel="noopener"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-5 w-5" /> Contact on WhatsApp
            </a>
            <a href={PHONE_TEL} className="btn-hero-outline">
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              { k: "500+", v: "Customers" },
              { k: "1000+", v: "Repairs" },
              { k: "100+", v: "Laptops Sold" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-bold">{s.k}</dt>
                <dd className="text-xs text-white/70">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-accent/30 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card">
            <img
              src={heroLaptop}
              alt="Premium business laptop displayed at DG Computer"
              width={1280}
              height={960}
              className="h-auto w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-4 left-4 right-4 grid grid-cols-2 gap-3 sm:left-8 sm:right-8">
            <div className="rounded-xl bg-surface/95 p-3 text-foreground shadow-card backdrop-blur">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-accent" /> Tested & Verified
              </div>
              <p className="mt-1 text-sm font-semibold">Genuine Devices</p>
            </div>
            <div className="rounded-xl bg-surface/95 p-3 text-foreground shadow-card backdrop-blur">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Zap className="h-4 w-4 text-accent" /> Same-day service
              </div>
              <p className="mt-1 text-sm font-semibold">Fast Turnaround</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ About ----------------------------- */

const aboutFeatures = [
  { icon: BadgeCheck, title: "Genuine Devices", text: "Hand-picked, tested, and verified laptops you can trust." },
  { icon: Wrench, title: "Expert Repairs", text: "Skilled technicians handling every component professionally." },
  { icon: PiggyBank, title: "Affordable Solutions", text: "Honest pricing and the right product for your budget." },
  { icon: Headphones, title: "Quick Support", text: "Friendly, prompt support before and after every purchase." },
];

function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">About Us</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Why Choose DG Computer?</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            DG Computer provides trusted laptop sales, purchase, repair, and
            upgrade services in Ballabgarh and Faridabad. We focus on quality
            products, honest guidance, affordable solutions, and customer
            satisfaction.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutFeatures.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Services ---------------------------- */

const services = [
  { icon: ShoppingCart, title: "Laptop Sale", text: "Quality refurbished laptops ready to take home." },
  { icon: HardDrive, title: "Laptop Purchase", text: "We buy your old laptop at a fair price." },
  { icon: Wrench, title: "Laptop Repair", text: "Diagnostics & repair for all major brands." },
  { icon: HardDrive, title: "SSD Upgrade", text: "Boost speed with reliable SSD upgrades." },
  { icon: MemoryStick, title: "RAM Upgrade", text: "Smoother multitasking with extra memory." },
  { icon: BatteryCharging, title: "Battery Replacement", text: "Original-grade batteries with warranty." },
  { icon: Keyboard, title: "Keyboard Repair", text: "Key replacement and full keyboard swaps." },
  { icon: Monitor, title: "Display Replacement", text: "Cracked screens replaced same-day." },
  { icon: Download, title: "Software Installation", text: "Office, design and productivity apps." },
  { icon: Cpu, title: "Windows Setup", text: "Clean Windows installation & activation." },
  { icon: Download, title: "Driver Installation", text: "Latest drivers for optimal performance." },
  { icon: Sparkles, title: "Laptop Cleaning", text: "Internal cleaning & thermal paste service." },
];

function Services() {
  return (
    <section id="services" className="section-y bg-muted/40">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Everything your laptop needs</h2>
          <p className="mt-4 text-muted-foreground">
            From sales to upgrades and repairs — one trusted destination for all
            laptop needs in Ballabgarh, Faridabad.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                  <s.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SectionCTA message="Hi DG Computer, I need a service quote." />
      </div>
    </section>
  );
}

/* ------------------------ Featured Laptops ------------------------ */

const laptops = [
  {
    name: "Dell Latitude 7490",
    img: dellImg,
    badge: "8th Gen",
    specs: ["8th Generation", "Premium Business Laptop", "Reliable Performance"],
  },
  {
    name: "Dell Latitude 3420",
    img: dellImg,
    badge: "11th Gen",
    specs: ["11th Generation", "Modern Architecture", "Faster Processing"],
  },
  {
    name: "Dell Latitude 5400",
    img: dellImg,
    badge: "8th Gen",
    specs: ["8th Generation", "Premium Build", "Balanced Performance"],
  },
  {
    name: "HP EliteBook 840 G6",
    img: hpImg,
    badge: "8th Gen",
    specs: ["8th Generation", "Premium Series", "Reliable Daily Use"],
  },
  {
    name: "HP EliteBook 840 G8",
    img: hpImg,
    badge: "11th Gen",
    specs: ["11th Generation", "EliteBook Series", "Iris Xe Graphics"],
  },
  {
    name: "Lenovo ThinkPad L440",
    img: lenovoImg,
    badge: "Basic",
    specs: ["Rugged Build", "Durable Design", "Basic Usage"],
  },
];

function FeaturedLaptops() {
  return (
    <section id="laptops" className="section-y">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Featured Laptops</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Hand-picked refurbished laptops</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Tested business-class laptops from Dell, HP, and Lenovo. Enquire on
              WhatsApp for current stock and best price.
            </p>
          </div>
          <a
            href={waLink("Hi DG Computer, please share your current laptop stock.")}
            target="_blank"
            rel="noopener"
            className="btn-ghost"
          >
            See current stock <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {laptops.map((l) => (
            <article
              key={l.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={l.img}
                  alt={l.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground">
                  {l.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold">{l.name}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {l.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hi DG Computer, I'm interested in the ${l.name}. Please share details.`)}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary mt-5 justify-center"
                >
                  <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Recommendations ------------------------ */

const recs = [
  {
    icon: Code2,
    title: "Best For Coding",
    items: ["HP EliteBook 840 G8", "Dell Latitude 3420", "Dell Latitude 5400"],
  },
  {
    icon: Film,
    title: "Best For Video Editing",
    items: ["HP EliteBook 840 G8", "Dell Latitude 3420"],
  },
  {
    icon: Music2,
    title: "Best For Music Production",
    items: ["HP EliteBook 840 G8", "Dell Latitude 3420"],
  },
  {
    icon: PiggyBank,
    title: "Best Budget Refurbished",
    items: ["Dell Latitude 5400", "HP EliteBook 840 G6", "Dell Latitude 7490"],
  },
];

function Recommendations() {
  return (
    <section id="recommendations" className="section-y bg-muted/40">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Recommendations</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Pick the right laptop for your work</h2>
          <p className="mt-4 text-muted-foreground">
            Not sure which one fits you? Here's what we recommend by use case.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recs.map((r) => (
            <div
              key={r.title}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{r.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                {r.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Note: ThinkPad L440 is recommended only for basic use.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------ Trust ----------------------------- */

function Trust() {
  const stats = [
    { k: "500+", v: "Satisfied Customers" },
    { k: "1000+", v: "Repairs Completed" },
    { k: "100+", v: "Laptops Sold" },
    { k: "Fast", v: "& Reliable Service" },
  ];
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="rounded-3xl bg-primary px-6 py-12 text-primary-foreground shadow-card sm:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v} className="text-center sm:text-left">
                <div className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {s.k}
                </div>
                <div className="mt-1 text-sm text-white/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Testimonials -------------------------- */

const testimonials = [
  {
    name: "Rahul S.",
    text: "Excellent laptop quality and professional service. Highly recommended.",
  },
  {
    name: "Priya M.",
    text: "Quick repair and affordable pricing. Got my laptop back the same day.",
  },
  {
    name: "Arun K.",
    text: "Very helpful and trustworthy team. Honest advice and great after-sales support.",
  },
];

function Testimonials() {
  return (
    <section className="section-y bg-muted/40">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Loved by our customers</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-surface p-6 shadow-soft"
            >
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Contact ---------------------------- */

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const requirement = String(data.get("requirement") || "");
    const message = String(data.get("message") || "");
    const body = `Name: ${name}%0APhone: ${phone}%0ARequirement: ${requirement}%0AMessage: ${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Enquiry from DG Computer website",
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-y">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contact</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Visit, call or message us</h2>
          <p className="mt-4 text-muted-foreground">
            We're here to help with sales, repairs and upgrades.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} title="Phone" lines={[PHONE]} href={PHONE_TEL} />
              <InfoCard icon={Mail} title="Email" lines={[EMAIL]} href={`mailto:${EMAIL}`} />
            </div>
            <InfoCard icon={MapPin} title="Address" lines={[ADDRESS]} />

            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="DG Computer location"
                src="https://www.google.com/maps?q=Jagdish+Colony+Ballabgarh+Faridabad+Haryana+121004&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-surface p-6 shadow-soft sm:p-8"
          >
            <h3 className="font-display text-xl font-semibold">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              We'll get back to you shortly.
            </p>

            <div className="mt-6 grid gap-4">
              <Field label="Name" name="name" type="text" required />
              <Field label="Phone" name="phone" type="tel" required />
              <div>
                <label htmlFor="requirement" className="text-sm font-medium">
                  Requirement
                </label>
                <select
                  id="requirement"
                  name="requirement"
                  className="mt-1.5 w-full rounded-lg border border-input bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  defaultValue="Laptop Sale"
                >
                  <option>Laptop Sale</option>
                  <option>Laptop Purchase</option>
                  <option>Laptop Repair</option>
                  <option>SSD / RAM Upgrade</option>
                  <option>Software / Windows Setup</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-input bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Tell us what you need…"
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" className="btn-primary">
                  <Mail className="h-4 w-4" /> Send Enquiry
                </button>
                <a
                  href={waLink("Hi DG Computer, I'd like to get in touch.")}
                  target="_blank"
                  rel="noopener"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>

              {sent && (
                <p className="text-xs text-success">
                  Opening your email app… If nothing happens, please WhatsApp us.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        placeholder={label}
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof Phone;
  title: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5 shadow-soft transition hover:border-accent/40">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        {lines.map((l) => (
          <div key={l} className="mt-0.5 text-sm font-medium text-foreground">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

/* ----------------------------- Footer ----------------------------- */

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
              <Laptop2 className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">DG Computer</span>
          </div>
          <p className="mt-3 text-sm text-white/70">
            Laptop Sale • Purchase • Repair
          </p>
          <p className="mt-3 max-w-sm text-sm text-white/60">
            Trusted laptop store and service center in Ballabgarh, Faridabad.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4" />
              <a href={PHONE_TEL} className="hover:text-white">{PHONE}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4" />
              <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4" />
              <span>{ADDRESS}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>© 2026 DG Computer. All Rights Reserved.</p>
          <p>Designed for Ballabgarh • Faridabad</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------ Floating + Helpers ----------------------- */

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
      <a
        href={waLink("Hi DG Computer, I'd like to enquire.")}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lift transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={PHONE_TEL}
        aria-label="Call DG Computer"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-card transition hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-5 left-4 z-50 grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground shadow-card transition hover:-translate-y-0.5"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function SectionCTA({ message }: { message: string }) {
  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 shadow-soft sm:flex-row sm:p-8">
      <div>
        <h3 className="font-display text-lg font-semibold">Need help choosing or fixing a laptop?</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Message us on WhatsApp — we reply quickly.
        </p>
      </div>
      <div className="flex gap-3">
        <a href={PHONE_TEL} className="btn-ghost">
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener"
          className="btn-whatsapp"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Us
        </a>
      </div>
    </div>
  );
}
