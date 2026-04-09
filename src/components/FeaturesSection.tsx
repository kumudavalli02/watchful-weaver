import {
  Eye, Camera, Search, MousePointer, FileText, Brain,
  Bell, Mail, MessageSquare, BarChart3, Webhook, Clock,
  Shield, Database, Globe, Code, LineChart, FileSearch
} from "lucide-react";

const categories = [
  {
    title: "Intelligent Detection & Monitoring",
    color: "primary" as const,
    features: [
      { icon: Camera, title: "Visual Regression Testing", desc: "Pixel-by-pixel screenshot comparisons to detect layout, image, or CSS changes that HTML analysis might miss." },
      { icon: Search, title: "Keyword & Regex Tracking", desc: "Trigger alerts only when specific phrases appear or disappear — e.g., 'out of stock', 'price updated'." },
      { icon: MousePointer, title: "Interactive Browser Monitoring", desc: "Support JS-heavy sites by clicking buttons, filling forms, and managing cookies for behind-login content." },
      { icon: Eye, title: "Selective Element Monitoring", desc: "Pick specific CSS selectors or HTML elements to monitor, avoiding irrelevant changes like ads or timestamps." },
      { icon: FileText, title: "PDF & Document Tracking", desc: "Monitor PDF files for text changes, not just file existence — full content diff analysis." },
      { icon: Brain, title: "AI Anomaly Detection", desc: "Machine learning models that distinguish meaningful changes from noise, reducing false positives by 95%." },
    ],
  },
  {
    title: "Alerting & Reporting",
    color: "secondary" as const,
    features: [
      { icon: Bell, title: "Intelligent Noise Reduction", desc: "Filter out minor content changes like ad rotations to prevent alert fatigue." },
      { icon: Mail, title: "Multi-Channel Notifications", desc: "Alerts through email, SMS, Slack, Microsoft Teams, or custom webhooks." },
      { icon: BarChart3, title: "Detailed Change Reports", desc: "Side-by-side visual comparisons with color-highlighted diffs and HTML change logs." },
    ],
  },
  {
    title: "Advanced Functionality",
    color: "accent" as const,
    features: [
      { icon: Code, title: "REST API Access", desc: "Integrate change detection into your own CI/CD pipelines and custom workflows." },
      { icon: Clock, title: "Flexible Scheduling", desc: "Custom monitoring intervals from every 5 minutes to once a day with cron expressions." },
      { icon: Database, title: "Version History & Archiving", desc: "Full history of previous page versions to track changes over time with rollback." },
      { icon: Shield, title: "Proxy & Anti-Block Support", desc: "Rotating proxies and headless browser fingerprinting to bypass strict security." },
    ],
  },
  {
    title: "Specialized Use Cases",
    color: "warning" as const,
    features: [
      { icon: LineChart, title: "E-commerce Price Tracking", desc: "Dedicated tracking for price changes, stock availability, and competitor monitoring." },
      { icon: FileSearch, title: "SEO Structure Tracking", desc: "Monitor robots.txt, sitemaps, meta tags, and structured data to protect SEO rankings." },
      { icon: Globe, title: "Multi-Region Monitoring", desc: "Check website content from different geographic locations to detect region-specific changes." },
    ],
  },
];

const glowMap = {
  primary: "box-glow-primary border-primary/20 hover:border-primary/40",
  secondary: "box-glow-secondary border-secondary/20 hover:border-secondary/40",
  accent: "box-glow-accent border-accent/20 hover:border-accent/40",
  warning: "border-warning/20 hover:border-warning/40",
};

const textMap = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  warning: "text-warning",
};

const FeaturesSection = () => (
  <section id="features" className="relative py-24">
    <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-secondary/3 blur-[150px]" />
    <div className="container relative mx-auto px-4">
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block font-mono text-xs tracking-widest text-primary uppercase">// CORE CAPABILITIES</span>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          <span className="text-foreground">POWERFUL </span>
          <span className="text-primary text-glow-primary">FEATURES</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Comprehensive monitoring toolkit with AI-powered intelligence for detecting every meaningful change.
        </p>
      </div>

      {categories.map((cat) => (
        <div key={cat.title} className="mb-16">
          <h3 className={`mb-6 font-display text-lg font-bold tracking-wider ${textMap[cat.color]}`}>
            ▸ {cat.title.toUpperCase()}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat.features.map((f) => (
              <div
                key={f.title}
                className={`group rounded-xl border bg-card/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 ${glowMap[cat.color]}`}
              >
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted ${textMap[cat.color]}`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <h4 className="mb-2 font-display text-sm font-bold tracking-wide text-foreground">{f.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
