import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.currentTarget as HTMLFormElement).reset();
  };

  const channels = [
    { icon: Phone, label: "Call us", value: "+91 9050145696", href: "tel:+91 9050145696" },
    { icon: MessageCircle, label: "WhatsApp", value: "+91 9050145696", href: "https://wa.me/919050145696" },
    { icon: Mail, label: "Email", value: "dgcomputer4u@gmail.com", href: "mailto:dgcomputer4u@gmail.com" },
    { icon: MapPin, label: "Visit", value: "Shop no. 1 , Jagdish Colony, BLB, FBD, 121004", href: "https://maps.google.com/?q=Shop+No.+1+Jagdish+Colony+Ballabgarh+Faridabad+Haryana+121004" },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
                Let's get your tech
                <span className="block text-muted-foreground">working like new.</span>
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Drop your details and we'll respond within an hour during business hours.
              </p>

              <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface-elevated p-4 transition-colors hover:bg-accent"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground">{c.label}</div>
                        <div className="truncate text-sm font-medium">{c.value}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 overflow-hidden rounded-3xl border border-border">
                <iframe
                  title="D.G Computers location"
                  src="https://www.openstreetmap.org/export/embed.html?search=Shop%20No.%201%2C%20Jagdish%20Colony%2C%20Ballabgarh%2C%20Faridabad%2C%20Haryana%20121004"
                  className="h-56 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="relative h-full rounded-3xl border border-border glass p-6 md:p-10"
            >
              <div className="grid gap-4">
                <Field label="Full name" name="name" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <Field label="Device & issue" name="device" placeholder="e.g. MacBook Pro 14 — battery" />
                <div>
                  <label className="block text-xs text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:shadow-glow"
                    placeholder="Tell us what's going on…"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:shadow-glow"
                >
                  {sent ? "Thanks — we'll be in touch." : "Send enquiry"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:shadow-glow"
      />
    </div>
  );
}
