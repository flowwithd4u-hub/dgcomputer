import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Laptop Repair", to: "/services" },
      { label: "Desktop Repair", to: "/services" },
      { label: "Upgrades", to: "/services" },
      { label: "Data Recovery", to: "/services" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Gaming Laptops", to: "/products/gaming" },
      { label: "Business Laptops", to: "/products/business" },
      { label: "Custom PCs", to: "/products/custom-pc" },
      { label: "Accessories", to: "/products/accessories" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Reviews", to: "/reviews" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Logo size={32} />
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              Premium laptop & computer solutions — sales, repair, upgrades and trade-ins.
              Engineered for trust, delivered with craft.
            </p>
            <form className="mt-6 flex max-w-sm items-center gap-2 rounded-full border border-border bg-surface-elevated p-1.5">
              <input
                type="email"
                placeholder="Subscribe for tech updates"
                aria-label="Email"
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background"
              >
                Join
              </button>
            </form>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} D.G Computers. Crafted with precision.
          </p>
          <div className="flex items-center gap-2">
            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-elevated transition-colors hover:bg-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
