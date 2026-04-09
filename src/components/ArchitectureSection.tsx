import { Cloud, Server, Database, Globe, Cpu, ArrowRight, Wifi } from "lucide-react";

const nodes = [
  { icon: Globe, label: "Target Websites", x: "5%", y: "20%", color: "primary" },
  { icon: Wifi, label: "Headless Browser", x: "25%", y: "50%", color: "accent" },
  { icon: Cpu, label: "Change Engine", x: "50%", y: "30%", color: "primary" },
  { icon: Database, label: "Version Store", x: "50%", y: "70%", color: "secondary" },
  { icon: Cloud, label: "AI Analysis", x: "75%", y: "50%", color: "accent" },
  { icon: Server, label: "Alert System", x: "95%", y: "30%", color: "primary" },
];

const ArchitectureSection = () => (
  <section id="architecture" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-20" />
    <div className="container relative mx-auto px-4">
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block font-mono text-xs tracking-widest text-accent uppercase">// SYSTEM DESIGN</span>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          <span className="text-foreground">CLOUD </span>
          <span className="text-accent text-glow-accent">ARCHITECTURE</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Scalable, event-driven architecture built on cloud-native services for maximum reliability.
        </p>
      </div>

      {/* Architecture Diagram */}
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card/40 p-8 backdrop-blur gradient-border">
        <div className="grid gap-4 md:grid-cols-3">
          {/* Data Collection */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-bold tracking-widest text-primary">▸ DATA COLLECTION</h4>
            <div className="space-y-3">
              {["Headless Chromium Browser", "HTTP/HTTPS Fetcher", "Cookie & Session Manager", "Proxy Rotation Engine"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
                  <span className="font-mono text-xs text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Processing */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-bold tracking-widest text-accent">▸ PROCESSING ENGINE</h4>
            <div className="space-y-3">
              {["Visual Diff (Pixel Compare)", "HTML DOM Diff Engine", "AI Content Classifier", "Regex/Keyword Scanner", "PDF Text Extractor"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-accent/20 bg-accent/5 px-4 py-3">
                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
                  <span className="font-mono text-xs text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Output */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-bold tracking-widest text-secondary">▸ ALERT & STORAGE</h4>
            <div className="space-y-3">
              {["Email (SMTP/SES)", "Slack & Teams Webhooks", "SMS (Twilio)", "PostgreSQL Archive", "REST API Endpoints"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-secondary/20 bg-secondary/5 px-4 py-3">
                  <div className="h-2 w-2 rounded-full bg-secondary animate-pulse-glow" />
                  <span className="font-mono text-xs text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flow arrows */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">FETCH</span>
          <ArrowRight className="h-4 w-4 text-primary" />
          <span className="font-mono text-xs text-muted-foreground">COMPARE</span>
          <ArrowRight className="h-4 w-4 text-accent" />
          <span className="font-mono text-xs text-muted-foreground">ANALYZE</span>
          <ArrowRight className="h-4 w-4 text-secondary" />
          <span className="font-mono text-xs text-muted-foreground">ALERT</span>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { name: "Docker", desc: "Containerization" },
          { name: "Kubernetes", desc: "Orchestration" },
          { name: "PostgreSQL", desc: "Version Store" },
          { name: "Redis", desc: "Job Queue" },
        ].map((t) => (
          <div key={t.name} className="rounded-xl border border-border bg-card/40 p-4 text-center backdrop-blur transition-all hover:border-primary/30">
            <span className="font-display text-sm font-bold text-foreground">{t.name}</span>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ArchitectureSection;
