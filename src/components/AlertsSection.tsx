import { Mail, MessageSquare, Phone, Bell, Webhook, Send } from "lucide-react";

const channels = [
  { icon: Mail, name: "Email", desc: "SMTP/SES integration with rich HTML diff reports", color: "text-primary", glow: "box-glow-primary border-primary/20" },
  { icon: MessageSquare, name: "Slack", desc: "Real-time channel notifications with change previews", color: "text-accent", glow: "box-glow-accent border-accent/20" },
  { icon: Phone, name: "SMS", desc: "Twilio-powered SMS alerts for critical changes", color: "text-secondary", glow: "box-glow-secondary border-secondary/20" },
  { icon: Bell, name: "Teams", desc: "Microsoft Teams webhook integration", color: "text-warning", glow: "border-warning/20" },
  { icon: Webhook, name: "Webhooks", desc: "Custom HTTP endpoints for any service", color: "text-primary", glow: "box-glow-primary border-primary/20" },
  { icon: Send, name: "Telegram", desc: "Bot API notifications with inline previews", color: "text-accent", glow: "box-glow-accent border-accent/20" },
];

const AlertsSection = () => (
  <section id="alerts" className="relative py-24">
    <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[120px]" />
    <div className="container relative mx-auto px-4">
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block font-mono text-xs tracking-widest text-secondary uppercase">// NOTIFICATIONS</span>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          <span className="text-foreground">MULTI-CHANNEL </span>
          <span className="text-secondary text-glow-secondary">ALERTS</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Get notified instantly through your preferred channels when meaningful changes are detected.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map((ch) => (
          <div key={ch.name} className={`group rounded-xl border bg-card/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 ${ch.glow}`}>
            <ch.icon className={`mb-4 h-8 w-8 ${ch.color}`} />
            <h4 className="mb-2 font-display text-sm font-bold tracking-wide text-foreground">{ch.name}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{ch.desc}</p>
          </div>
        ))}
      </div>

      {/* Sample alert */}
      <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-destructive/20 bg-destructive/5 p-6 backdrop-blur">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
            <Bell className="h-5 w-5 text-destructive" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-destructive">CRITICAL ALERT</span>
              <span className="font-mono text-xs text-muted-foreground">· 30 seconds ago</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              <span className="font-mono text-foreground">shop.brand.com/sale</span> — Keyword <span className="font-mono text-destructive">"out of stock"</span> detected. Price element removed from DOM.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AlertsSection;
