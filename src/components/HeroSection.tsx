import { Eye, ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* Scanline */}
      <div className="absolute inset-0 scanline pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <div className={`mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs text-primary">Cloud Infrastructure & Services — Hackathon 2026</span>
        </div>

        {/* Title */}
        <h1 className={`max-w-5xl font-display text-4xl font-black leading-tight tracking-tight transition-all duration-700 delay-150 sm:text-5xl md:text-7xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-foreground">INTELLIGENT</span>
          <br />
          <span className="text-primary text-glow-primary">WEBSITE CHANGE</span>
          <br />
          <span className="text-foreground">DETECTION SYSTEM</span>
        </h1>

        {/* Subtitle */}
        <p className={`mt-6 max-w-2xl text-lg text-muted-foreground transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          AI-powered monitoring that detects visual regressions, content changes, price fluctuations,
          and anomalies — with multi-channel alerts and interactive browser automation.
        </p>

        {/* CTA */}
        <div className={`mt-10 flex flex-col items-center gap-4 sm:flex-row transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <button className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-display text-sm font-bold tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(160_100%_50%/0.4)]">
            START MONITORING
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 font-display text-sm font-bold tracking-wider text-foreground transition-all hover:border-primary/30 hover:box-glow-primary">
            <Eye className="h-4 w-4 text-primary" />
            LIVE DEMO
          </button>
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {[
            { icon: Globe, value: "10K+", label: "Websites Monitored" },
            { icon: Zap, value: "<500ms", label: "Detection Speed" },
            { icon: Shield, value: "99.9%", label: "Uptime SLA" },
            { icon: Eye, value: "50M+", label: "Changes Detected" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 rounded-xl border border-border bg-card/50 px-4 py-4 backdrop-blur">
              <s.icon className="mb-1 h-4 w-4 text-primary/60" />
              <span className="font-display text-2xl font-bold text-primary text-glow-primary">{s.value}</span>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
