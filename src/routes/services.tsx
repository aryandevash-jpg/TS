import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/components/site/services";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CONTACT, waLink } from "@/lib/contact";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TwinStack" },
      { name: "description", content: "Websites, Google Business Profiles, online booking, Instagram setup and analytics for Rishikesh businesses." },
      { property: "og:title", content: "Services — TwinStack" },
      { property: "og:description", content: "Six focused digital services for local Rishikesh cafés, hotels, yoga studios and shops." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const benefits: Record<string, string> = {
    website: "Benefit: More trust and more direct bookings.",
    fix: "Benefit: Fewer drop-offs and better customer experience.",
    gbp: "Benefit: Higher local visibility on Google Maps.",
    booking: "Benefit: Faster confirmations and fewer missed leads.",
    instagram: "Benefit: Stronger brand recall and more DMs.",
    analytics: "Benefit: Clear decisions based on real numbers.",
  };

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:pt-24">
        <SectionHeading
          eyebrow="Services"
          title="Less talk. Better digital presence."
          subtitle="Simple upgrades for local businesses. Built fast. Easy to run."
        />
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={CONTACT.calendly} target="_blank" rel="noreferrer">
              <CalendarCheck className="mr-1 h-4 w-4" /> Book free consult
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-[color:var(--whatsapp)] text-[color:var(--whatsapp)] hover:bg-[color:var(--whatsapp)]/5 hover:text-[color:var(--whatsapp)]">
            <a href={waLink()} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp us
            </a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to="/samples"
                hash={service.sampleAnchor}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-secondary px-2 py-1 text-xs font-semibold text-foreground">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-5 text-lg font-semibold leading-tight text-foreground">{service.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <p className="mt-4 text-sm font-medium text-foreground">{benefits[service.slug]}</p>
                <p className="mt-5 inline-flex items-center text-sm font-medium text-primary">
                  View sample <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="rounded-3xl border border-border bg-secondary/40 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">How we work</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {["Free 7-day trial", "Quick launch", "Monthly growth support"].map((step) => (
              <div key={step} className="rounded-2xl bg-card px-5 py-6 text-center shadow-[var(--shadow-soft)]">
                <p className="text-base font-semibold text-foreground">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href={CONTACT.calendly} target="_blank" rel="noreferrer">
                Schedule on Calendly <CalendarCheck className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/contact">Contact options <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
