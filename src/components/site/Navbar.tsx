import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

const links = [
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/repair", label: "Repair" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-soft" : "bg-transparent"
          }`}
        >
          <Logo />

          <ul className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "rounded-full px-3 py-1.5 text-sm text-foreground bg-accent" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/contact"
              className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03] md:inline-flex"
            >
              Book Repair
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl glass-strong p-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-foreground px-3 py-2.5 text-center text-sm font-medium text-background"
                >
                  Book Repair
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
