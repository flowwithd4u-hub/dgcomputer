import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  crumbs = [{ label: "Home", to: "/" }],
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <section
      className="relative isolate overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--cyan-glow)_18%,transparent)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4">
        <motion.nav
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {c.to ? (
                <Link to={c.to} className="hover:text-foreground transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span>{c.label}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 opacity-60" />}
            </span>
          ))}
          <ChevronRight className="h-3 w-3 opacity-60" />
          <span className="text-foreground">{eyebrow}</span>
        </motion.nav>

        <div className="mt-8 grid gap-10 md:mt-12 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground"
            >
              {eyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.035em] text-gradient md:text-7xl"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
              >
                {subtitle}
              </motion.p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-x-8 -bottom-6 h-20 rounded-[100%] bg-cyan-glow/25 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
                <img
                  src={image}
                  alt={imageAlt ?? ""}
                  width={1600}
                  height={1000}
                  className="block w-full"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
