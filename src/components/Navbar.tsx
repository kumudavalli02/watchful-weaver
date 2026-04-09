import { Eye, Shield, Zap, BarChart3, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Features", "Architecture", "Dashboard", "Alerts", "Use Cases", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 box-glow-primary">
            <Eye className="h-5 w-5 text-primary" />
          </div>
          <span className="font-display text-sm font-bold tracking-wider text-primary">
            WATCHDOG<span className="text-foreground">.AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {l}
            </a>
          ))}
          <button className="rounded-lg bg-primary px-4 py-2 font-display text-xs font-bold tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(160_100%_50%/0.4)]">
            LAUNCH DEMO
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3 p-4">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>
                {l}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
