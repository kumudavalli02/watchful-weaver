import { ShoppingCart, Search, FileText, Shield, Globe, Newspaper } from "lucide-react";

const cases = [
  { icon: ShoppingCart, title: "E-Commerce Price Tracking", desc: "Monitor competitor pricing, stock availability, and promotional changes across thousands of product pages in real-time.", color: "text-primary", border: "border-primary/20 hover:border-primary/40" },
  { icon: Search, title: "SEO & SERP Monitoring", desc: "Track changes in robots.txt, sitemaps, meta tags, and structured data that could impact your search rankings.", color: "text-accent", border: "border-accent/20 hover:border-accent/40" },
  { icon: FileText, title: "Legal & Compliance", desc: "Monitor terms of service, privacy policies, and regulatory documents for changes that affect your business.", color: "text-secondary", border: "border-secondary/20 hover:border-secondary/40" },
  { icon: Shield, title: "Security Monitoring", desc: "Detect unauthorized changes to your web properties, DNS records, and SSL certificates.", color: "text-destructive", border: "border-destructive/20 hover:border-destructive/40" },
  { icon: Globe, title: "Government & Policy", desc: "Track legislative changes, government announcements, and regulatory updates across official portals.", color: "text-warning", border: "border-warning/20 hover:border-warning/40" },
  { icon: Newspaper, title: "News & Media Tracking", desc: "Monitor breaking news, press releases, and media coverage related to your brand or industry.", color: "text-primary", border: "border-primary/20 hover:border-primary/40" },
];

const UseCasesSection = () => (
  <section id="use-cases" className="relative py-24">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="container relative mx-auto px-4">
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block font-mono text-xs tracking-widest text-warning uppercase">// APPLICATIONS</span>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          <span className="text-foreground">USE </span>
          <span className="text-warning">CASES</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <div key={c.title} className={`group rounded-xl border bg-card/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 ${c.border}`}>
            <c.icon className={`mb-4 h-8 w-8 ${c.color}`} />
            <h4 className="mb-2 font-display text-sm font-bold tracking-wide text-foreground">{c.title}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
