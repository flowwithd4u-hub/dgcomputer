import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import repairBg from "@/assets/repair-bg.jpg";

const steps = [
  { n: "01", title: "Device inspection", desc: "Every device begins with a detailed visual and technical inspection performed by experienced technicians. We examine hardware condition, physical damage, overheating signs, battery health, display issues, connectivity faults." },
  { n: "02", title: "Diagnosis", desc: "Using professional-grade diagnostic tools and deep system analysis, we identify the exact root cause of hardware, software, thermal, power, or performance-related issues." },
  { n: "03", title: "Repair", desc: "Certified technicians perform high-precision repairs and component replacements using trusted parts, advanced equipment, and industry-standard repair procedures." },
  { n: "04", title: "Quality testing", desc: "Before delivery, every system undergoes extensive quality assurance testing, stress analysis, thermal monitoring, performance benchmarking, and functionality verification." },
  { n: "05", title: "Delivery", desc: "Once testing is complete, the device is securely cleaned, packaged, and prepared for pickup or doorstep delivery. Customers receive a fully optimized system along with service guidance." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section id="repair" className="relative overflow-hidden bg-foreground text-background py-24 md:py-36">
      <img
        src={repairBg}
        alt=""
        aria-hidden="true"
        width={1600}
        height={1000}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground/90 to-foreground" />

      <div className="relative mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-background/60">Repair Process</span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
              Precision At Every Step.
            </h2>
            <p className="mt-5 text-background/70">
              A Meticulous workflow refined across 10,000+ repairs. From intake to delivery, every stage engineered for quality, speed, and transparency. We don’t just fix devices we perfect the process.
            </p>
          </div>
        </Reveal>

        <div ref={ref} className="relative mx-auto mt-20 max-w-3xl">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-background/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute left-[27px] top-2 bottom-2 w-px bg-cyan-glow md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-10 md:space-y-16">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className={`relative grid grid-cols-[56px_1fr] items-start gap-4 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className={`md:text-right ${i % 2 === 1 ? "md:text-left" : ""}`}>
                  <div className="hidden md:block">
                    <div className="text-xs uppercase tracking-[0.2em] text-background/50">Step {s.n}</div>
                    <h3 className="mt-2 text-2xl font-medium tracking-tight">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-background/60">{s.desc}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-1 flex h-14 w-14 -translate-x-0 items-center justify-center rounded-full border border-background/15 bg-foreground text-sm font-medium md:left-1/2 md:-translate-x-[calc(50%+0px)] md:-ml-7">
                    {s.n}
                  </div>
                  <div className="pl-20 md:hidden">
                    <div className="text-xs uppercase tracking-[0.2em] text-background/50">Step {s.n}</div>
                    <h3 className="mt-1 text-xl font-medium tracking-tight">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-background/60">{s.desc}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
