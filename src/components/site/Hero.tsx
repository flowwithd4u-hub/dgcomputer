import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Wrench,
  Star,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";
import { useRef } from "react";
import heroLaptop from "@/assets/hero-laptop.jpg";

const trustBrands = [
  "Apple",
  "Dell",
  "HP",
  "Lenovo",
  "ASUS",
  "MSI",
  "Razer",
  "Microsoft",
  "Samsung",
  "LG",
  "Acer",
  "Intel",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.07]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden pt-28 pb-16 md:pt-40 md:pb-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--cyan-glow)_22%,transparent)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-72 w-72 rounded-full bg-cyan-glow/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-72 -z-10 h-72 w-72 rounded-full bg-cyan-glow/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        {/* Live status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-fit items-center gap-2.5 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-foreground font-medium">Open today</span>
          <span className="h-3 w-px bg-border" />
          <span>Same-day Diagnostics · 90-days Warranty</span>
        </motion.div>

        {/* Headline */}
        <div className="mt-8 text-center md:mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-gradient md:text-7xl lg:text-[112px]"
          >
            Technology that
            <br />
            <span className="italic font-light">Works Like New</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground md:mt-8 md:text-lg"
          >
            D.G Computers is your trusted premium partner for high-performance laptops, desktop computers, custom PC builds, IT accessories, and advanced technology solutions designed for modern professionals, students, businesses, and creators. We specialize in computer sales, purchases, repairs, diagnostics, maintenance, upgrades, and performance optimization.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:shadow-glow"
            >
              Book a Repair
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Shop Devices
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <PlayCircle className="h-4 w-4" />
              How it works
            </Link>
          </motion.div>

          {/* Trust micro-row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> No fix, No Fee
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-glow" /> OEM-Grade Parts
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" /> 4.9 · 1,000+ reviews
            </span>
          </motion.div>
        </div>

        {/* Hero visual with floating spec cards */}
        <motion.div
          style={{ y, scale, opacity }}
          className="relative mx-auto mt-14 max-w-5xl md:mt-20"
        >
          <div className="absolute inset-x-10 -bottom-6 h-24 rounded-[100%] bg-cyan-glow/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
            <img
              src={heroLaptop}
              alt="Premium laptop floating against a dark cinematic backdrop with cyan glow"
              width={1600}
              height={1200}
              className="block w-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="absolute -left-3 bottom-8 hidden w-[230px] rounded-2xl glass-strong p-4 shadow-elegant md:block lg:-left-10"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Avg. Turnaround</div>
                <div className="text-sm font-semibold tracking-tight">Under 24 hours</div>
              </div>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
              <div className="h-full w-[78%] rounded-full bg-cyan-glow" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="absolute -right-3 top-8 hidden w-[230px] rounded-2xl glass-strong p-4 shadow-elegant md:block lg:-right-10"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-glow/20 text-cyan-glow">
                <Wrench className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Diagnostic</div>
                <div className="text-sm font-semibold tracking-tight">Free · 48 Hrs-Point Check</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
              ))}
              <span className="ml-1 text-[11px] text-muted-foreground">4.9 / 5</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats band */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-y-8 rounded-3xl border border-border bg-surface-elevated/60 px-6 py-8 md:mt-20 md:grid-cols-4 md:gap-0 md:px-10">
          {[
            { n: "10,00+", l: "Repairs Delivered" },
            { n: "3,000+", l: "Happy Customers" },
            { n: "< 24 Hrs", l: "Avg. Turnaround" },
            { n: "90-Days", l: "Service Warranty" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative text-center md:border-l md:border-border md:first:border-l-0"
            >
              <div className="text-3xl font-semibold tracking-tight md:text-4xl">{s.n}</div>
              <div className="mt-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand marquee */}
        <div className="relative mt-16 md:mt-20">
          <div className="mb-5 text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Trusted Across Every Major Brand
          </div>
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="flex w-max animate-marquee gap-12 whitespace-nowrap py-2">
              {[...trustBrands, ...trustBrands].map((b, i) => (
                <span
                  key={`${b}-${i}`}
                  className="text-xl font-semibold tracking-tight text-muted-foreground/70 md:text-2xl"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
