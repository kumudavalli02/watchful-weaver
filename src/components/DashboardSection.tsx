import { useState } from "react";
import { Eye, AlertTriangle, CheckCircle, Clock, TrendingDown, TrendingUp, RefreshCw, Search } from "lucide-react";

const mockSites = [
  { url: "amazon.com/product/123", status: "changed", type: "Price Drop", change: "-12%", time: "2 min ago", severity: "high" },
  { url: "competitor.com/pricing", status: "changed", type: "Content Update", change: "3 elements", time: "15 min ago", severity: "medium" },
  { url: "news.example.com", status: "unchanged", type: "No Changes", change: "—", time: "5 min ago", severity: "none" },
  { url: "docs.api.io/v2", status: "changed", type: "Layout Shift", change: "CSS changed", time: "1 hr ago", severity: "low" },
  { url: "shop.brand.com/sale", status: "alert", type: "Out of Stock", change: "Keyword detected", time: "30 sec ago", severity: "critical" },
  { url: "gov.policy.org/regs", status: "changed", type: "PDF Updated", change: "2 pages", time: "3 hr ago", severity: "medium" },
];

const severityColors: Record<string, string> = {
  critical: "bg-destructive/10 text-destructive border-destructive/30",
  high: "bg-warning/10 text-warning border-warning/30",
  medium: "bg-secondary/10 text-secondary border-secondary/30",
  low: "bg-accent/10 text-accent border-accent/30",
  none: "bg-muted text-muted-foreground border-border",
};

const statusIcons: Record<string, typeof Eye> = {
  changed: TrendingUp,
  unchanged: CheckCircle,
  alert: AlertTriangle,
};

const DashboardSection = () => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? mockSites : mockSites.filter((s) => s.status === filter);

  return (
    <section id="dashboard" className="relative py-24">
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]" />
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-mono text-xs tracking-widest text-primary uppercase">// LIVE MONITORING</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-foreground">REAL-TIME </span>
            <span className="text-primary text-glow-primary">DASHBOARD</span>
          </h2>
        </div>

        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card/60 backdrop-blur overflow-hidden gradient-border">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </div>
              <span className="font-display text-xs font-bold tracking-wider text-primary">LIVE</span>
              <span className="text-xs text-muted-foreground">· 6 sites monitored</span>
            </div>
            <div className="flex gap-2">
              {["all", "changed", "alert", "unchanged"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-md px-3 py-1.5 font-mono text-xs transition-all ${
                    filter === f
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-6 py-3 font-mono text-xs font-normal tracking-wider text-muted-foreground">STATUS</th>
                  <th className="px-6 py-3 font-mono text-xs font-normal tracking-wider text-muted-foreground">URL</th>
                  <th className="px-6 py-3 font-mono text-xs font-normal tracking-wider text-muted-foreground">TYPE</th>
                  <th className="px-6 py-3 font-mono text-xs font-normal tracking-wider text-muted-foreground">CHANGE</th>
                  <th className="px-6 py-3 font-mono text-xs font-normal tracking-wider text-muted-foreground">SEVERITY</th>
                  <th className="px-6 py-3 font-mono text-xs font-normal tracking-wider text-muted-foreground">TIME</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((site, i) => {
                  const Icon = statusIcons[site.status];
                  return (
                    <tr key={i} className="border-b border-border/50 transition-colors hover:bg-muted/20">
                      <td className="px-6 py-4">
                        <Icon className={`h-4 w-4 ${
                          site.status === "alert" ? "text-destructive" :
                          site.status === "changed" ? "text-warning" : "text-primary"
                        }`} />
                      </td>
                      <td className="px-6 py-4 font-mono text-sm text-foreground">{site.url}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{site.type}</td>
                      <td className="px-6 py-4 font-mono text-sm text-foreground">{site.change}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-xs ${severityColors[site.severity]}`}>
                          {site.severity.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{site.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
